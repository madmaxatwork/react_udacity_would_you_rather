import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Leaderboard extends Component {
	render() {

		if (!this.props.authedUser) {
			return <Redirect to={{
				pathname: '/login',
				state: {
					returnPath: '/leaderboard'
				}
			}} />
		}

		return (
			<div className='leaderboard'>
				<h3 className='center'>Leaderboard</h3>
				{
					this.props.users.map((user, index) => (
						<div key={user.id}>
							<div className='question'>
								<div className='leaderboard-user-details'>
									<img src={user.avatarURL} alt='emptyuser.jpg' className='nav-user-image' />
									<span>{user.name}</span>
								</div>
								<div className='leaderboard-user-stats'>
									<div>
										<p><b>Questions Asked:</b> {user.questions.length}</p>
									</div>
									<div>
										<p><b>Questions Answered:</b> {Object.keys(user.answers).length}</p>
									</div>
								</div>
							</div>
						</div>
					))
				}
			</div>
		)
	}
}

function mapStateToProps({ users, authedUser }) {
	return {
		users: Object.keys(users).sort((a, b) =>
			(users[b].questions.length + Object.keys(users[b].answers).length) - (users[a].questions.length
				+ Object.keys(users[a].answers).length)).map((user) => users[user]),
		authedUser
	}
}

export default connect(mapStateToProps)(Leaderboard)