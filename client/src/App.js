import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import styled, {ThemeProvider} from 'styled-components'
import Navbar from './containers/Navbars/Navbar'
import Wrapper from './containers/Wrappers/Wrapper.js'
import Spacer from './components/Spacers/Spacer.js'
import {render} from 'react-dom'
import {routes} from './routes'
import {main} from './themes/config.js'
import rootReducer from './rootReducer'
import FlashMessagesList from '../src/components/FlashMessages/FlashMessagesList'
import jwt from 'jsonwebtoken'
import {setCurrentUser} from './actions/authActions.js'
import {Provider} from 'react-redux'

import store from './store.js'

class App extends Component {
  render(props) {
    return (
      <ThemeProvider theme={main}>
        <Provider store={store}>
          <Router>
            <Wrapper>
              <Navbar list={['about', 'contact', 'languages', 'connections']} />
              <Spacer margin="90px 0 0 0" />
              <Switch>
                {routes.map((route, i) => <Route key={i} {...route} />)}
              </Switch>
            </Wrapper>
          </Router>
        </Provider>
      </ThemeProvider>
    )
  }
}

render(<App />, document.getElementById('app'))

// example async dispatch with axios
// store.dispatch(dispatch => {
//   dispatch({type: 'FETCH_USERS'})
//   axios
//     .get('http://rest.learncode.academy/api/blah/users')
//     .then(res => {
//       dispatch({type: 'RECEIVE_USERS', payload: res.data})
//     })
//     .catch(err => {
//       dispatch({type: 'FETCH_USERS_ERROR', payload: err})
//     })
// })
