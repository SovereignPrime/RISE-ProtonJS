import React from 'react';
import { Col, Form, FormControl, InputGroup, Button } from 'react-bootstrap'

class SearchPanel extends React.Component {
  render() {
    return (
        <Form className='bg-white w-100 border-bottom' onSubmit={this.props.onSubmit}>
            <InputGroup style={{height: '80px'}}>
            <FormControl name='searchValue' className="border-0 h-100" type='search' />
                <InputGroup.Append>
                    <Button variant='link' type='submit' className='text-secondary' style={{width: '80px'}}>
                        <i className='fa fa-search'></i>
                    </Button>
            </InputGroup.Append>
            </InputGroup>
        </Form>
    );
  }
}

export default SearchPanel;
