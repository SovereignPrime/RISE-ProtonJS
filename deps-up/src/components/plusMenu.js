import React from 'react';
import { Dropdown, Col } from 'react-bootstrap'

class PlusMenu extends React.Component {
  render() {
    return (
    	<Col xs={2} sm={1} className=''>
	    	<Dropdown className='' >
				  <Dropdown.Toggle className='' variant='' id='dropdown-plus'>
				    <i className='fa fa-plus '></i>
				  </Dropdown.Toggle>
				  <Dropdown.Menu className='dropdown-menu-right'>
				    <Dropdown.Item href='#/action-1'><i className='fa fa-envelope'> Message</i></Dropdown.Item>
				    <Dropdown.Item href='#/action-2'><i className='fa fa-tasks'> Task</i></Dropdown.Item>
				    <Dropdown.Item href='#/action-3'><i className='fa fa-address-card'> Contacts</i></Dropdown.Item>
				  </Dropdown.Menu>
				</Dropdown>
			</Col>
    );
  }
}

export default PlusMenu;