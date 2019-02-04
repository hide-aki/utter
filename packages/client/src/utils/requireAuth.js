import React, {Component} from "react"
import {addFlashMessage} from "../core/actions/flashMessages.js"
import {connect} from "react-redux"
import {history} from "@utterzone/connector"

const requireAuth = WrappedComponent => {
  class Wrap extends Component {
    componentDidMount() {}

    render() {
      const isAuthenticated = localStorage.getItem("AUTH_TOKEN")
      if (!isAuthenticated) {
        this.props.addFlashMessage({
          type: "error",
          text: "You need to login to access this page"
        })
        history.push("/login")
      }
      return <WrappedComponent {...this.props} />
    }
  }

  const actions = {
    addFlashMessage
  }

  return connect(
    null,
    actions
  )(Wrap)
}

export default requireAuth
