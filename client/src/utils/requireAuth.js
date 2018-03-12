import React, {Component} from 'react'
import {addFlashMessage} from '../actions/flashMessages.js'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {push} from 'react-router-redux'

export default ComposedComponent => {
  class Authenticate extends Component {
    constructor(props) {
      super(props)
    }

    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.actions.addFlashMessage({
          type: 'error',
          text: 'You need to login to access this page'
        })
        this.props.actions.push('/login')
      }
    }

    // componentWillUpdate(nextProps) {
    //   if (!nextProps.isAuthenticated) {
    //     this.props.actions.push('/login')
    //   }
    // }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = state => {
    return {
      isAuthenticated: state.authReducer.isAuthenticated
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(
        {
          addFlashMessage,
          push
        },
        dispatch
      )
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Authenticate)
}
