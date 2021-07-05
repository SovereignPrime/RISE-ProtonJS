import React from 'react';
import PropTypes from 'prop-types';
import {MaterialIcon as Icon} from 'material-icons-react';
import {Tabs, Tab} from 'react-bootstrap';

import UpdatesScreenContainer from './updates/UpdatesScreenContainer'
import ContactsScreenContainer from './contacts/ContactsScreenContainer'
import TasksScreenContainer from './tasks/TasksScreenContainer'

import Logo from '../assets/img/logo.png'

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
      console.log("Test 1")
    var iconLogo = <img src={Logo} alt="logo" className={'w-100p'} />
    var brand = (
      <Tab title='' icon={iconLogo} {...a11yProps(0)}/> 
    );
    const screens = [
      { name: 'Updates',
        icon: 'email_outline'},
      { name: 'Contacts',
        icon: 'person_outline'},
      { name: 'Tasks',
        icon: 'note'},
      { name: 'Config',
        icon: 'settings'},
    ]

    let screensTabs = screens.map((screen, index) => {
      var icon = (<Icon>{screen.icon}</Icon>)
      return (
        <Tab eventKey={'screen-tab-' + index} title={screen.name} icon={icon} {...a11yProps({index})} />
      )
    })
    return (
      <div className=''>
        
        <Tabs
            id='my-vertical-tabs'
            //centered={true}
            orientation='vertical'
            variant='scrollable'
            value={this.state.screenIndex}
            onChange={this.handleChange}
            aria-label='Vertical tabs example'
            className={'w-100p'}
        >
          {brand}
          {screensTabs}
        </Tabs>
        <TabPanel value={this.state.screenIndex} index={1}>
          <UpdatesScreenContainer />
        </TabPanel>
        <TabPanel value={this.state.screenIndex} index={2} >
          <ContactsScreenContainer />
        </TabPanel>
        <TabPanel value={this.state.screenIndex} index={3} >
          <TasksScreenContainer />
        </TabPanel>
      </div>
      );
  }

}

export default ActiveScreen;
