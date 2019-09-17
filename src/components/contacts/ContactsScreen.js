import React from 'react';
import { Row, Col } from 'react-bootstrap'
import Tree  from '../tree'
// import Tree  from '../treeview'


class ContactsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choosenContactId: this.props.cid
    };
    this.handleContactClick = this.handleContactClick.bind(this);
  } 

  handleContactClick(event, id) {
    this.setState(
      {choosenContactId: id}
    )
  }

  render() {
    const contactsOfGroup = 
      this.props.contacts.map((contact) => 
        {
          let mbActive=this.state.choosenContactId == contact.id;
          return (
            <div key={`contacts-${contact.id}`} 
              className={`custom-link `} 
              onClick={(e) => this.handleContactClick(e, contact.id)}
            >
              <input type='checkbox' checked={mbActive} onChange={(e) => (e)} />
              {contact.name}
            </div>
          )
        }
      );

    let viewContact = (<div></div>);
    if (this.state.choosenContactId) {
      let choosenContact = getContactById(this.state.choosenContactId, this.props.contacts)
      if (choosenContact) {
        viewContact = (
          <div>
            <div className='text-capitalize'> {choosenContact.name}</div>
            <div>EMAIL: {choosenContact.email}</div>
            <div>PHONE: {choosenContact.phone}</div>
            <div>{choosenContact.address}</div> 
          </div>
        )
      }
    } 
        

    return(
      <Row>
        <Col xs={2} >
          <div className='font-weight-bold custom-link'>My accounts</div>
          <label>All contacts</label>
          <Tree data={this.props.groups} 
            itemName={'name'} 
            childrenKeyword={'subgroups'} 
            treeName={'groups'}
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

export default ContactsScreen;

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
