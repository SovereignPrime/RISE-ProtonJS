import { LOAD_SUBJECTS, SELECT_SUBJECT, LOAD_MESSAGES } from './actionTypes'

export const loadSubjects = (data) => ({
  type: LOAD_SUBJECTS,
  payload: data
})

export const selectSubject = (data) => ({
  type: SELECT_SUBJECT,
  payload: data
})

export const loadMessages = (data) => ({
  type: LOAD_MESSAGES,
  payload: data
})
