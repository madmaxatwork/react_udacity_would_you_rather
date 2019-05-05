import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {

	render() {
		const { authedUser, question, users, id } = this.props
		const avatarURL = users[question.author].avatarURL;

		return (
			<div className='question'>
				<ul className='question-user-details'>
					<img src={avatarURL} alt='emptyuser.jpg' className='nav-user-image'/>
					<span className='nav-user-name'><b>Asked by:</b> : {question.author}</span>
				</ul>
				<p className='center-align-text-bold'>Would you rather...</p>
				<div className='options'>
					<div className='option-one'>
						<p className='center-align-text'>{question.optionOne.text}</p>
					</div>
					<div className='option-two'>
						<p className='center-align-text'>{question.optionTwo.text}</p>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
	return {
		question: questions[id],
		optionOneSelected: questions[id].optionOne.votes.indexOf(authedUser) > -1,
		optionTwoSelected: questions[id].optionTwo.votes.indexOf(authedUser) > -1,
		authedUser,
		users
	}
}


export default connect(mapStateToProps)(Question) 