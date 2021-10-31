import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const Appointment = () => {
    return (
        <div className="m-2 vh-100">
            <h5 className="m-3 text-secondary fw-bold text-center">Create an Appointment</h5>
            <hr className="text-secondary w-25 mx-auto"/>
            <Form className="m-4 shadow p-3">
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="name" placeholder="name" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Phone Number
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="phone number" placeholder="Phone number" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 text-center">
                    <Col sm={{ span: 10, offset: 2 }}>
                       <Button className="btn btn-secondary rounded text-white" type="submit">Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Appointment;