import React from 'react';

import UpdatesScreenContainer from './updates/UpdatesScreenContainer'
import ContactsScreenContainer from './contacts/ContactsScreenContainer'
import TasksScreenContainer from './tasks/TasksScreenContainer'

export default class ActiveScreen extends React.Component {

  render() {
    let screen;
    switch (this.props.activeScreen) {
      case 'Tasks':
        screen = 
          <TasksScreenContainer />
        break;
      case 'Contacts':
        screen = 
          <ContactsScreenContainer />
        break;
      default:
        screen = 
          <UpdatesScreenContainer />;
        break;
    }

    return screen
  }

}
