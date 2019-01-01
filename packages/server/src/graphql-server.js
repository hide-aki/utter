import {ApolloServer} from "apollo-server-express"
import {importSchema} from "graphql-import"
import {makeExecutableSchema} from "graphql-tools"
import merge from "lodash/merge"
import mongoose from "mongoose"
import fs from "fs"
import path from "path"
import {DeprecatedDirective} from "./directives/deprecated/deprecated.js"
import {FormattableDateDirective} from "./directives/formattableDate.js"
import {isAuthenticatedDirective} from "./directives/auth/auth-directive"
import {redis} from "./redis"
import {restDirective} from "./directives/rest.js"
/* import { userLoader } from './loaders/userLoader'; */

// schema imports
const appSchema = path.join(__dirname, "./api/app/app.graphql")
const courseSchema = path.join(__dirname, "./api/course/course.graphql")
const levelSchema = path.join(__dirname, "./api/level/level.graphql")
const termSchema = path.join(__dirname, "./api/term/term.graphql")
const testSchema = path.join(__dirname, "./api/test/test.graphql")
const userSchema = path.join(__dirname, "./api/user/user.graphql")
const zoneSchema = path.join(__dirname, "./api/zone/zone.graphql")

// type defs
const appTypeDefs = fs.readFileSync(appSchema, "utf8")
const courseTypeDefs = fs.readFileSync(courseSchema, "utf8")
const levelTypeDefs = fs.readFileSync(levelSchema, "utf8")
const termTypeDefs = fs.readFileSync(termSchema, "utf8")
const testTypeDefs = fs.readFileSync(testSchema, "utf8")
const userTypeDefs = fs.readFileSync(userSchema, "utf8")
const zoneTypeDefs = fs.readFileSync(zoneSchema, "utf8")

// resolver imports
import {appResolvers} from "./api/app/app-resolvers.js"
import {courseResolvers} from "./api/course/course-resolvers.js"
import {levelResolvers} from "./api/level/level-resolvers.js"
import {termResolvers} from "./api/term/term-resolvers.js"
import {testResolvers} from "./api/test/test-resolvers.js"
import {userResolvers} from "./api/user/user-resolvers.js"
import {zoneResolvers} from "./api/zone/zone-resolvers.js"

// baseSchema minimum requirement is a property query: Query
const baseSchema = `
  schema {
    query: Query,
    mutation: Mutation
  }
`
const schema = makeExecutableSchema({
  schemaDirectives: {
    formattableDate: FormattableDateDirective,
    deprecated: DeprecatedDirective,
    auth: isAuthenticatedDirective
  },
  typeDefs: [
    baseSchema,
    userTypeDefs,
    courseTypeDefs,
    levelTypeDefs,
    termTypeDefs,
    testTypeDefs,
    zoneTypeDefs
  ],
  resolvers: merge(
    {},
    userResolvers,
    courseResolvers,
    levelResolvers,
    termResolvers,
    testResolvers,
    zoneResolvers
  )
})

// reference: https://gist.github.com/donedgardo/ed2d36f6e650991543e5a55c77cddc0d
// TODO: if apollo-server2 integrates with graphql-shield then check following line:
/* const schemaWithMiddleware = applyMiddleware(schema, permissions) */

const {ObjectId} = mongoose.Types
ObjectId.prototype.valueOf = function() {
  return this.toString()
}

/*
 * graphqlExpress will send the req object to all of our resolvers through the context object!
 */

export default new ApolloServer({
  introspection: true,
  playground: true,
  /* schema: schemaWithMiddleware, // see TODO */
  schema,
  context: ({req, res}) => ({
    redis,
    url:
      process.env.NODE_ENV === "production" || process.env.NODE_ENV === "prod"
        ? process.env.SERVER_URL
        : req.protocol + "://" + req.get("host"),
    req,
    user: req.user
    /* userLoader: userLoader() */
  })
})
