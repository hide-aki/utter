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

const levelDelete = async (_, {id}, ctx) => {
  if (token === "null") {
    return new Error("You need to be registered to view this resource.")
  }
  const token = ctx.req.headers.authorization
  const user = await userByToken(token, (err, res) => {
    if (err) return err
    return res
  })

  const level = await Level.findOneAndDelete({owner: user._id})
  if (!level) {
    throw new Error("No level found by this owner.")
  }

  if (level) {
    return true
  }
}

const levelUpdate = (_, {input}) => {
  const {id, ...update} = input
  return Level.findByIdAndUpdate(id, update, {new: true}).exec()
}

const levelCreate = async (_, args, ctx, info) => {
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

  console.log("input: ", input)

  const level = await Course.update(
    {
      _id: input.courseId,
      "levels.level": {
        $ne: input.level
      }
    },
    {
      $push: {
        levels: {
          level: input.level,
          title: input.title
        }
      }
    }
  )

  /* const level = await Course.findOneAndUpdate( */
  /*   {push: {levels: {level: input.level, title: input.title}}}, */
  /*   {new: true} */
  /* ) */

  console.log("LEVELVELVELVLELVELVELEL: ", level)

  if (!level) {
    arrayOfErrors.push({
      path: "level",
      message: "Invalid level"
    })
  }

  console.log("array of errors: ", arrayOfErrors)

  return {
    level: level,
    errors: arrayOfErrors
  }
}

const getLevels = async (_, args, ctx, info) => {
  let result = await Course.find({_id: args.courseId})
    .sort({_id: -1})
    .exec()

  if (isEmpty(result)) {
    return {levels: []}
  } else {
    return {levels: result[0].levels}
  }
}

export const levelResolvers = {
  Query: {
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
