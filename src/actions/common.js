import { getInitialData } from '../utils/accessApi'

 //Creators
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'

// This will set the data to the store
export function handleInitialData() {
	return (dispatch) => {
		return getInitialData()
			.then(({ users, questions }) => {
				dispatch(receiveUsers(users))
				dispatch(receiveQuestions(questions))
			})
	}
}