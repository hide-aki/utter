import {makeExecutableSchema} from 'graphql-tools'
import path from 'path'
import fs from 'fs'

const userSchema = path.join(__dirname, './api/user/user.graphql')
const courseSchema = path.join(__dirname, './api/course/course.graphql')
const subscriptionSchema = path.join(
  __dirname,
  './api/subscription/subscription.graphql'
)

const userTypeDefs = fs.readFileSync(userSchema, 'utf8')
const courseTypeDefs = fs.readFileSync(courseSchema, 'utf8')
const subscriptionTypeDefs = fs.readFileSync(subscriptionSchema, 'utf8')

import {userResolvers} from './api/user/user.resolvers.js'
import {courseResolvers} from './api/course/course.resolvers.js'
import {subscriptionResolvers} from './api/subscription/subscription.resolvers.js'
import merge from 'lodash.merge'
import {graphqlExpress} from 'apollo-server-express'

const baseSchema = `
  schema {
    query: Query,
    mutation: Mutation
  }
`
const schema = makeExecutableSchema({
  typeDefs: [baseSchema, userTypeDefs, courseTypeDefs, subscriptionTypeDefs],
  resolvers: merge({}, userResolvers, courseResolvers, subscriptionResolvers)
})

export const graphQLRouter = graphqlExpress(req => ({
  schema,
  context: {
    req,
    user: req.user
  }
}))
