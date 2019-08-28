import React from 'react';
import { Row, Col } from 'react-bootstrap'
import {formatTimedelta, callTimedelta, arr1_minus_arr2} from '../utils'


class MessagesRightList extends React.Component {

  render() {
  	let hasMessages = Array.isArray(this.props.messages) && this.props.messages.length > 0;
  	let renderData;

  	if (hasMessages) {
  		renderData = this.props.messages.map((m, index) => {
	        return (
			    	<Row className='container'>
			    		<Col >
				    		<i className='fa fa-chevron-down pl-1'> {m.from} </i>
				    		<i className='fa fa-arrow-right pl-1'> {arr1_minus_arr2(m.involved, m.from)} </i>
			        </Col>

			        <Col  >
			        	{m.body.text}
			        </Col>

			        <Col >
			        	{formatTimedelta(callTimedelta(m.timestamp)) } 
			        </Col>
			    	</Row>
			    )
	    	})
  	}
  	else {
  		renderData = <div>No messages</div>
  	}

    return (
    	<div className="pt-2">
	    	{renderData}
    </div>
    );
  }
}

export default MessagesRightList;