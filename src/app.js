import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import { rise, Message } from 'risejs'

import { groupMessages, fillSubjects } from './utils'
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
      messages: [],
      subjects: [],
      activeSubject: undefined
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.getMessages = this.getMessages.bind(this);
    this.refreshMessages = this.refreshMessages.bind(this);
    this.onClickListItem = this.onClickListItem.bind(this);
  }

  onClickListItem(e) {
    let par = e.currentTarget.getAttribute('data-subject')
    this.setState({activeSubject: par});
  }

  componentDidMount() {
    // const loadData = () => JSON.parse(JSON.stringify(jsonMessages));
    // log.info(Message._rise);
    let cid = rise.id()
      .then((id) => {log.info("cid:", id)});
    this.getMessages()
  }

  getMessages() {
    Message.getAll({start: 0, count: 10})
      .then((messages) => {
          if (!messages.length) {
            messages = defMes;
            log.info("Load default messages")
          }
          this.setState(state => ({
              messages:  groupMessages(messages)
          }));
          log.info("messages:", messages.length);
          this.setState(state => ({
              subjects:  fillSubjects(messages)
          }));
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
          <Col xs={4} >
            <MessagesLeftList
              messages={this.state.messages}
              subjects={this.state.subjects}
              activeSubject={this.state.activeSubject}
              onClick={this.onClickListItem}
            />
          </Col>
          <Col xs={8}>
            <MessagesRightList
              messages={this.state.messages}
              activeSubject={this.state.activeSubject}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

const defMes =  [{"id": 1,
               "subject": "test", 
               "from": "Dan", 
               "to": "server",  
               "text": "test message", 
               "timestamp": "2019-08-25T10:30:17.970Z", 
               "status": "active"
               },
               {"id": 2,
               "subject": "test2", 
               "from": "Dan2", 
               "to": "server2",  
               "text": "test message2", 
               "timestamp": "2019-08-26T22:30:17.970Z", 
               "status": "active"
               },
               {"id": 3,
               "subject": "test2", 
               "from": "Dan3", 
               "to": "server3",  
               "text": "test message3", 
               "timestamp": "2019-08-27T10:30:17.970Z", 
               "status": "active"
               },
               {"id": 4,
               "subject": "upd",
               "type": "update",
               "from": "Dan3", 
               "to": "server3",  
               "text": "test message3", 
               "timestamp": "2019-08-27T10:30:17.970Z", 
               "status": "new"
               }
]