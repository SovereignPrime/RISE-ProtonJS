import { LOAD_RISE_ID, SELECT_SCREEN, SEARCH_VALUE } from './actionTypes'

export const loadRiseId = (data) => ({
  type: LOAD_RISE_ID,
  payload: data
})

export const selectScreen = (data) => ({
  type: SELECT_SCREEN,
  payload: data
})

export const searchValue = (data) => ({
  type: SEARCH_VALUE,
  payload: data
})
