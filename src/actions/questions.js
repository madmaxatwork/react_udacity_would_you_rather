import { handleSaveQuestion, handleAnswerQuestion } from '../actions/common'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        const questionInfo = {
            optionOneText,
            optionTwoText,
            author: authedUser,
        };
        return handleSaveQuestion(questionInfo)
            .then(function (question) { dispatch(addQuestion(question)) });
    };
}

export function addAnswer(authedUser, id, answer) {
    return {
        type: ADD_ANSWER,
        authedUser,
        id,
        answer,
    }
}

export function handleAddAnswer(authedUser, question, answer) {
    return async (dispatch) => {
        const info = {
            authedUser,
            qid: question.id,
            answer,
        };
        await handleAnswerQuestion(info);
        dispatch(addAnswer(authedUser, question.id, answer));
    }
}