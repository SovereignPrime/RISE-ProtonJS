import React from 'react';
import {  HashRouter, Route, Switch, Link } from 'react-router-dom';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'

class NavbarMenu extends React.Component {
  render() {
    return (
		<Navbar bg='light'  className='my-1 ' expand='sm'>
		  <Navbar.Brand href='/'></Navbar.Brand>
		  <Navbar.Toggle aria-controls='basic-navbar-nav' />
		  <Navbar.Collapse id='basic-navbar-nav'>
		    <Nav className='mx-auto'>
		    	<i className='fa fa-filter mt-2 ml-1'></i>
		      <Nav.Link href='#home'>SMART FILTER</Nav.Link>
		      <i className='fa fa-archive mt-2 ml-1'></i>
		      <Nav.Link href='#archive'>ARCHIVE</Nav.Link>
		      <i className='fa fa-user mt-2 ml-1'></i>
		      <NavDropdown title='MY PROFILE' id='profile-dropdown' className=''>
		        <NavDropdown.Item href='#action/3.1'>View my profile</NavDropdown.Item>
		        <NavDropdown.Item href='#action/3.2'>Backup user</NavDropdown.Item>
		        <NavDropdown.Item href='#action/3.3'>Restore user</NavDropdown.Item>
		      </NavDropdown>
		      <i className='fa fa-question mt-2 ml-1'></i>
		      <NavDropdown title='HELP' id='help-dropdown '>
		      	<NavDropdown.Item href='#download_logs'>Download logs</NavDropdown.Item>
		      	<NavDropdown.Item href='#'>For support: {this.props.supportEmail}</NavDropdown.Item>
		      </NavDropdown>
		    </Nav>
		  </Navbar.Collapse>
		  <button className='btn btn-info btn-sm' onClick={this.props.refresh} 
		  	title="Refresh messages" >
        <i className='fa fa-refresh'></i>
      </button>
		</Navbar>
    );
  }
}

export default NavbarMenu;