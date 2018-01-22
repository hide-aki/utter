import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import styled from 'styled-components'
import {Box, Button, Grid, Spacer, Text} from '../components'
import FaCaretDown from 'react-icons/fa/caret-down'

import KoreanLevel1 from '../layouts/Korean/Level1/'
import KoreanLevel2 from '../layouts/Korean/Level2/'
import KoreanLevel3 from '../layouts/Korean/Level3/'
import SpanishLevel1 from '../layouts/Spanish/Level1/'
import SpanishLevel2 from '../layouts/Spanish/Level2/'

const Dropdown = styled(Button)`
  background:transparent;
  border:none;
  font-size:1.2rem;
  outline:none;
  text-align:left;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: ${props => props.gridtemplatecolumns}; 
  margin: 0 auto;
  width: 100%;

  @media(min-width: 640px) {
    grid-template-columns: ${props => props.gridtemplatecolumns640}; 
    width: 100%;
  }
`

const SideBar = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
`

const Test = () =>
  <Grid
    gridtemplatecolumns="25% 25% 25% 25%"
    gridtemplatecolumns650="25% 25% 25% 25%">
    <Box
      alignitems="flex-start"
      background="orange"
      color="white"
      display="block"
      fontsize="1.5rem"
      lineheight="100px"
      padding="0 20px 0 20px"
      textoverflow="ellipsis"
      whitespace="nowrap"
      width640="100%"
      minwidth640="100%">
      <Text>Test Scores</Text>
    </Box>
    <Box>Spanish</Box>
    <Box>Korean</Box>
    <Box>French</Box>
    <Box
      alignitems="flex-start"
      background="orange"
      color="white"
      display="block"
      fontsize="1.5rem"
      lineheight="100px"
      padding="0 20px 0 20px"
      textoverflow="ellipsis"
      whitespace="nowrap"
      width640="100%"
      minwidth640="100%">
      <Text>Level 1</Text>
      <Text>Level 2</Text>
    </Box>
    <Box flexdirection="row">
      <Box padding="0 20px 0 0"> A </Box> <Box><a href="#">retake</a></Box>
    </Box>
    <Box flexdirection="row">
      <Box padding="0 20px 0 0"> F </Box> <Box><a href="#">retake</a></Box>
    </Box>
    <Box flexdirection="row">
      <Box> - </Box>
    </Box>
    <Box flexdirection="row">
      <Box><a href="#">Take Test</a></Box>
    </Box>
    <Box flexdirection="row">
      <Box><a href="#">Take Test</a></Box>
    </Box>
    <Box flexdirection="row">
      <Box><a href="#">Take Test</a></Box>
    </Box>
  </Grid>

class Admin extends Component {
  constructor(props) {
    super(props)

    this.DropFunc = this.DropFunc.bind(this)
  }

  DropFunc(e) {
    let name = e.target.name
    let x = document.getElementById(name)
    if (x.className.indexOf('show') == -1) {
      x.className += ' show'
      x.previousElementSibling.className += ' w3-green'
    } else {
      x.className = x.className.replace(' show', '')
      x.previousElementSibling.className = x.previousElementSibling.className.replace(
        ' w3-green',
        ''
      )
    }
  }

  render() {
    return (
      <Router>
        <Container>
          <Grid gridtemplatecolumns="15% 85%" gridtemplatecolumns650="25% 75%">
            <SideBar>
              <Spacer margin="20px" />
              <Link to="/settings/tests" className="dropButton">
                Test Scores
              </Link>
              <Dropdown color="white" name="spanish" onClick={this.DropFunc}>
                Spanish Curriculum
                <FaCaretDown />
              </Dropdown>
              <Box id="spanish" className="hide">
                <Link to="/settings/spanish/1" className="dropButton">
                  Spanish 1 - Alphabet
                </Link>
                <Link to="/settings/spanish/2" className="dropButton">
                  Spanish 2 - Basic Grammar{' '}
                </Link>
              </Box>
              <Spacer margin="10px" />
              <Dropdown color="white" name="korean" onClick={this.DropFunc}>
                Korean Curriculum
                <FaCaretDown />
              </Dropdown>
              <Box id="korean" className="hide">
                <Link to="/settings/korean/1" className="dropButton">
                  Korean 1 - Alphabet
                </Link>
                <Link to="/settings/korean/2" className="dropButton">
                  Korean 2 - Dipthongs
                </Link>
                <Link to="/settings/korean/3" className="dropButton">
                  Korean 3
                </Link>
              </Box>
              <Spacer margin="10px" />
              <Link to="/settings/misc" className="dropButton">Link</Link>
            </SideBar>
            <Route exact path="/settings/tests" component={Test} />
            <Route exact path="/settings/korean/1" component={KoreanLevel1} />
            <Route exact path="/settings/korean/2" component={KoreanLevel2} />
            <Route exact path="/settings/korean/3" component={KoreanLevel3} />
            <Route exact path="/settings/spanish/1" component={SpanishLevel1} />
            <Route exact path="/settings/spanish/2" component={SpanishLevel2} />
          </Grid>
        </Container>
      </Router>
    )
  }
}

export default Admin
