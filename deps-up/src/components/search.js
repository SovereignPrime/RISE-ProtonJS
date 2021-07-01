import React from 'react';
import { Col } from 'react-bootstrap'

class SearchPanel extends React.Component {
  render() {
    return (
      <Col xs={10} sm={9} md={10} className=''>
        <form className='form-row row ' onSubmit={this.props.onSubmit}>
          <Col xs={10} sm={11} >
            <input className='form-control ' name='searchValue' placeholder='Search' type='search' />
          </Col>
          <Col xs={2} sm={1} >
            <button className='btn btn-info' type='submit' >
              <i className='fa fa-search'></i>
            </button>
          </Col>
        </form>
      </Col>
    );
  }
}

export default SearchPanel;