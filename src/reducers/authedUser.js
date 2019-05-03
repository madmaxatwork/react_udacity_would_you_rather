import { USER_LOG_IN, USER_LOG_OUT } from '../actions/authedUser';

export default function authedUser(state = null, action) {
  switch (action.type) {
    case USER_LOG_IN:
      console.log('action.id: ', action.id)
      return action.id;
    case USER_LOG_OUT:
      return null;
    default:
      return state;
  }
}
