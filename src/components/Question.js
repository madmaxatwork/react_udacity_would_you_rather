import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


 class Question extends Component {

 	render() {
		if (!this.props.authedUser) {
            return <Redirect to={{
                pathname: '/login',
                state: {
                    returnPath: '/'
                }
            }} />
        }


		return (
			<div className='question'>
				<p className='center-align-text'>Author Name</p>
				<p className='center-align-text'>Would you rather...</p>
				<div className='options'>
					<div className='option-one'>
						<p className='center-align-text'>Be a car?</p>
					</div>
					<div className='option-two'>
						<p className='center-align-text'>Be a plane?</p>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps({ authedUser }) {
	return {
		authedUser
	}
}


 export default connect(mapStateToProps)(Question) 