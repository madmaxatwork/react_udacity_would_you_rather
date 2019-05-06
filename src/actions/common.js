import { getInitialData, saveQuestion, answerQuestion } from '../utils/accessApi'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'

export function handleInitialData() {
	return (dispatch) => {
		return getInitialData()
			.then(({ users, questions }) => {
				dispatch(receiveUsers(users))
				dispatch(receiveQuestions(questions))
			})
	}
}

export function handleSaveQuestion(question) {
	return saveQuestion(question)
}

export function handleAnswerQuestion(info) {
	return answerQuestion(info)
}