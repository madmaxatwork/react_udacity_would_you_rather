import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IoIosLogOut } from 'react-icons/io';
import { logout } from '../actions/authedUser'
import { NavLink } from 'react-router-dom'


class Nav extends Component {

  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logout());
  }

  render() {
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact>
              Questions
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' exact>
              Leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' exact>
              New Question
            </NavLink>
          </li>
          <li className='user'>
            <img src={this.props.avatarURL} alt='emptyuser.jpg' className='nav-user-image' />
            <span onClick={this.handleLogout}><IoIosLogOut size={20} /></span>
          </li>
        </ul>
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