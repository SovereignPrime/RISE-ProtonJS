import {initialState} from '../state'
import {LOAD_SUBJECTS, SELECT_SUBJECT, LOAD_MESSAGES} from '../actions/actionTypes'

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SUBJECTS:
      return {
        ...state,
        subjects: action.payload
      };
    case SELECT_SUBJECT:
      return {
        ...state,
        selectedSubject: action.payload
      };
    case LOAD_MESSAGES:
      return {
        ...state,
        messages: action.payload
      };
    default:
      return state
  }
}
