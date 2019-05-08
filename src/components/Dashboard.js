import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Question from './Question'

class Dashboard extends Component {
    state = {
        answeredSelected: false
    }
    toggleAnswered = (e, answeredSelected) => {
        e.preventDefault()
        this.setState({
            answeredSelected
        })
    }

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
            <div className='questions-list'>
                <div className='btn-list-group'>
                    <button className={this.state.answeredSelected ? 'btn':'btn active'} onClick={(e) => this.toggleAnswered(e, false)}>Unanswered</button>
                    <button className={this.state.answeredSelected ? 'btn active':'btn'} onClick={(e) => this.toggleAnswered(e, true)}>Answered</button>
                </div>
                <ul>
                    {
                        this.state.answeredSelected
                            ? this.props.answeredQuestionIds.map((id) => (
                                <li key={id}><Question id={id} /></li>
                            ))
                            : this.props.unansweredQuestionIds.map((id) => (
                                <li key={id}><Question id={id} /></li>
                            ))
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ questions, authedUser }) {
    return {
        answeredQuestionIds: Object.keys(questions)
            .filter((question) => (questions[question].optionOne.votes.indexOf(authedUser) > -1) || (questions[question].optionTwo.votes.indexOf(authedUser) > -1))
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        unansweredQuestionIds: Object.keys(questions)
            .filter((question) => (questions[question].optionOne.votes.indexOf(authedUser) === -1) && (questions[question].optionTwo.votes.indexOf(authedUser) === -1))
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        authedUser
    }
}

export default connect(mapStateToProps)(Dashboard)