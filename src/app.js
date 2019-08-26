import React from 'react';
import SearchPanel from './components/search.js'
import PlusMenu from './components/plusMenu.js'
import NavbarMenu from './components/navbarMenu.js'


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
    let searchValue = event.target.searchValue.value
    alert('Отправленное имя: ' +searchValue);
    event.preventDefault();
  }

  render() {
    return (
      <div className={''}>
        <div className={'container'}>
          <div className='row'> 
            <SearchPanel 
              onSubmit={this.handleSearch} 
            />
            <PlusMenu/>
          </div>
        </div>

        <NavbarMenu/>
      </div>
    );
  }
}
