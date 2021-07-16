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

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <div p={2}>{children}</div>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};


class ActiveScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        screenIndex: 1
      };
    this.handleChange = this.handleChange.bind(this);
    
  }  

  handleChange(e, val) {
    this.setState({ screenIndex: val});
    // this.props.selectScreen(val)
  }

  render() {
      const screens = [
          {
              name: 'Updates',
              icon: faEnvelope
          },
          {
              name: 'Contacts',
              icon: faUser
          },
          {
              name: 'Tasks',
              icon: faCalendarCheck
          },
          {
              name: 'Resources',
              icon: faPagelines
          },

          {
              name: 'Karma',
              icon: faDharmachakra
          },
          /*{
              name: 'People square',
              icon: fa
          }, */
          {
              name: 'Justice',
              icon: faUniversity
          },
          {
              name: 'History',
              icon: faClock
          },
          {
              name: 'System',
              icon: faCog
          },
          ]

    let screensTabs = screens.map((screen, index) => {
      return (
          <Nav.Link
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
                  style={{ height: "calc(100vh - 80px)"}}
              >
                  <Nav
                      className="flex-column"
                      actionKey={0}
                      onSelect={this.handleChange}
                    >
                      {screensTabs}
              </Nav>
          </Col>
          <Col>
              <TabPanel value={this.state.screenIndex} index={1}>
                  <UpdatesScreenContainer />
              </TabPanel>
              <TabPanel value={this.state.screenIndex} index={2} >
                  <ContactsScreenContainer />
              </TabPanel>
              <TabPanel value={this.state.screenIndex} index={3} >
                  <TasksScreenContainer />
              </TabPanel>
          </Col>
      </Row>
      </Container>
      );
  }

}

export default ActiveScreen;
