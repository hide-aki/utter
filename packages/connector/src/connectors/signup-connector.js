/* eslint no-unused-vars: 0 */

import React, {PureComponent} from "react"
import {graphql} from "react-apollo"
import gql from "graphql-tag"
import {normalizeErrors} from "../utils/normalize-errors"
import {local} from "brownies"

/* NOTE: Since this will file will be used by both client and app, it cannot use React or React Native Commands ie. <div> <View> */
export class C extends PureComponent {
  submit = async values => {
    try {
      const {
        data: {
          signup: {error}
        },
        data: {
          signup: {token}
        },
        data: {signup}
      } = await this.props.mutate({
        variables: {
          username: values.username,
          email: values.email,
          password: values.password,
          passwordConfirmation: values["password confirmation"],
          timezone: values.timezone
        }
      })

      if (token !== null) {
        local.AUTH_TOKEN = token
        return token
      }

      if (error) {
        return normalizeErrors(error)
      }
    } catch (err) {
      console.log("err: ", err)
    }
    return null
  }

  render() {
    return this.props.children({submit: this.submit})
  }
}

const signupMutation = gql`
  mutation signupMutation(
    $username: String!
    $email: String!
    $password: String!
    $passwordConfirmation: String!
    $timezone: String
  ) {
    signup(
      input: {
        username: $username
        email: $email
        password: $password
        passwordConfirmation: $passwordConfirmation
        timezone: $timezone
      }
    ) {
      token
      user {
        _id
        username
        email
        roles
        scopes
      }
      error {
        path
        message
      }
    }
  }
`

export const SignupConnector = graphql(signupMutation)(C)
