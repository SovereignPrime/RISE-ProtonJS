import React from 'react';
import SearchPanel from './components/search.js'
import PlusMenu from './components/search.js'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    log.info(event.target.value);
    this.setState({searchValue: event.target.value});
  }

  handleSearch(event) {
    log.info(event.target);
    alert('Отправленное имя: ' + this.state.searchValue);
    event.preventDefault();
  }

  render() {
    return (
      <div className={'hello'}>
        <div>Val:{this.state.searchValue} </div>
        <SearchPanel 
          onSubmit={this.handleSearch} 
          searchValue={this.state.searchValue} 
          onChange={this.handleChange} 
        />
      </div>
    );
  }
}
