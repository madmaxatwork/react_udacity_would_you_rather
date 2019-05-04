import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IoIosLogOut } from 'react-icons/io';

class Nav extends Component {
  render () {
    return (
      <nav className='nav'>
        <ul>
          <li className='user'>
          <img src={this.props.avatarURL} alt='emptyuser.jpg' className='nav-user-image'/>
          <span><IoIosLogOut size={20}/></span>
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