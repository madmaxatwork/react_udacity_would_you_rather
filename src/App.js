import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

import { handleInitialData } from '../src/actions/common'
import Login from './components/Login'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default connect()(App)
