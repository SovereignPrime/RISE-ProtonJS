import React from "react";

class SearchPanel extends React.Component {
  render() {
    return (
          <div className='col-10'>
            <div className='search-box '>
              <form className='form-row ' onSubmit={this.props.onSubmit}>
                <div className="col ">
                  <input className='form-control ' name='searchValue' placeholder='Search' type='search' />
                </div>
                <div className="col">
                  <button className='btn btn-info' type="submit" >
                    <i className='fa fa-search'></i>
                  </button>
                </div>
              </form>
              
            </div>
          </div>
    );
  }
}

export default SearchPanel;