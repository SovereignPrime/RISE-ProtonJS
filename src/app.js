import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import { Message, rise } from 'risejs'

import SearchPanel from './components/search.js'
import PlusMenu from './components/plusMenu.js'
import NavbarMenu from './components/navbarMenu.js'
import GlobeMenu from './components/globeMenu.js'
import MessagesRightList from './components/messagesRightList'
import MessagesLeftList from './components/messagesLeftList'


const supportEmail = "support@severeignprime.com"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      messages: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    // const loadData = () => JSON.parse(JSON.stringify(jsonMessages));
    let messages = Message.getAll({start: 0, count: 10}); 
    // log.info("messages:",  rise.id())
    this.setState(state => ({
      messages:  messages
    }))
  }

  handleChange(event) {
    log.info(event.target.value);
    this.setState({searchValue: event.target.value});
  }

  handleSearch(event) {
    let searchValue = event.target.searchValue.value
    alert('Отправленное имя: ' +searchValue);
    log.info(this.state.messages);
    event.preventDefault();
  }

  render() {
    return (
      <Container>
        <div className={''}>
          <Row> 
            <GlobeMenu/>
            <SearchPanel 
              onSubmit={this.handleSearch} 
            />
            <PlusMenu/>
          </Row>
        </div>

        <NavbarMenu supportEmail={supportEmail}/>

        <Row>
          <Col xs={3}>
            <MessagesLeftList
              messages={this.state.messages}
            />
          </Col>
          <Col xs={9}>
            <MessagesRightList
              messages={this.state.messages}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
