import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap'
import {EditText} from 'react-edit-text'

import 'react-edit-text/dist/index.css'
import defaultAvatar from '../../assets/img/nophoto.png'

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
            <Card className={'m-0'}>
                <Row className={'g-0 bg-yellow'}>
                    <Col xs={4}>
                        <img 
                        className={'img-fluid rounded-start'}
                        src={defaultAvatar}
                    />
                        </Col>
                        <Col className={'p-2'}>
                            <Card.Body className={'p-1'}>
                                <Card.Title className={'p-2'}>
                                    <EditText 
                                    name='name'
                                    className='w-100'
                                    placeholder='Name Surname'
                                    value={this.state.contact.name}
                                    type='text'
                                    onChange={(v) => this.handleChange('name', v)}
                                    onSave={this.handleSave}
                                />
                                    </Card.Title>
                                    <Container fluid={true}>
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
                                                    <Row className={'py-3'}>
                                                        <Col xs={2}>
                                                            Credibility
                                                        </Col>
                                                        <Col>
                                                            {this.state.contact.credibility}
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
        );
    }
}

export default ContactFull;
