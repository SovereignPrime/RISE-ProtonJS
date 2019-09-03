import React from 'react';
import { Row, Col } from 'react-bootstrap'
import MessagesRightList from './messagesRightList'
import MessagesLeftList from './messagesLeftList'

class UpdatesScreen extends React.Component {

  render() {
    return(
      <Row>
        <Col xs={4} >
          <MessagesLeftList
            messages={this.props.messages}
            subjects={this.props.subjects}
            activeSubject={this.props.activeSubject}
            onClick={this.props.onClick}
          />
        </Col>
        <Col xs={8}>
          <MessagesRightList
            messages={this.props.messages}
            activeSubject={this.props.activeSubject}
          />
        </Col>
      </Row>
    );
  }
}

export default UpdatesScreen;
