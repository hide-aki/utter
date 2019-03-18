import React, {PureComponent} from "react"
import {Redirect} from "react-router-dom"
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import {local} from "brownies"
import history from '@utterzone/common'
import "./forms.css"

import LoginForm from "./login-form"

class Login extends PureComponent {
  componentDidMount() {
    const {state} = this.props.location
    if (state) {
      const {state = null} = this.props.location
      toast[state.type || "info"](state.notification, {
        className: "toasty",
        bodyClassName: "toasty-body",
        hideProgressBar: true
      })
    }
    this.props.history.replace("/login", {notification: null})
  }

  render() {
    const {submit} = this.props
    const loggedIn = local.AUTH_TOKEN
    if (loggedIn) {
      var redirect = <Redirect to="/" />
    } else {
      redirect = <LoginForm submit={submit} />
    }
    return <React.Fragment>{redirect}</React.Fragment>
  }
}

export default Login
