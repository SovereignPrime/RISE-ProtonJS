import React from 'react';
import { Row, Col } from 'react-bootstrap'
import {connect} from 'react-redux'

import Tree  from '../tree'


class ContactsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handleContactClick = this.handleContactClick.bind(this);
  } 

  handleContactClick(event, contact) {
    this.props.selectContact(contact)
  }

  render() {
    const contactsOfGroup = 
      this.props.contacts.contactsList.map((contact) => 
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

    let viewContact = (<div></div>);
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
        <Col xs={2} >
          <div className='font-weight-bold custom-link'>My accounts</div>
          <label>All contacts</label>
          <Tree data={this.props.contacts.groups} 
            itemName={'name'} 
            childrenKeyword={'subgroups'} 
            treeName={'groups'}
            selectAction={this.props.selectGroup}
          />
        </Col>
        <Col xs={2} >
          {contactsOfGroup}
        </Col>
        <Col xs={8}>
          {viewContact}
        </Col>
      </Row>
    );
  }

}


function getContactById(id, contacts) {
  let found;
  for (let contact of contacts) {
    if (contact.id == id) {
      found = contact;
      break;
    }
  }
  return found;
}


export default ContactsScreen;
