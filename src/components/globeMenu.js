import React from 'react';
import { Col, Dropdown } from 'react-bootstrap'

class GlobeMenu extends React.Component {
  render() {
    return (
    	<Col xs={3} sm={1} className='z-1'>
	    	<Dropdown className='' >
				  <Dropdown.Toggle className='' variant='' id='dropdown-globe'>
				    <i className='fa fa-globe'></i>
				  </Dropdown.Toggle>
				  <Dropdown.Menu onClick={this.props.onChange}>
				    <Dropdown.Item href='#/action-1'><i className='fa fa-envelope' value='Updates'> Updates</i></Dropdown.Item>
				    <Dropdown.Item href='#/action-2'><i className='fa fa-tasks' value='Tasks'> Tasks</i></Dropdown.Item>
				    <Dropdown.Item href='#/action-3'><i className='fa fa-address-card' value='Contacts'> Contacts</i></Dropdown.Item>
				  </Dropdown.Menu>
				</Dropdown>
			</Col>

    );
  }
}

export default GlobeMenu;
