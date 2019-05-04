import isEmpty from "lodash/isEmpty"
import config from "../../config"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"
import Course from "./course-model"
import User from "../user/user-model.js"
import Level from "../level/level-model.js"
import {userByToken} from "../shared/resolver-functions.js"

const escapeRegex = text => {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
}
/* 
** 
** @coursesById
**
** usage: 
** coursesById(courseIds) => {} 
**
** return: Given an array of course ids this will return an array of coureses that contain at least one of those ids.  
**
** notes: 
**
*/
const coursesById = async courseIds => {
  try {
    const courses = await Course.find({_id: {$in: courseIds}}).lean()
    return courses.map(course => {
      return {
        ...course,
        owner: userById.bind(this, course.owner)
      }
    })
  } catch (err) {
    throw err
  }
}
/* 
** 
** @mongooseToJs
**
** usage: 
** mongooseToJs(object) => {} 
**
** return: A new js object with a stringified _id and an owner Id.  The object to convert must have an owner property.
**
** notes: converts a mongoose object to a plain js object discarding mongoose meta data.   
**
*/
const mongooseToJs = object => {
  return {
    ...object._doc,
    _id: object._doc._id.toString(),
    owner: userById.bind(this, object._doc.owner)
  }
}

/* 
** 
** @userById
**
** usage: 
** userById(userId) => {} 
**
** return: 
**
** notes: 
**
*/

const userById = async userId => {
  try {
    const user = await User.findById(userId).lean()
    if (user) {
      return {
        ...user,
        createdCourses: coursesById.bind(this, user.createdCourses)
      }
    }
    return {
      username: ""
    }
  } catch (err) {
    throw err
  }
}

const getCourse = async (_, args, {user}) => {
  console.log("args: ", args)
  try {
    const course = await Course.findById(args._id)
      .populate("owner")
      .populate("levels")
      .lean()
    if (!course) {
      throw new Error("Cannot find course with id")
    }

    return course
  } catch (err) {
    return err
  }
}

const courseDelete = async (_, {resourceId}, ctx) => {
  // TODO: on frontend have users lookup courses and updating their subscriptions before showing them...
  try {
    User.find({"subscriptions._id": resourceId})

    const token = ctx.req.headers.authorization
    const user = await userByToken(token, (err, res) => {
      if (err) return err
      return res
    })

    const course = await Course.findByIdAndDelete(resourceId.toString()).lean()
    if (!course) {
      throw new Error("No course found by this owner.")
    }

    // TODO: DELET all references

    const levels = await Level.find({course: course._id}).lean()
    levels.map(async level => {
      const deleted = await Level.findOneAndDelete({_id: level._id}).exec()
      // vocabulary is deleted in the level-model.js
    })

    /* const level = await Level.deleteMany({course: course._id}).exec() */
    /* const vocabulary = await Vocabulary.deleteMany({course: course._id}).exec() */

    if (course) {
      return true
    } else {
      return false
    }
  } catch (err) {
    throw err
  }
}

const courseUpdate = async (_, args, ctx) => {
  try {
    if (!ctx.isAuth) {
      return new Error("You need to be registered to edit this course.")
    }
    const {_id, ...update} = args.input
    const course = await Course.findByIdAndUpdate(_id, update, {
      new: true
    }).lean()

    let updatedCourse = {
      ...course,
      _id: course._id.toString(),
      owner: userById.bind(this, course.owner)
    }

    return updatedCourse
  } catch (err) {
    throw err
  }
}

const courseCreate = async (_, args, ctx, info) => {
  try {
    if (!ctx.isAuth) {
      throw new Error("You need to be registered to create a course.")
    }

    const userId = ctx.req.token._id

    const user = await User.findById(userId, (err, res) => {
      if (err) return err
      return res
    })

    const newCourse = new Course({
      courseImage: args.input.courseImage,
      title: args.input.title,
      courseDescription: args.input.courseDescription,
      courseMode: args.input.courseMode,
      resource: args.input.resource,
      teachingLang: args.input.teachingLang,
      usingLang: args.input.usingLang,
      owner: user._id
    })

    let createdCourse

    const course = await newCourse.save()

    createdCourse = {
      ...course._doc,
      _id: course._doc._id.toString(),
      owner: userById.bind(this, course._doc.owner)
    }

    const owner = await User.findById(userId)

    if (!owner) {
      throw new Error("User not found.")
    }

    owner.createdCourses.push(course)

    await owner.save()

    return createdCourse
  } catch (err) {
    throw err
  }
}

const getCourseLevels = async (_, args, ctx, info) => {
  // build query object
  const query = {}
  query.owner = ctx.user
}

