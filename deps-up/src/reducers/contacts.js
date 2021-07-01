import { LOAD_CONTACTS, SELECT_CONTACT, LOAD_GROUPS, SELECT_GROUP } from '../actions/actionTypes'
import {initialState} from '../state'


export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };

    case SELECT_CONTACT:
      return {
        ...state,
        selectedContact: action.payload
      };
    case LOAD_GROUPS:
      return {
        ...state,
        groups: action.payload
      };
      
    case SELECT_GROUP:
      return {
        ...state,
        selectedGroup: action.payload
      };
    default:
      return state
  }
}
