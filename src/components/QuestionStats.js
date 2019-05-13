import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question';
import { Redirect } from 'react-router-dom'
import NotFound from './404'


class QuestionStats extends Component {
	render() {
		const { question, answers, id } = this.props

		if (!this.props.authedUser) {
			return <Redirect to={{
				pathname: '/login',
				state: {
					returnPath: this.props.location.pathname
				}
			}} />
		}

		if (!question) {
			return <NotFound/>
		}

		const votesOptionOne = question.optionOne.votes.length;
		const votesOptionTwo = question.optionTwo.votes.length;
		const votesTotal = votesOptionOne + votesOptionTwo;
		const percentVotesOptionOne = (votesOptionOne / votesTotal).toFixed(2) * 100;
		const percentVotesOptionTwo = (votesOptionTwo / votesTotal).toFixed(2) * 100;
		const answered = answers.indexOf(question.id) > -1;
		return (
			<div className='center-align-text-bold'>
				<h3 className='center'>Question Stats</h3>
				{question &&
					<Question id={id} disableLink={true} />
				}
				{
					answered &&
					<div className='question-stats'>
						<span>Total Votes {votesTotal}</span>
						<span>{votesOptionOne ? 'Total Votes for option One ' + votesOptionOne : ''}</span>
						<span>{votesOptionTwo ? 'Total Votes for option Two ' + votesOptionTwo : ''}</span>
						<span>{percentVotesOptionOne ? 'Percent Votes Option One ' + percentVotesOptionOne : ''}</span>
						<span>{percentVotesOptionTwo ? 'Percent Votes Option Two ' + percentVotesOptionTwo : ''}</span>
					</div>
				}

			</div>
		)
	}
}

function mapStateToProps({ questions, users, authedUser }, props) {
	const { id } = props.match.params
	return {
		question: questions[id] ? questions[id] : null,
		answers: authedUser ? Object.keys(users[authedUser].answers) : [],
		authedUser,
		id
	}
}

export default connect(mapStateToProps)(QuestionStats)