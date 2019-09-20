import React from 'react';
import {connect} from 'react-redux'

import ContactsScreen from './ContactsScreen'
import { loadContacts, selectContact, loadGroups, selectGroup }  from '../../actions/contacts'


class ContactsScreenContainer extends React.Component {
  render () {
    return (
      <ContactsScreen 
        loadContacts={this.props.loadContacts} 
        loadGroups={this.props.loadGroups} 
        selectContact={this.props.selectContact} 
        selectGroup={this.props.selectGroup} 
        contacts={this.props.contacts}
      />
    )
  }
}

const mapDispatchToProps = { //putActionsToProps
  loadContacts,
  selectContact,
  loadGroups,
  selectGroup
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsScreenContainer);

