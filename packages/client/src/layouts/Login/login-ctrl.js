/* eslint react/no-unescaped-entities: 0 */
/* eslint react/prefer-stateless-function: 0 */

import React, {PureComponent} from "react"
import {LoginConnector} from "@utterzone/connector"

import LoginView from "./login-view.js"

export default class LoginCtrl extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <LoginConnector>
          {({submit}) => <LoginView submit={submit} />}
        </LoginConnector>
      </React.Fragment>
    )
  }
}