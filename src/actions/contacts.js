import { LOAD_CONTACTS, SELECT_CONTACT, SELECT_GROUP, LOAD_GROUPS } from './actionTypes'

export const loadContacts = (contacts) => ({
  type: LOAD_CONTACTS,
  payload: contacts
})

export const loadGroups = (groups) => ({
  type: LOAD_GROUPS,
  payload: groups
})

export const selectContact = (contact) => ({
  type: SELECT_CONTACT,
  payload: contact
})

export const selectGroup = (group) => ({
  type: SELECT_GROUP,
  payload: group
})
