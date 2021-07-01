import React from 'react';
import { Row, Container } from 'react-bootstrap'

import ActiveScreenContainer from './components/ActiveScreenContainer'
import SearchPanel from './components/search'
import PlusMenu from './components/plusMenu'
import NavbarMenu from './components/navbarMenu'
import GlobeMenu from './components/globeMenu'


const supportEmail = 'support@severeignprime.com'


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.changeScreen = this.changeScreen.bind(this);
    this.handleSearch = this.handleSearch.bind(this);    
  }

  componentDidMount() {
        this.props.loadRiseId("1234567890")
  }

  changeScreen(event) {
    let screen = event.target.getAttribute('screen') || event.target.parentNode.getAttribute('screen');
    this.props.selectScreen(screen)
  }

  handleSearch(event) {
    let searchValue = event.target.searchValue.value
    this.props.searchValue(searchValue)
    alert('Отправленное имя: ' +searchValue);
    event.preventDefault();
  }


  render() {
   

    return (
      <Container fluid={true} id={'window-size'}>
        <Row> 
          {/*<GlobeMenu onChange={this.changeScreen}/>*/}
          <SearchPanel 
            onSubmit={this.handleSearch} 
          />
          {/*<PlusMenu/>*/}
          
        </Row>

       {/* <NavbarMenu 
          supportEmail={supportEmail}
          refresh={this.props.loadMessages}
        />*/}

        <ActiveScreenContainer />
      </Container>
    );
  }

}
