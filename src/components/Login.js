import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
	state = {
		userId: null,
		toHome: false,
	}

	render() {
		return (
			<div class="login-align-center">
				<h3 >Would you rather ?</h3>
				<div className='login-outline'>
					<span class="login-span">Please select a user and login.</span>
					<div className='select-user'>
						<img
							src='emptyuser.jpg'
							alt={'emptyuser.jpg'}
							className='avatar'
						/>
						<select>
							<option value={-1} disabled>Select user</option>
						</select>
					</div>
					<button
						className='button'>
						Login
				</button>
				</div>
			</div>
		);
	}
}

export default connect()(Login) 