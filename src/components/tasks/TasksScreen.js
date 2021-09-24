import React from 'react';
import { Row, Col, Form } from 'react-bootstrap'
import DatePicker from "react-datepicker";

import {Tree}  from '../tree'
import { list_to_tree } from '../../utils'
import {taskModel} from  '../../state'


export default class TasksScreen extends React.Component {
  constructor(props) {
    super(props)
    this.loadTasks = this.loadTasks.bind(this)
    // this.changeTaskDue = this.changeTaskDue.bind(this)
    this.state = {
      selectedDate: null
    };
    // this.loadTasks()
  }

  loadTasks() {
    console.log('loadTasks (empty)');
    // tasks = TODO load task
    // this.props.loadTasks(tasks)
  }

  changeTaskStatus(e) {
    let newTaskStatus = e.target.value
      // TODO PUT 
  }

  changeTaskDue(date) {

      // TODO PUT 
  }

  parseDate(date) {
    let timestamp = Date.parse(date);
    let d = new Date()
    if (isNaN(timestamp) == false) {
      d = new Date(timestamp);
    }
    return d
  }

  taskView() {
    let renderView = (<div></div>);
    let task = this.props.tasks.selectedTask
    let taskStatuses = 
      taskModel.statuses.map((status, index)  => 
        (<option key={'status'+index}>{status}</option>)
      )
    if (task) {
      renderView = (
        <div>
        <Form >
          <div className='text-uppercase'>{task.name}</div>
          <div>
          <Form.Group controlId='TaskSelect'>
            <Form.Label column={true} className='text-uppercase'>Status:</Form.Label>
            <Form.Control 
              as='select' 
              defaultValue={task.status}
              onChange={this.changeTaskStatus}
              size='sm'
            >
              {taskStatuses}
            </Form.Control>
          </Form.Group>
          </div>
          <div>
            <span className='text-uppercase'>Due:</span>
            <DatePicker
              selected={this.parseDate(task.due)}
              onChange={this.changeTaskDue}
              dateFormat='dd.MM.yy'
            />
          </div>
          <div>
            <span className='text-uppercase'>Estimate:</span>
            <span className=''>{task.estimate}</span>
          </div>
          <div>
            <span className='text-uppercase'>People:</span>
            <span className=''>{task.status}</span>
          </div>
        </Form>
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
            icon={'fa-task'}
          />
        </Col>
        <Col xs={8}>
          {this.taskView()}
        </Col>
      </Row>
    );
  }
}

