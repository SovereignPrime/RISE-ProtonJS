import React from 'react';
import { Row, Col } from 'react-bootstrap'
import {formatTimedelta, callTimedelta, getLastMessage} from '../utils'


class MessagesLeftList extends React.Component {

  render() {
  	
  	let hasMessages = Array.isArray(this.props.messages) && (this.props.messages !== []);
  	let renderData;

  	if (hasMessages) {
  		renderData = 
  			this.props.subjects.map((subject) => {
  				let m = getLastMessage(this.props.messages[subject]);
  				let icon = (m.type == 'update') ? 'tasks' : 'envelope';
  				let activeClass = (subject === this.props.activeSubject) ? 'fa fa-arrow-right' : '';

	        return (
        			<Row className={`container border-right update-link pb-2`} 
        				onClick={this.props.onClick}
        				data-subject={subject}
        			>
				    		<Col xs={8} >
					    		<i className={`fa fa-${icon}`}>
					    			<span className='pl-1'>{m.from}, {m.to} </span>
					    		</i>
					    		<div className={`font-weight-bold d-block ${activeClass}`}>
					    			<span className='pl-1'>{ m.subject }</span>
					    		</div>
				        </Col>
				        <Col xs={4} className='small'>
				        	{formatTimedelta(callTimedelta(m.timestamp)) }
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