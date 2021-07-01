import React from 'react';
import { Row, Col } from 'react-bootstrap'
import {formatTimedelta, callTimedelta, getLastMessage} from '../../utils'


class MessagesLeftList extends React.Component {
  openMsgItem(e, subject) {
    this.props.selectSubject(subject)
  }

  render() {
  	
  	let hasMessages = Array.isArray(this.props.messages) && 
  		(Object.keys(this.props.messages).length !== 0);
  	let renderData;

  	if (hasMessages) {
  		renderData = 
  			this.props.subjects.map((subject, index) => {
  				let m = getLastMessage(this.props.messages[subject]);
  				let icon = (m.type == 'update') ? 'tasks' : 'envelope';
  				let activeClass = (subject === this.props.selectedSubject) ? 'fa fa-arrow-right' : '';

	        return (
        			<Row key={`${subject}-${index}`} className={'container border-right update-link pb-2'} 
        				onClick={(e) => this.openMsgItem(e, subject)}
        			>
				    		<Col xs={8}>
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
