/* eslint no-unused-vars: 0 */

import React, {PureComponent} from "react"
import {graphql} from "react-apollo"
import gql from "graphql-tag"

/* NOTE: This file cannot use React or React Native Commands ie. <div> <View> */
export class C extends PureComponent {
  submit = async values => {
    console.log("values: ", values)
    try {
      const response = await this.props.mutate({
        variables: values
      })
    } catch (err) {
      console.log("err: ", err)
    }
    return null
  }

  render() {
    return this.props.children({submit: this.submit})
  }
}
const loginMutation = gql`
  mutation(
    $identity: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    login(
      input: {
        identity: $identity
        password: $password
        passwordConfirmation: $passwordConfirmation
      }
    ) {
      token
      error {
        path
        message
      }
    }
  }
`

export const LoginConnector = graphql(loginMutation)(C)