import React from 'react';
import {Row, Col} from 'react-bootstrap'
import TreeView from 'react-treeview'
import {EditText} from 'react-edit-text'
import {Tree, TreeElement}  from '../tree'
import {getListByItemIds} from '../../utils'
import {Contact} from 'risejs'

import 'react-edit-text/dist/index.css'
import defaultAvatar from '../../assets/img/nophoto.png'


class ContactsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentContact: {},
            currentGroup: undefined,
        }
        Contact.me().then((me) => this.setState({
            currentContact: me,
        }));
            this.handleContactClick = this.handleContactClick.bind(this);
            this.handleGroupClick = this.handleGroupClick.bind(this);
            this.filterContantsByGroup = this.filterContantsByGroup.bind(this);
            this.selectAllContacts = this.selectAllContacts.bind(this);
            this.chooseMyAccount = this.chooseMyAccount.bind(this);
        } 

    handleContactClick(event, contact) {
        this.props.selectContact(contact)
    }

    handleGroupClick(group) {
        this.setState({myAccount: false});
        $('.active-tree-item').removeClass('active-tree-item');
        this.props.selectGroup(group);
        if (this.props.contacts.selectedGroup != group) {
            this.props.selectContact(null)
        }
    }

    filterContantsByGroup() {
        let contacts;
        if (this.state.myAccount) {
            contacts=this.props.contacts.contactsList.filter((contact) => contact.my)
        }
        else if (this.props.contacts.selectedGroup) {
            contacts = getListByItemIds(this.props.contacts.selectedGroup.contacts, this.props.contacts.contactsList)
        } 
        else {
            return this.props.contacts.contactsList
        }
        return contacts
    }

    selectAllContacts(e) {
        this.setState({myAccount: false})
        this.props.selectGroup(null);
        $('.active-tree-item').removeClass('active-tree-item');
        e.target.classList.add('active-tree-item');
    }

    chooseMyAccount(e) {
        this.props.selectContact(null);
        this.props.selectGroup(null);
        this.setState({myAccount: true});
        $('.active-tree-item').removeClass('active-tree-item');
        e.target.classList.add('active-tree-item');
    }


    render() {
        // view contacts of selected Group or All contacts:
        let contantsOfGroup = this.filterContantsByGroup();
        const viewContactsOfGroup = 
            contantsOfGroup.map((contact) => 
        {
            let mbActive=this.props.contacts.selectedContact == contact;
            return (
                <div 
                key={`contacts-${contact.id}`} 
                className={'custom-link'} 
                onClick={(e) => this.handleContactClick(e, contact)}
                >
                <input type='checkbox' checked={mbActive} onChange={(e) => (e)} />
                {contact.name}
                </div>
            )
        }
            );

        return(
            <Row>
                <Col xs={4} className='border-right full-height'>
                    <TreeElement
                    label="My profile"
                >
                        <TreeView
                        nodeLabel="All contacts"
                        itemClassName={'m-1 py-2 px-3 rounded-pill bg-light custom-link'}
                    >
                            <Tree data={this.props.contacts.groups} 
                            itemName={'name'} 
                            childrenKeyword={'subgroups'} 
                            treeName={'groups'}
                            selectAction={this.handleGroupClick}
                        />
                            </TreeView>
                        </TreeElement>
                    </Col>
                    <Col xs={8}>
                        <ContactFull contact={this.state.currentContact} />
                    </Col>
                </Row>
        );
    }
}

class ContactFull extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: props.contact,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (state.contact !== props.contact) {
            return {
                contact: props.contact,
            }
        }
        return null
    }

    handleChange(k, v) {
        console.log(k, v);
        this.setState((state) => {
            state.contact[k] = v;
            return {contact: state.contact, ...state};
        });
    }

    handleSave({name, value, previousValue}) {
        console.log(`${name}: ${value}`);
        let contact = this.props.contact;
        contact[name] = value;
        console.log(contact);
        contact.save();
    }

    render() {
        return (
            <Row className={'bg-yellow'}>
                <Col>
                    <img 
                        className={'img-responsive'}
                        src={defaultAvatar}
                    />
                </Col>
                <Col>
                    <Row className={'p-1'}>
                        <Col className={'p-2'}>
                            <EditText 
                                name='name'
                                className='w-100'
                                placeholder='Name Surname'
                                value={this.state.contact.name}
                                type='text'
                                onChange={(v) => this.handleChange('name', v)}
                                onSave={this.handleSave}
                            />
                        </Col>
                    </Row>
                    <Row className={'py-3 border-bottom'}>
                        <Col xs={2} className={'p-2'}>
                            Nickname
                        </Col>
                        <Col>
                            <EditText 
                            name='nick'
                            className='w-100'
                            placeholder='@nickname'
                            value={this.props.contact.nick}
                            type='text'
                            onChange={(v) => this.handleChange('nick', v)}
                            onSave={this.handleSave}
                        />
                            </Col>
                        </Row>
            <Row className={'py-3 border-bottom'}>
                <Col xs={2} className={'p-2'}>
                    Email
                </Col>
                <Col>
                    <EditText 
                    name='email'
                    className='w-100'
                    placeholder='you@example.com'
                    value={this.state.contact.email}
                    type='email'
                    onChange={(v) => this.handleChange('email', v)}
                    onSave={this.handleSave}
                />
                    </Col>
                </Row>
            <Row className={'py-3 border-bottom'}>
                <Col xs={2} className={'p-2'}>
                    Phone
                </Col>
                <Col>
                    <EditText 
                    name='phone'
                    className='w-100'
                    placeholder='+1234567890'
                    value={this.state.contact.phone}
                    type='phone'
                    onChange={(v) => this.handleChange('phone', v)}
                    onSave={this.handleSave}
                />
                </Col>
            </Row>
            <Row className={'py-3 border-bottom'}>
                <Col xs={2}>
                    RISE ID
                </Col>
                <Col>
                    {this.state.contact.cid}
                </Col>
            </Row>
            <Row className={'py-3 border-bottom'}>
                <Col xs={2}>
                    Credibility
                </Col>
                <Col>
                    {this.state.contact.credibility}
                </Col>
            </Row>
                </Col>
            </Row>
        );
    }
}

export default ContactsScreen;
