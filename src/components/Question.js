import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Question extends Component {

 	render() {
		return (
			<div class='question'>
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

 export default connect()(Question) 