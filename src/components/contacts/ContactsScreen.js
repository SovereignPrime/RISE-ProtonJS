import React from 'react';
import { Row, Col } from 'react-bootstrap'
import TreeView from 'react-treeview';

import {connect} from 'react-redux'

import Tree  from '../tree'
import {getListByItemIds} from '../../utils'


class ContactsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myAccount: false
    }
    this.handleContactClick = this.handleContactClick.bind(this);
    this.handleGroupClick = this.handleGroupClick.bind(this);
    this.filterContantsByGroup = this.filterContantsByGroup.bind(this);
    this.selectAllContacts = this.selectAllContacts.bind(this);
    this.chooseMyAccount = this.chooseMyAccount.bind(this);
  } 

  handleContactClick(event, contact) {
    this.props.selectContact(contact)
  }

  handleGroupClick(group) {
    this.setState({myAccount: false});
    $('.active-tree-item').removeClass('active-tree-item');
    this.props.selectGroup(group);
    if (this.props.contacts.selectedGroup != group) {
      this.props.selectContact(null)
    }
  }

  filterContantsByGroup() {
    let contacts;
    if (this.state.myAccount) {
      contacts=this.props.contacts.contactsList.filter((contact) => contact.my)
    }
    else if (this.props.contacts.selectedGroup) {
      contacts = getListByItemIds(this.props.contacts.selectedGroup.contacts, this.props.contacts.contactsList)
    } 
    else {
      return this.props.contacts.contactsList
    }
    return contacts
  }

  selectAllContacts(e) {
    this.setState({myAccount: false})
    this.props.selectGroup(null);
    $('.active-tree-item').removeClass('active-tree-item');
    e.target.classList.add('active-tree-item');
  }

  chooseMyAccount(e) {
    this.props.selectContact(null);
    this.props.selectGroup(null);
    this.setState({myAccount: true});
    $('.active-tree-item').removeClass('active-tree-item');
    e.target.classList.add('active-tree-item');
  }

  
  render() {
    // view contacts of selected Group or All contacts:
    let contantsOfGroup = this.filterContantsByGroup();
    const viewContactsOfGroup = 
      contantsOfGroup.map((contact) => 
        {
          let mbActive=this.props.contacts.selectedContact == contact;
          return (
            <div 
              key={`contacts-${contact.id}`} 
              className={'custom-link'} 
              onClick={(e) => this.handleContactClick(e, contact)}
            >
              <input type='checkbox' checked={mbActive} onChange={(e) => (e)} />
              {contact.name}
            </div>
          )
        }
      );

    // view selected contact:
    let viewContact = 
      (<div className='text-capitalize font-weight-bold'>No contact currently selected</div>);
    let choosenContact = this.props.contacts.selectedContact;
    if (choosenContact) {
      viewContact = (
        <div>
          <div className='text-capitalize'> {choosenContact.name}</div>
          <div>EMAIL: {choosenContact.email}</div>
          <div>PHONE: {choosenContact.phone}</div>
          <div>ADDRESS: {choosenContact.address}</div> 
        </div>
      )
    } 

    return(
      <Row>
        <Col xs={4} className='border-right full-height'>
          <TreeView
              nodeLabel="My profile"
              itemClassName={'m-1 py-2 px-3 rounded-pill bg-light custom-link'}
          >
              <TreeView
                  nodeLabel="All contacts"
                  itemClassName={'m-1 py-2 px-3 rounded-pill bg-light custom-link'}
              >
                <Tree data={this.props.contacts.groups} 
                  itemName={'name'} 
                  childrenKeyword={'subgroups'} 
                  treeName={'groups'}
                  selectAction={this.handleGroupClick}
                />
              </TreeView>
          </TreeView>
        </Col>
        <Col xs={8}>
          {viewContact}
        </Col>
      </Row>
    );
  }

}


export default ContactsScreen;