const getCreatedCourses = async (_, args, ctx, info) => {
  try {
    if (!ctx.isAuth) {
      return new Error("You need to be registered to create a course.")
    }
    const token = ctx.req.headers.authorization
    const user = await userByToken(token, (err, res) => {
      if (err) return err
      return res
    })

    // build query object
    const query = {}
    query.owner = user._id
    // end query object

    if (args.cursor && args.cursor !== "done") {
      // type cast id because $lt is not the same in aggregate vs query
      var cursorObj = mongoose.Types.ObjectId(args.cursor)
      // add to query object
      var cursor = cursorObj
      query._id = {$lt: cursor}
    }

    const courses = await Course.find(query)
      .lean()
      .limit(12)
      .sort({_id: -1})

    if (isEmpty(courses)) {
      return {courses: [], cursor: "done"}
    }

    const convertedCourses = courses.map(course => {
      return {
        ...course,
        owner: userById.bind(this, course.owner)
      }
    })

    const lastCourse = await Course.findOne().sort({field: "asc", _id: 1}) //TODO: index?
    cursor = convertedCourses[convertedCourses.length - 1]._id

    if (
      isEmpty(convertedCourses) ||
      lastCourse._doc._id.toString() === cursor
    ) {
      return {courses: convertedCourses, cursor: "done"}
    } else {
      return {courses: convertedCourses, cursor}
    }
  } catch (err) {
    throw err
  }
}

const getCourses = async (_, {input}, ctx, info) => {
  console.log("ionput: ", input)
  /* const query = {resource: "h-dog", owner: "5caa11c126bd462e4023657b"} */

  const options = {
    lean: true,
    page: input.page,
    limit: 12,
    populate: "owner",
    collation: {
      locale: "en"
    }
  }

  // we don't need page or cursor in our query
  var query = {}
  delete input.page
  delete input.cursor
  for (var key in input) {
    input[key] !== "" ? (query[key] = input[key]) : null
  }

  // fuzzy search on searchInput
  input.searchInput
    ? (query[input.selectionBox] = new RegExp(
        escapeRegex(input.searchInput),
        "gi"
      ))
    : null

  delete query.searchInput
  delete query.selectionBox

  /* end fuzzy search */

  console.log("quer; ", query)

  return Course.paginate(query, options, function(err, result) {
    console.log("results count: ", result.totalDocs)

    return {
      page: result.page,
      courses: result.docs,
      more: result.hasNextPage
    }
  })
}

/* const getCourses = async (_, args, ctx, info) => { */
/*   var more = false */
/*   var input = args.input */
/*   if (input.searchInput || input.selectionBox) { */
/*     input[input.selectionBox] = input.searchInput */
/*     delete input.searchInput */
/*     delete input.selectionBox */
/*   } */
/*   var query = {} */
/*   for (var key in input) { */
/*     input[key] !== "" ? (query[key] = input[key]) : null */
/*   } */

/*   query.title */
/*     ? (query.title = new RegExp(escapeRegex(query.title), "gi")) : null */

/*   if (query.owner) { */
/*     query.owner = await User.findOne({username: query.owner}, (err, docs) => { */
/*       if (err) { */
/*         throw err */
/*       } */
/*       if (!isEmpty(docs)) { */
/*         var owner = docs._id */
/*         query.owner = docs._id */
/*       } */
/*     }) */
/*   } */

/*   query.resource */
/*     ? (query.resource = new RegExp(escapeRegex(query.resource), "gi"))  : null */

/*   if (query.cursor) { */
/*     query._id = {$lt: query.cursor || null} */
/*     delete query.cursor */
/*   } */

/*   try { */
/*     const courses = await Course.find(query) */
/*       .populate("owner") */
/*       .populate("levels") */
/*       .sort({_id: -1}) */
/*       .limit(24) */
/*       .lean() */

/*     const lastCourses = await Course.find(query) */
/*       .sort({_id: -1}) */
/*       .lean() */

/*     if (lastCourses.length !== 0) { */
/*       var lastCourse = lastCourses[lastCourses.length - 1]._id */
/*     } else { */
/*       lastCourse = {} */
/*     } */

/*     let obj = courses.find(o => o._id.toString() === lastCourse._id.toString()) */

/*     if (obj) { */
/*       more = false */
/*     } else { */
/*       more = true */
/*     } */

/*     return {courses, more} */
/*   } catch (err) { */
/*     throw err */
/*   } */
/* } */

const subscribe = async (_, args, ctx, info) => {
  const course = await Course.findOneAndUpdate(
    {_id: args.courseId},
    {$inc: {subscribers: 1}}
  )
  const userId = ctx.req.token._id
  try {
    const user = await User.findById(userId, (err, res) => {
      if (err) return err
      return res
    })
    user.subscriptions.push(course)

    const result = await user.save()
    if (result) {
      return course
    }
  } catch (err) {
    throw err
  }
}

const unsubscribe = async (_, args, ctx, info) => {
  const course = await Course.findOneAndUpdate(
    {
      _id: args.courseId,
      subscribers: {$gte: 1}
    },
    {$inc: {subscribers: -1}}
  )
  const userId = ctx.req.token._id

  try {
    const user = await User.findById(userId, (err, res) => {
      if (err) return err
      return res
    })
    user.subscriptions.pull(course)

    const result = await user.save()
    if (result) {
      return true
    }
  } catch (err) {
    throw err
  }
}

export const courseResolvers = {
  Query: {
    getCreatedCourses,
    getCourses,
    getCourse,
    getCourseLevels
  },
  Mutation: {
    courseDelete,
    courseUpdate,
    courseCreate,
    subscribe,
    unsubscribe
  }
  /* Course: { */
  /*   async owner(course) { */
  /*     const populated = await course.populate("owner").execPopulate() */

  /*     return populated.owner */
  /*   } */
  /* } */
}
