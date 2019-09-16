import React from 'react';
import { Row, Col } from 'react-bootstrap'
import Tree  from '../tree'
// import Tree  from '../treeview'


class ContactsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choosenContact: undefined
    };
    this.handleContactClick = this.handleContactClick.bind(this);
    this.getContactById = this.getContactById.bind(this);

  } 

  handleContactClick(event, id) {
    console.log("handleContactClick", id);
    this.getContactById(id);

  }

  getContactById(id) {
    for (let contact of this.props.contacts) {
      if (contact.id == id) {
        this.setState(prevState => (
          {choosenContact: contact})
        )
        break;
      }
    }
  }

  render() {
    const contactsList = 
      this.props.contacts.map((contact) => 
        {
          let mbActive=this.state.choosenContact == contact;
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
    if (this.state.choosenContact) {
      viewContact = (
        <div>
          <div>{this.state.choosenContact.name}</div>
          <div>{this.state.choosenContact.email}</div>
          <div>{this.state.choosenContact.phone}</div>
          <div>{this.state.choosenContact.address}</div> 
        </div>
      )
    } 
        

    return(
      <Row>
        <Col xs={2} >
          <div className='font-weight-bold custom-link'>My accounts</div>
          <label>All contacts</label>
          <Tree data={this.props.groups} itemName={'name'} childrenKeyword={'subgroups'} treeName={'groups'}/>
        </Col>
        <Col xs={2} >
          {contactsList}
        </Col>
        <Col xs={8}>
          {viewContact}
        </Col>
      </Row>
    );
  }

}

export default ContactsScreen;
