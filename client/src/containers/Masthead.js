import React, {Component} from 'react'
import styled, {ThemeProvider} from 'styled-components'

const Masthead = styled.section`
  align-items: ${props => props.alignitems};
  background: ${props => props.background};
  background-size: ${props => props.backgroundsize};
  box-sizing: border-box;
  display: flex;
  flex-direction: ${props => props.flexdirection};
  height: ${props => props.height};
  justify-content: ${props => props.justifycontent};
  margin: ${props => props.margin};
  overflow: hidden;
  padding: ${props => props.padding};
  position: relative;
  text-align: ${props => props.textalign};
  width: ${props => props.width};

  @media(min-width: 375px) {
    fontsize: ${props => props.fontsize375};
    height: ${props => props.height375};
  }

  @media(min-width: 768px) {
    fontsize: ${props => props.fontsize768};
    height: ${props => props.height768};
  }
`
Masthead.defaultProps = {
  alignitems: 'center',
  backgroundsize: 'cover',
  background: 'white',
  height: '500px',
  flexdirection: 'column',
  justifycontent: 'center',
  textalign: 'center',
  width: '100%'
}

export default Masthead
