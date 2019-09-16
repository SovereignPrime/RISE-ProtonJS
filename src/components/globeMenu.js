import React from 'react';
import { Col, Dropdown } from 'react-bootstrap'

class GlobeMenu extends React.Component {
  render() {
    const items = [
      {icon: 'envelope', value: 'Updates'},
      {icon: 'tasks', value: 'Tasks'},
      {icon: 'address-card', value: 'Contacts'},
    ]
    const renderItems =
      items.map((item) => 
              <Dropdown.Item 
                key={item.value}
                screen={item.value}
                onClick={(e) => this.props.onChange(e)} 
                href='#'>
                  <i className={`fa fa-${item.icon} custom-link`}> {item.value}</i>
             </Dropdown.Item>
            )
    return (
    	<Col xs={3} sm={1} className='z-1'>
	    	<Dropdown className='' >
				  <Dropdown.Toggle className='' variant='' id='dropdown-globe'>
				    <i className='fa fa-globe'></i>
				  </Dropdown.Toggle>
				  <Dropdown.Menu>
            {renderItems}
				  </Dropdown.Menu>
				</Dropdown>
			</Col>

    );
  }
}

export default GlobeMenu;
