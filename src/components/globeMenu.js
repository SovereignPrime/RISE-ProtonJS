import React from "react";
import { Dropdown } from 'react-bootstrap'

class GlobeMenu extends React.Component {
  render() {
    return (
    	<Dropdown >
			  <Dropdown.Toggle className="" variant="" id="dropdown-globe">
			    <i className='fa fa-globe'></i>
			  </Dropdown.Toggle>
			  <Dropdown.Menu>
			    <Dropdown.Item href="#/action-1">Updates</Dropdown.Item>
			    <Dropdown.Item href="#/action-2">Tasks</Dropdown.Item>
			    <Dropdown.Item href="#/action-3">Contacts</Dropdown.Item>
			  </Dropdown.Menu>
			</Dropdown>

    );
  }
}

export default GlobeMenu;