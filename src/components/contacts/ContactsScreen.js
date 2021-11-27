import React from 'react';
import {Row, Col} from 'react-bootstrap'
import TreeView from 'react-treeview'
import {Tree, TreeElement}  from '../tree'
import ContactFull from './ContactFull'
//import GroupList from './GroupList'
import {getListByItemIds} from '../../utils'
import {Contact} from 'risejs'



class ContactsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentContact: undefined,
            currentGroup: undefined,
        }
        Contact.me().then((me) => this.setState({
            currentContact: me,
            me: me,
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
        console.log(group);
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


    renderRight() {
        if (this.state.currentContact != undefined)
            return (<ContactFull contact={this.state.currentContact} />);
        //else
        //    return (<GroupList group={this.state.currentGroup} />);
    }

    render() {
        // view contacts of selected Group or All contacts:
        return(
            <Row>
                <Col xs={4} className='border-right full-height'>
                    <TreeElement
                    label="My profile"
                    active={this.state.currentContact && this.state.currentContact.cid == this.state.me.cid}
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
                        {this.renderRight()}
                    </Col>
                </Row>
        );
    }
}


export default ContactsScreen;
