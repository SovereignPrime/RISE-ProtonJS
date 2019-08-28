import React from 'react';
import { Row, Col } from 'react-bootstrap'
import {formatTimedelta, callTimedelta} from '../utils'


class MessagesRightList extends React.Component {

  render() {
    return (
    	<div className="pt-2">
	    	{this.props.messages.map((m, index) => {
	        return (
			    	<Row className='container'>
			    		<Col >
				    		<i className='fa fa-chevron-down pl-1'> {m.from} </i>
				    		<i className='fa fa-arrow-right pl-1'> {m.to} </i>
			        </Col>

			        <Col  >
			        	{m.text}
			        </Col>

			        <Col >
			        	{formatTimedelta(callTimedelta(m.date)) } 
			        </Col>
			    	</Row>
			    )
	    	})}
    </div>
    );
  }
}

export default MessagesRightList;