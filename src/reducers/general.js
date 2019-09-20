import {initialState} from '../state'
import {LOAD_RISE_ID, SELECT_SCREEN, SEARCH_VALUE } from '../actions/actionTypes'

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RISE_ID:
      return {
        ...state,
        riseId: action.payload
      };
    case SELECT_SCREEN:
      return {
        ...state,
        activeScreen: action.payload
      };
    case SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      };
    default:
      return state
  }
}
