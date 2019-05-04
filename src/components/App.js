import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { handleInitialData } from '../actions/common'
import Login from './Login'
import Question from './Question'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className='container'>
        <Question />
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    showLogin: authedUser === null
  }
}

export default connect(mapStateToProps)(App)