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

const getLevel = async (_, {levelId}, {user}) => {
  const level = await Level.findById(levelId).exec()
  if (!level) {
    throw new Error("Cannot find level with id")
  }

  return level
}

const getLevels = async (_, args, ctx, info) => {
  const course = await Course.findById(args.courseId)
    .populate("levels")
    .limit(100)
    .lean()

  const ids = course.levelSort

  const sortedLevels = course.levels.sort(function(a, b) {
    // Sort docs by the order of their _id values in ids.
    return ids.indexOf(a._id.toString()) - ids.indexOf(b._id.toString())
  })

  if (isEmpty(course.levels)) {
    return {levels: []}
  } else {
    return {levels: sortedLevels}
  }
}

const levelDelete = async (_, args, ctx) => {
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

const levelSort = async (_, {input}, {redis, url}) => {
  console.log("input ", input)

  const course = await Course.findByIdAndUpdate(input.courseId, {
    levelSort: input.levelSort
  }).exec()
  console.log("course: ", course)
  /* const redisToken = args.input.token */
  /* const redisKey = `${confirmEmailPrefix}${redisToken}` */
  /* const userId = await redis.get(redisKey) */

  const {_id, ...update} = input
  /* Level.findByIdAndUpdate(input_id, input, {new: true}).exec() */
  return {
    level: Level,
    errors: []
  }
}

const levelUpdate = (_, {input}) => {
  console.log("update: ", input)
  const {_id, ...update} = input
  return Level.findByIdAndUpdate(_id, update, {new: true}).exec()
}

const levelCreate = async (_, {input}, ctx, info) => {
  let arrayOfErrors = []
  const token = ctx.req.headers.authorization
  if (token === "null") {
    return new Error("You need to be registered to view this resource.")
  }
  const user = await userByToken(token, (err, res) => {
    if (err) return err
    return res
  })

  console.log("input: ", input)

  const newLevel = new Level({...input, course: input.courseId})

  const level = await newLevel.save()

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

export const levelResolvers = {
  Query: {
    getLevels,
    getLevel
  },
  Mutation: {
    levelDelete,
    levelCreate,
    levelSort,
    levelUpdate
  }
  /* Level: { */
  /*   async course(level) { */
  /*     const populated = await level.populate("course").execPopulate() */

  /*     return populated.course */
  /*   } */
  /* } */
}
