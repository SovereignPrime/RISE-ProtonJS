import React from 'react';
import { Row, Col } from 'react-bootstrap'
// import {bindActionCreators} from 'redux';

import Tree  from '../tree'
import { list_to_tree } from '../../utils'


export default class TasksScreen extends React.Component {
  constructor(props) {
    super(props)
    this.loadTasks = this.loadTasks.bind(this)

    // this.loadTasks()
    console.log("props", this.props);
  }

  loadTasks() {
    console.log("loadTasks (empty)");
    // tasks = TODO load task
    // this.props.loadTasks(tasks)
  }

  taskView() {
    let renderView = (<div></div>);
    let task = this.props.tasks.selectedTask
    if (task) {
      renderView = (
        <div>
          <div className="text-uppercase">{task.name}</div>
          <div>
            <span className="text-uppercase">Status:</span>
            <span className="text-uppercase">{task.status}</span>
          </div>
          <div>
            <span className="text-uppercase">Due:</span>
            <span className="text-uppercase">{task.status}</span>
          </div>
          <div>
            <span className="text-uppercase">Estimate:</span>
            <span className="text-uppercase">{task.status}</span>
          </div>
          <div>
            <span className="text-uppercase">Status:</span>
            <span className="text-uppercase">{task.status}</span>
          </div>
        </div>
      )
    }
    return renderView;
  }


  render() {
    const taskTree = list_to_tree(this.props.tasks.tasksList)
    return(
      <Row>
        <Col xs={4} >
          <Tree data={taskTree} 
            itemName={'name'} 
            childrenKeyword={'children'} 
            treeName={'tasks'}
            selectAction={this.props.selectTask}
          />
        </Col>
        <Col xs={8}>
          {this.taskView()}
        </Col>
      </Row>
    );
  }
}

