import React from "react";

class SearchPanel extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='search-box'>
              <form className='form-row' onSubmit={this.props.onSubmit}>
                <div className="col">
                  <input className='form-control ' placeholder='Search' type='text' 
                    value={this.props.searchValue} onChange={this.props.onChange}/>
                </div>
                <div className="col">
                  <button className='btn btn-info' type="submit" >
                    <i className='fa fa-search'></i>
                  </button>
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default SearchPanel;