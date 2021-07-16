import React from 'react';
import PropTypes from 'prop-types';

import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faUser, faCalendarCheck, faClock} from '@fortawesome/free-regular-svg-icons';
import {faDharmachakra, faCog, faUniversity} from '@fortawesome/free-solid-svg-icons';
import {faPagelines} from '@fortawesome/free-brands-svg-icons';

import {Container, Row, Col, Nav} from 'react-bootstrap';

import UpdatesScreenContainer from './updates/UpdatesScreenContainer'
import ContactsScreenContainer from './contacts/ContactsScreenContainer'
import TasksScreenContainer from './tasks/TasksScreenContainer'


class ActiveScreen extends React.Component {
    screens = [
        {
            name: 'Updates',
            icon: faEnvelope,
            cls: <UpdatesScreenContainer />
        },
        {
            name: 'Contacts',
            icon: faUser,
            cls: <ContactsScreenContainer />

        },
        {
            name: 'Tasks',
            icon: faCalendarCheck,
            cls: <TasksScreenContainer />
        },
        {
            name: 'Resources',
            icon: faPagelines,
            cls: <UpdatesScreenContainer />
        },

        {
            name: 'Karma',
            icon: faDharmachakra,
            cls: <UpdatesScreenContainer />
        },
        /*{
              name: 'People square',
              icon: fa,
            cls: <UpdatesScreenContainer />
          }, */
        {
            name: 'Justice',
            icon: faUniversity,
            cls: <UpdatesScreenContainer />
        },
        {
            name: 'History',
            icon: faClock,
            cls: <UpdatesScreenContainer />
        },
        {
            name: 'System',
            icon: faCog,
            cls: <UpdatesScreenContainer />
        },
    ];

  constructor(props) {
    super(props);
    this.state = {
        currentScreen: <UpdatesScreenContainer />
      };

      this.handleChange = this.handleChange.bind(this);
    
  }  

  handleChange(index, e) {
      this.setState({
          currentScreen: this.screens[index].cls
      });
  }

  render() {

    let screensTabs = this.screens.map((screen, index) => {
      return (
          <Nav.Link
              key={index}
              eventKey={index}
              className="text-light text-center"
            >
            <Icon icon={screen.icon} />
        </Nav.Link>
      )
    })
    return (
      <Container fluid={true} className='px-0' id={'window-size'}>
          <Row>
              <Col xs={1}
                  className="d-flex flex-column bg-dark"
              style={{ 
                  height: "calc(100vh - 80px)",
                  minWidth: '145px',
              }} >
                  <Nav
                      className="flex-column"
                      onSelect={this.handleChange}
                    >
                      {screensTabs}
              </Nav>
          </Col>
          <Col>
              {this.state.currentScreen}
          </Col>
      </Row>
      </Container>
      );
  }

}

export default ActiveScreen;
