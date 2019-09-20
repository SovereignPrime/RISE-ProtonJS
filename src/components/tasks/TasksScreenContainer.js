import React from 'react';
import {connect} from 'react-redux'

import TasksScreen from './TasksScreen'
import { loadTasks, selectTask }  from '../../actions/tasks'


class TasksScreenContainer extends React.Component {
  render () {
    return (
      <TasksScreen 
        loadTasks={this.props.loadTasks} 
        selectTask={this.props.selectTask} 
        tasks={this.props.tasks}
      />
    )
  }
}

const mapDispatchToProps = { //putActionsToProps
  loadTasks,
  selectTask
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksScreenContainer);
