import { combineReducers } from 'redux'

import authedUser from '../reducers/authedUser'
import questions from '../reducers/questions'

// Root Reducer Function
export default combineReducers({
	authedUser,
	questions,
})