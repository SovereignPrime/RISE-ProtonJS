import { LOAD_TASKS, SELECT_TASK } from './actionTypes'

export const loadTasks = (tasks) => ({
  type: LOAD_TASKS,
  payload: tasks
})

export const selectTask = (task) => ({
  type: SELECT_TASK,
  payload: task
})
