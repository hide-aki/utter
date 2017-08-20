import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import styled, {ThemeProvider} from 'styled-components'
import Wrapper from '../containers/Wrappers/Wrapper.js'
import Masthead from '../containers/Mastheads/Masthead'
import Navbar from '../containers/Navbars/Navbar'
import Title from '../components/Text/Title.js'
import Subtitle from '../components/Text/Subtitle.js'
import Text from '../components/Text/Text.js'

export default () =>
  <Wrapper>
    <Masthead bg="green">
      <Title>Settings</Title>
      <NavLink to="#"><h6>Profile</h6></NavLink>
      <NavLink to="/dashboard"><h6>Dashboard</h6></NavLink>
    </Masthead>
  </Wrapper>
