import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import { rise, Message } from 'risejs'


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
    this.getMessages = this.getMessages.bind(this);
    this.refreshMessages = this.refreshMessages.bind(this);
  }

  componentDidMount() {
    // const loadData = () => JSON.parse(JSON.stringify(jsonMessages));
    log.info(Message._rise);
    let cid = rise.id()
      .then((id) => {log.info("cid:", id)});
    this.getMessages()
  }

  getMessages() {
    Message.getAll({start: 0, count: 10})
      .then((messages) => {
          this.setState(state => ({
              messages:  messages
          }));
          log.info("messages:", this.state.messages.length);
      })
      .catch((e) => {
          log.error(e);
      });
  }

  refreshMessages(event) {
    this.getMessages();
    event.preventDefault();
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
      <Container fluid={true} id={'window-size'}>
        <Row> 
          <GlobeMenu/>
          <SearchPanel 
            onSubmit={this.handleSearch} 
          />
          <PlusMenu/>
        </Row>

        <NavbarMenu 
          supportEmail={supportEmail}
          refresh={this.refreshMessages}
        />

        <Row>
          <Col xs={3} >
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
