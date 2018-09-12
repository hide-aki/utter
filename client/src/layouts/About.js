import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled, {ThemeProvider} from 'styled-components'
import {Helmet} from 'react-helmet'
import {Masthead, Navbar} from '../containers'
import {Box, MastheadTitle, MastheadSubtitle, Wrapper} from '../components'

// actions
import {toggleFooter} from '../app/actions/toggleFooterAction.js'

class About extends Component {
  componentDidMount() {
    this.props.toggleFooter(true)
  }
  render() {
    return (
      <Wrapper>
        <Helmet>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="We aim to make the world a better place with communication."
          />
          <meta name="author" content="Isaac Pak" />
          <title>Utter | About</title>
          <link rel="canonical" href="https://utter.zone/about" />
        </Helmet>
        <Masthead height="100%" background="#f3f3f3">
          <Box maxwidth="1024px">
            <MastheadTitle>About Us</MastheadTitle>
            <MastheadSubtitle>
              We foster the greatest learning tool you have available
              already-Your brain. Our techniques allow you to naturally learn
              something at the highest level possible. No tricks, no gimmicks.
            </MastheadSubtitle>
            <MastheadSubtitle>
              Our goal is to bring peace to the world by language. As the world
              has become more global, one of the major problems we have is
              misunderstandings due to cultural differences. Language happens to
              be the biggest cultural gap between nations and it's our desire to
              see that change. But learning a new language is a very difficult
              and hard to become fluent in. We make every endeavor to not make
              it any simpler, but to make it more available and more efficient
              to learn.
            </MastheadSubtitle>
          </Box>
        </Masthead>
      </Wrapper>
    )
  }
}

const actions = {
  toggleFooter
}

export default connect(
  null,
  actions
)(About)
