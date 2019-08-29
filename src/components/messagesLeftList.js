import React from 'react';
import { Row, Col } from 'react-bootstrap'
import {formatTimedelta, callTimedelta} from '../utils'


class MessagesLeftList extends React.Component {

  render() {
  	let hasMessages = Array.isArray(this.props.messages) && this.props.messages.length > 0;
  	let renderData;

  	if (hasMessages) {
  		renderData = 
  			this.props.messages.map((m, index) => {
	        return (
			    	<Row className='container border-right'>
			    		<Col xs={9}>
				    		<i className='fa fa-envelope'> {m.from}, {m.to} </i>
				    		<div className='font-weight-bold '>{m.subject}</div>
			        </Col>
			        <Col xs={3}>
			        	{formatTimedelta(callTimedelta(m.timestamp)) }  {/*TODO*/}
			        </Col>
			    	</Row>
			    )
	    	})
	  } else {
  		renderData = <div>No messages</div>
  	}

    return (
    	<div className='pt-2'>
	    	{ renderData }
    </div>
    );
  }
}

export default MessagesLeftList;