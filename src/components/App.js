import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { handleInitialData } from '../actions/common'
import Login from './Login'
import Nav from './Nav'
import Question from './Question';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          {
            !this.props.showLogin &&
            <Nav />
          }
          <div className='container'>
            <div>
              <Route path='/login' exact component={Login} />
              <Route path='/' exact component={Question} />
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    showLogin: authedUser === null
  }
}

export default connect(mapStateToProps)(App)