import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
	state = {
		userId: null,
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

	render() {
		const { userId } = this.state;
		const { users } = this.props;
		const selected = userId ? userId : -1;

		return (
			<div className='login-align-center'>
				<h3 >Would you rather ?</h3>
				<div className='login-outline'>
					<span className="login-span">Please select a user and login.</span>
					<div className='select-user'>
						<img
							src='emptyuser.jpg'
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