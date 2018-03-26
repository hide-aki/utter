import React, {Component} from 'react'
import {connect} from 'react-redux'
import {userSignupRequest} from '../actions/signupActions'
import styled, {ThemeProvider} from 'styled-components'
import Masthead from '../containers/Mastheads/Masthead'
import Subtitle from '../components/Text/Subtitle.js'
import SignupForm from '../containers/Forms/SignupForm.js'
import {addFlashMessage} from '../actions/flashMessages.js'
import {Wrapper} from '../components'

function Signup(props) {
  const {userSignupRequest, addFlashMessage} = props
  return (
    <Wrapper>
      <Masthead height="100%" padding="4rem 0">
        <SignupForm
          userSignupRequest={userSignupRequest}
          addFlashMessage={addFlashMessage}
          history={props.history}
        />
      </Masthead>
    </Wrapper>
  );
}

export default connect(null, {userSignupRequest, addFlashMessage})(Signup)
