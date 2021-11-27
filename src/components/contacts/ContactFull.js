import React from 'react';
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap'
import {EditText} from 'react-edit-text'

import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons';

import 'react-edit-text/dist/index.css'
import defaultAvatar from '../../assets/img/nophoto.png'

class ContactFull extends React.Component {
    constructor(props) {
        super(props);

        var avatar = defaultAvatar;

        if (this.props.contact.avatar)
            avatar = 'http://localhost:9090/ipfs/' + this.props.contact.avatar;

        this.state = {
            contact: props.contact,
            avatar: avatar,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleAvatarUpload = this.handleAvatarUpload.bind(this);
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

    async handleAvatarUpload(event) {
        let file = event.target.files[0];
        if (file) {
            let contact = await this.state.contact.uploadAvatar(file.stream());
            this.setState((state) => {
                return {
                    contact: contact,
                }
            });
        }
    }

    render() {
        return (
            <Card className={'m-0'}>
                <Row className={'g-0 bg-yellow'}>
                    <Col xs={4}>
                        <img 
                        className={'img-fluid rounded-start'}
                        src={this.state.contact.avatar_url}
                        />
                        <Form.Control 
                            ref='uploadAvatarBtn'
                            type='file'
                            variant='light'
                            className='d-none'
                            onChange={this.handleAvatarUpload}
                        />
                        <Button 
                            variant="light"
                            style={{
                                position: 'absolute',
                                bottom: '30px',
                                left: '30px',
                                background: 'rgba(200, 200, 200, 0.7)'
                            }}
                            className='rounded-pill'
                            onClick={() => this.refs.uploadAvatarBtn.click()}
                        >
                            <Icon icon={faCamera} className='mr-2' />
                                Edit Photo
                        </Button>
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
