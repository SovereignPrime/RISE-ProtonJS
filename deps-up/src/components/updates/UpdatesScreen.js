import React from 'react';
import { Row, Col } from 'react-bootstrap'
//import { Message } from 'risejs'

import MessagesRightList from './messagesRightList'
import MessagesLeftList from './messagesLeftList'
import { groupMessages, fillSubjects } from '../../utils'
import defData from "../../../../test/default_data.json"


class UpdatesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.getMessages = this.getMessages.bind(this);
    this.refreshMessages = this.refreshMessages.bind(this);
    
    this.getMessages()
  }

  getMessages() {
      let messages = defData["messages"];
      //log.info('Load default messages')
      this.props.loadMessages(groupMessages(messages))
      this.props.loadSubjects(fillSubjects(messages))
      /*Message.getAll({start: 0, count: 10})
      .then((messages) => {
          if (messages && messages.length === 0) {
            messages = defData["messages"];
            log.info('Load default messages')
          }
          return messages
      })
      .then((messages) => {
          this.props.loadMessages(groupMessages(messages))
          return messages
      })
      .then((messages) => {
          this.props.loadSubjects(fillSubjects(messages))
      })
      .catch((e) => {
        console.log("Error when getMessages!");
        log.error(e);
      }); */
  }

  refreshMessages(event) {
    this.getMessages();
    event.preventDefault();
  }

  render() {
    return(
      <Row>
        <Col xs={4} >
          <MessagesLeftList
            messages={this.props.updates.messages}
            subjects={this.props.updates.subjects}
            selectedSubject={this.props.updates.selectedSubject}
            selectSubject={this.props.selectSubject}
          />
        </Col>
        <Col xs={8}>
          <MessagesRightList
            messages={this.props.updates.messages}
            selectedSubject={this.props.updates.selectedSubject}
          />
        </Col>
      </Row>
    );
  }
}

export default UpdatesScreen;
