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
  }

  componentDidMount() {
    // const loadData = () => JSON.parse(JSON.stringify(jsonMessages));
    log.info(Message._rise);
      Message.getAll({start: 0, count: 10})
          .then((messages) => {
              this.setState(state => ({
                  messages:  messages
              }))
          })
          .catch((e) => {
              log.error(e);
          });
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

        <NavbarMenu supportEmail={supportEmail}/>

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
