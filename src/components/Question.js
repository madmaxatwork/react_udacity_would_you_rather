import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { handleAddAnswer } from '../actions/questions'


class Question extends Component {

	state = {
		questionStats: false,
	}

	handleOptionClicked = function (event, option) {
		if (!this.props.answered) {
			event.stopPropagation();
			event.preventDefault();
			const { dispatch, authedUser, question } = this.props;
			const answer = option === 1 ? 'optionOne' : 'optionTwo';
			dispatch(handleAddAnswer(authedUser, question, answer));
		}
	}

	handleCardClicked = function () {
		this.setState(function (previousState) {
			return {
				...previousState,
				questionStats: this.props.disableLink ? false : true
			};
		});

	}

	render() {
		const { question, users } = this.props
		const avatarURL = users[question.author].avatarURL;
		
		if (this.state.questionStats) {
			return <Redirect to={{
				pathname: `/questions/${this.props.id}`,
				state: {
					returnPath: '/'
				}
			}} />
		}

		return (
			<div className='question' onClick={() => this.handleCardClicked()}>
				<ul className='question-user-details'>
					<img src={avatarURL} alt='emptyuser.jpg' className='nav-user-image' />
					<span className='nav-user-name'><b>Asked by:</b> : {question.author}</span>
				</ul>
				<p className='center-align-text-bold'>Would you rather...</p>
				<div className='options'>
					<div className='answered' onClick={(event) => this.handleOptionClicked(event, 1)}>
						<p className='center-align-text'>{question.optionOne.text}</p>
					</div>
					<div className='option-two' onClick={(event) => this.handleOptionClicked(event, 2)}>
						<p className='center-align-text'>{question.optionTwo.text}</p>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps({ questions, users, authedUser }, { id, disableLink }) {
	const question = questions[id];
	const answers = Object.keys(users[authedUser].answers);
	const answered = answers.indexOf(question.id) > -1 ? true : false;

	return {
		question: question,
		optionOneSelected: questions[id].optionOne.votes.indexOf(authedUser) > -1,
		optionTwoSelected: questions[id].optionTwo.votes.indexOf(authedUser) > -1,
		authedUser,
		users,
		disableLink,
		answered
	}
}


export default connect(mapStateToProps)(Question) 