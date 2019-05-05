import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        gotoLogin: false
    }

    handleChange = function(event, optionIndex) {
        const text = event.target.value;
        this.setState(function(previousState) {
          return optionIndex === 1
            ? { ...previousState, optionOne: text }
            : { ...previousState, optionTwo: text };
        });
      }

    handleAddQuestion = (e, optionOne, optionTwo) => {
        e.preventDefault()
        const { dispatch, authedUser } = this.props
        dispatch(handleAddQuestion(optionOne, optionTwo, authedUser))
            .then(() =>
                this.setState({
                    optionOne: '',
                    optionTwo: '',
                    gotoLogin: true
                })
            )
    }

    render() {
        const { optionOne, optionTwo } = this.state
        if (!this.props.authedUser) {
            return <Redirect to={{
                pathname: '/login',
                state: {
                    returnPath: '/add'
                }
            }} />
        }

        if (this.state.gotoLogin) {
            return <Redirect to='/' />
        }

        return (
            <div className='new-question'>
                <h3 className='center-align-text-bold'>Would you rather...</h3>
                <form className='new-question-form' onSubmit={(e) => this.handleAddQuestion(e, optionOne, optionTwo)}>
                    <div className='new-question-options'>
                        <input
                            className='input'
                            placeholder='Option One'
                            value={optionOne}
                            onChange={(event) => this.handleChange(event, 1)}/>
                        <input
                            className='input'
                            placeholder='Option Two'
                            value={optionTwo}
                            onChange={(event) => this.handleChange(event, 2)}/>
                    </div>
                    <button
                        className='button'
                        disabled={optionOne === '' || optionTwo === ''}
                    >
                        Submit
					</button>
                </form>



            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)