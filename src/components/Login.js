import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component {
	state = {
		userId: null,
		userloggedin: false
	}

	handleSelectionChanged = function (event) {
		const userId = event.target.value;
		this.setState(function (previousState) {
			return {
				...previousState,
				userId,
			};
		});
	}

	handleLoginClick = function (event) {
		const { userId } = this.state;
		const { dispatch } = this.props;

		dispatch(login(userId));

		this.setState(function (previousState) {
			return {
				...previousState,
				userloggedin: true
			};
		});
	}

	render() {
		const { userId } = this.state;
		const { users } = this.props;
		const selected = userId ? userId : -1;
		const avatar = userId ? users[userId].avatarURL : 'emptyuser.jpg';

		if (this.state.userId && this.state.userloggedin) {
			return <Redirect to={this.props.location.state.returnPath} />
		}


		return (
			<div className='login-align-center'>
				<h3 align="center">Would you rather ?</h3>
				<div className='login-outline'>
					<span className="login-span">Please select a user and login.</span>
					<div className='select-user'>
						<img
							src={avatar}
							alt={'emptyuser.jpg'}
							className='avatar' />
						<select value={selected} onChange={(event) => this.handleSelectionChanged(event)}>
							<option value={-1} disabled>Select user...</option>
							{
								users ?
									Object.keys(users).map(function (key) {
										return (
											<option value={users[key].id} key={key}>{users[key].id}</option>
										);
									}) : null
							}
						</select>
					</div>
					<button
						className='button'
						disabled={userId === null}
						onClick={(event) => this.handleLoginClick(event)}
					>
						Login
					</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ users }) {
	return {
		users,
	};
}

export default connect(mapStateToProps)(Login);