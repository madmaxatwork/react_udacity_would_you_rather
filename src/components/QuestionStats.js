import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question';
import { Redirect } from 'react-router-dom'


class QuestionStats extends Component {
	render() {

		if (!this.props.authedUser) {
			return <Redirect to={{
				pathname: '/login',
				state: {
					returnPath: '/'
				}
			}} />
		}

		const { question, id } = this.props
		const votesOptionOne = question.optionOne.votes.length;
		const votesOptionTwo = question.optionTwo.votes.length;
		const votesTotal = votesOptionOne + votesOptionTwo;
		const percentVotesOptionOne = (votesOptionOne / votesTotal).toFixed(2) * 100;
		const percentVotesOptionTwo = (votesOptionTwo / votesTotal).toFixed(2) * 100;
		return (
			<div className='center-align-text-bold'>
				<h3 className='center'>Question Stats</h3>
				{question &&
					<Question id={id} disableLink={true} />
				}
				<div className='question-stats'>
					<span>Total Votes {votesTotal}</span>
					<span>{votesOptionOne ? 'Total Votes for option One ' + votesOptionOne : ''}</span>
					<span>{votesOptionTwo ? 'Total Votes for option Two ' + votesOptionTwo : ''}</span>
					<span>{percentVotesOptionOne ? 'Percent Votes Option One ' + percentVotesOptionOne : ''}</span>
					<span>{percentVotesOptionTwo ? 'Percent Votes Option Two ' + percentVotesOptionTwo : ''}</span>
				</div>
			</div>
		)
	}
}

function mapStateToProps({ questions, authedUser }, props) {
	const { id } = props.match.params
	return {
		question: questions[id] ? questions[id] : null,
		authedUser,
		id
	}
}

export default connect(mapStateToProps)(QuestionStats)