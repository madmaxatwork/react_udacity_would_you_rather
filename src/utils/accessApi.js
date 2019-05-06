import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
  } from '../utils/_Data'
  
   export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }))
  } 

  export function saveQuestion(question) {
    return _saveQuestion(question)
  }

  export function answerQuestion(info) {
    return _saveQuestionAnswer(info);
  }