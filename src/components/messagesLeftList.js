import React from 'react';
import { Row, Col } from 'react-bootstrap'


class MessagesLeftList extends React.Component {

  render() {
    return (
    	<div className="pt-2">
	    	{this.props.messages.map((m, index) => {
	        return (
			    	<Row className='container border-right'>
			    		<Col xs={9}>
				    		<i className='fa fa-envelope'> {m.from}, {m.to} </i>
				    		<div className='font-weight-bold '>{m.subject}</div>
			        </Col>
			        <Col xs={3}>
			        	{m.date.slice(0, 10) }  {/*TODO*/}
			        </Col>
			    	</Row>
			    )
	    	})}
    </div>
    );
  }
}

export default MessagesLeftList;