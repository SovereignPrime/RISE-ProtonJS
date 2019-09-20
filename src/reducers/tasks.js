import {initialState} from '../state'
import {LOAD_TASKS, SELECT_TASK} from '../actions/actionTypes'

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TASKS:
      return {
        ...state,
        tasks: action.payload
      };
    case SELECT_TASK:
      return {
        ...state,
        selectedTask: action.payload
      };
    default:
      return state
  }
}
