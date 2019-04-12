import isEmpty from "lodash/isEmpty"
import config from "../../config"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"
import Course from "../course/course-model"
import Level from "./level-model"
import {userByToken} from "../shared/resolver-functions.js"

const escapeRegex = text => {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
}

const allLevels = async (_, {levelId}, {user}) => {
  console.log("hello")
  const level = await Level.findById(levelId).exec()
  if (!level) {
    throw new Error("Cannot find level with id")
  }

  return level
}

const getLevel = async (_, {levelId}, {user}) => {
  console.log("bye")
  const level = await Level.findById(levelId).exec()
  if (!level) {
    throw new Error("Cannot find level with id")
  }

  return level
}

const levelDelete = async (_, args, ctx) => {
  console.log("nah")
  const arrayOfErrors = []
  if (token === "null") {
    return new Error("You need to be registered to view this resource.")
  }
  const token = ctx.req.headers.authorization
  const user = await userByToken(token, (err, res) => {
    if (err) return err
    return res
  })

  const level = await Level.findByIdAndDelete(args._id)

  if (!level) {
    arrayOfErrors.push({
      path: "level",
      message: "An Error has occured.  Please contact technical support."
    })
  }

  return {
    level,
    errors: arrayOfErrors
  }
}

const levelUpdate = (_, {input}) => {
  console.log("update")
  const {_id, ...update} = input
  return Level.findByIdAndUpdate(_id, update, {new: true}).exec()
}

const levelCreate = async (_, args, ctx, info) => {
  console.log("args: ", args)
  let arrayOfErrors = []
  const token = ctx.req.headers.authorization
  if (token === "null") {
    return new Error("You need to be registered to view this resource.")
  }
  const user = await userByToken(token, (err, res) => {
    if (err) return err
    return res
  })

  const {input} = args

  const newLevel = new Level({...input, course: input.courseId})

  const level = await newLevel.save()

  console.log("level: ", level)

  const course = await Course.findById(input.courseId)

  course.levels.push(level)

  await course.save()

  if (!course) {
    arrayOfErrors.push({
      path: "level",
      message: "Course was not found."
    })
  } else {
    return {
      level,
      errors: arrayOfErrors
    }
  }
}

const getLevels = async (_, args, ctx, info) => {
  let result = await Course.find({_id: args.courseId})
    .populate("levels")
    .sort({_id: -1})
    .limit(100)
    .lean()

  const sortedLevels = result[0].levels.sort((a, b) => {
    return a.level - b.level
  })

  if (isEmpty(result)) {
    return {levels: []}
  } else {
    return {levels: sortedLevels}
  }
}

export const levelResolvers = {
  Query: {
    allLevels,
    getLevels,
    getLevel
  },
  Mutation: {
    levelDelete,
    levelUpdate,
    levelCreate
  }
  /* Level: { */
  /*   async course(level) { */
  /*     const populated = await level.populate("course").execPopulate() */

  /*     return populated.course */
  /*   } */
  /* } */
}
