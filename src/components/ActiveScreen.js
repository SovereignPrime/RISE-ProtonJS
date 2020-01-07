import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box, Icon } from '@material-ui/core';

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
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={2}>{children}</Box>
    </Typography>
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
    var iconLogo = <img src='assets/img/logo.png' alt="logo" className={'w-100p'} />
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
      { name: 'Triangle',
        icon: 'change_history_outline'},
        { name: 'Timer',
        icon: 'schedule_outline'},
        { name: 'Adjust',
        icon: 'radio_button_checked_rounded_outline'},
        { name: 'Some',
        icon: 'video_label'},
        { name: 'Flag',
        icon: 'flag_outline'},
    ]
    let screensTabs = screens.map((screen, index) => {
      var icon = (<Icon>{screen.icon}</Icon>)
      return (
        <Tab key={'screen-tab-'+index} title={screen.name} icon={icon} {...a11yProps({index})} />
      )
    })
    return (
      <div className=''>
        
        <Tabs
            id='my-vertical-tabs'
            centered={true}
            orientation='vertical'
            variant='scrollable'
            value={this.state.screenIndex}
            onChange={this.handleChange}
            aria-label='Vertical tabs'
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
