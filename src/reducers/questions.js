import { ADD_QUESTION, RECEIVE_QUESTIONS, ADD_ANSWER } from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION:
      const { question } = action;

      return {
        ...state,
        [question.id]: question,
      };
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_ANSWER:
      return {
        ...state,
        ...action.questions
      };
    default:
      return state;
  }
}