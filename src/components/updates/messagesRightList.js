import React from 'react';
import { Row, Col } from 'react-bootstrap'
import {formatTimedelta, callTimedelta, arr1_minus_arr2, sortArrayByTime} from '../../utils'


class MessagesRightList extends React.Component {

  render() {
  	let subjectsArray = this.props.messages[this.props.activeSubject];
  	let hasMessages =  Array.isArray(subjectsArray) && 
  		(Object.keys(subjectsArray).length !== 0);
  	let renderData;

  	if (hasMessages) {
  		let icon = (subjectsArray[0].type == 'update') ? 'tasks' : 'envelope';
  		let header = (
  			<i className={`fa fa-${icon}`}>
					<b className='text-uppercase pl-1'>{this.props.activeSubject}</b>
				</i>
  		)
  		let sortedMessages = sortArrayByTime(subjectsArray)
  		let objectsList = 
  			sortedMessages.map((m, index) => {
	        return (
			    	<Row className='container' key={`message-${m.id}`} >
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
	    	renderData = (
	    	<div>
	    		{header}
	    		{objectsList}
		     </div>
		     )
  	}
  	else {
  		renderData = <div></div>
  	}

    return (
    	<div className='pt-2'>
	    	{renderData}
  	  </div>
    );
  }
}

export default MessagesRightList;
