import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question';


class QuestionStats extends Component {
	render() {
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
					<span>Percent Votes Option One {percentVotesOptionOne}</span>
					<span>percent Votes Option Two {percentVotesOptionTwo}</span>
				</div>
			</div>
		)
	}
}

function mapStateToProps({ questions}, props) {
	const { id } = props.match.params
	return {
		question: questions[id] ? questions[id] : null,
		id
	}
}

export default connect(mapStateToProps)(QuestionStats)