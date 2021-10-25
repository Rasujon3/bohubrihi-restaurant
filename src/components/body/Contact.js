import React, { Component } from 'react';
import { Alert, Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import { baseUrl } from '../../redux/baseUrl';

class Contact extends Component {
    state = {
        alertShow: false,
        alertText: null,
        alertType: null
    }
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
            agree: false,
            contactType: 'Tel.',
            message: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange = (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event, values) => {
        // console.log(this.state);
        axios.post(baseUrl + 'feedback', values)
            .then(response => response.status)
            .then(status => {
                if (status === 201) {
                    this.setState({
                        alertShow: true,
                        alertText: "Submitted Successfully",
                        alertType: "success"
                    });
                    setTimeout(() => {
                        this.setState({
                            alertShow: false
                        })
                    }, 2000)
                }
            })
        event.preventDefault();
    }

    render() {
        document.title = "Contact";

        return (
            <div className="container">
                <div className="row row-container" style={{ paddingLeft: "20px", textAlign: "left" }}>

                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                        <Alert isOpen={this.state.alertShow} color={this.state.alertType}>{this.state.alertText}</Alert>
                    </div>
                    <div className="col-12 col-md-7">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="text" name="firstname" placeholder="First Name" value={this.state.firstname} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="text" name="lastname" placeholder="Last Name" value={this.state.lastname} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="tel" name="telnum" placeholder="Tel. Number" value={this.state.telnum} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="email" name="email" placeholder="Email" value={this.state.email} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input onChange={this.handleInputChange} type="checkbox" name="agree" checked={this.state.agree} />
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input onChange={this.handleInputChange} type="select" name="contactType" value={this.state.contactType} >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="textarea" name="message" value={this.state.message} ></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;