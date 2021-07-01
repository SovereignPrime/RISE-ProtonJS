import defData from "../../test/default_data.json"


export const initialState = {
  general: {
    riseId : null,
    activeScreen: 'Updates',
    searchValue: ''
  },
  updates: {
    messages: [],
    selectedSubject: null,
    subjects: []
  },
  contacts: {
    contactsList: defData["contacts"],
    groups: defData["groups"],
    selectedContact: null,
    selectedGroup: null
  },
  tasks: {
    tasksList: defData["tasks"],
    selectedTask: null,
    filter: null
  }
}

export const taskModel = {
  statuses: [
    "New", "Accepted", "In Progress", "Complete", "Archived", "Verified"
  ]
}
