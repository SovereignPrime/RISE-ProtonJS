import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import { rise, Message } from 'risejs'

import { groupMessages, fillSubjects } from './utils'
import SearchPanel from './components/search'
import PlusMenu from './components/plusMenu'
import NavbarMenu from './components/navbarMenu'
import GlobeMenu from './components/globeMenu'
import UpdatesScreen from './components/updates/UpdatesScreen'
import ContactsScreen from './components/contacts/ContactsScreen'
import TasksScreen from './components/tasks/TasksScreen'
import defData from "../test/default_data.json"

const supportEmail = 'support@severeignprime.com'

export default class App extends React.Component {
  constructor(props) {
    log.info('init')
    super(props);
    this.state = {
      cid: undefined,
      searchValue: '',
      messages: [],
      subjects: [],
      contacts: [],
      groups: [],
      activeSubject: undefined,
      activeScreen: 'Updates'
    };

    this.changeScreen = this.changeScreen.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.getMessages = this.getMessages.bind(this);
    this.refreshMessages = this.refreshMessages.bind(this);
    this.openMsgItem = this.openMsgItem.bind(this);
    

  }

  componentDidMount() {
    // const loadData = () => JSON.parse(JSON.stringify(jsonMessages));
    // log.info(Message._rise);
    let cid = rise.id()
      .then((id) => {
        log.info('cid:', id);
        this.setState({cid: id})
      });
    this.getMessages();
    this.setState(state => ({
      contacts: defData["contacts"],
      groups: defData["groups"]
    }));
  }

  openMsgItem(e) {
    let par = e.currentTarget.getAttribute('data-subject')
    this.setState({activeSubject: par});
  }

  getMessages() {
    Message.getAll({start: 0, count: 10})
      .then((messages) => {
          if (messages && messages.length === 0) {
            messages = defData["messages"];
            log.info('Load default messages')
          }
          this.setState(state => ({
              messages:  groupMessages(messages)
          }));
          log.info('messages:', messages.length);
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

  changeScreen(event) {
    let screen = event.target.getAttribute('screen') || event.target.parentNode.getAttribute('screen');
    this.setState({activeScreen: screen});
  }

  handleSearch(event) {
    let searchValue = event.target.searchValue.value
    alert('Отправленное имя: ' +searchValue);
    event.preventDefault();
  }


  render() {
    let screen;
    log.info('render:', this.state.activeScreen)
    switch (this.state.activeScreen) {
      case 'Tasks':
        screen = 
          <TasksScreen/>
        break;
      case 'Contacts':
        screen = 
          <ContactsScreen
            contacts={this.state.contacts}
            groups={this.state.groups}
            cid={this.state.cid}
          />
        break;
      default:
        screen = 
          <UpdatesScreen
            messages={this.state.messages}
            subjects={this.state.subjects}
            activeSubject={this.state.activeSubject}
            onClick={this.openMsgItem}
          />;
        break;
    }

    return (
      <Container fluid={true} id={'window-size'}>
        <Row> 
          <GlobeMenu onChange={this.changeScreen}/>
          <SearchPanel 
            onSubmit={this.handleSearch} 
          />
          <PlusMenu/>
          
        </Row>

        <NavbarMenu 
          supportEmail={supportEmail}
          refresh={this.refreshMessages}
        />

        {screen}
      </Container>
    );
  }

}
