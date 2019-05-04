import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IoIosLogOut } from 'react-icons/io';
import { logout } from '../actions/authedUser'

class Nav extends Component {

  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logout());
  }

  render () {
    return (
      <nav className='nav'>
        <ul>
          <li className='user'>
          <img src={this.props.avatarURL} alt='emptyuser.jpg' className='nav-user-image'/>
          <span onClick={this.handleLogout}><IoIosLogOut size={20}/></span>
          </li>
        </ul>
        <hr/>
      </nav>
    )
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    avatarURL: users[authedUser].avatarURL
  }
}

export default connect(mapStateToProps)(Nav)