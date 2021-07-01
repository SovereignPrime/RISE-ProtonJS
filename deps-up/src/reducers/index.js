import {combineReducers} from 'redux'

import contactsReducer from './contacts'
import tasksReducer from './tasks'
import updatesReducer from './updates'
import generalReducer from './general'


const allReducers = combineReducers({
  contacts: contactsReducer,
  tasks: tasksReducer,
  updates: updatesReducer,
  general: generalReducer
})

export default allReducers;
