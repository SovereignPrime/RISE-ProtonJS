import React from "react";
import { Dropdown } from 'react-bootstrap'

class PlusMenu extends React.Component {
  render() {
    return (
    	<Dropdown >
			  <Dropdown.Toggle className="" variant="" id="dropdown-plus">
			    <i className='fa fa-plus'></i>
			  </Dropdown.Toggle>
			  <Dropdown.Menu>
			    <Dropdown.Item href="#/action-1">Message</Dropdown.Item>
			    <Dropdown.Item href="#/action-2">Task</Dropdown.Item>
			    <Dropdown.Item href="#/action-3">Contacts</Dropdown.Item>
			  </Dropdown.Menu>
			</Dropdown>

    );
  }
}

export default PlusMenu;