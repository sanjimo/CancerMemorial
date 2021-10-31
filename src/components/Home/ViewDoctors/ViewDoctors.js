import React from 'react';
import { Col, Card } from 'react-bootstrap';


const ViewDoctors = (props) => {
    const {img,name,title,expertise,phone} = props.doctor;

    return (
        <div className="mt-2 mb-2">
            <Col className="m-3 gx-3">
                <Card className="h-100 border-0 shadow">
                    <Card.Img variant="top" src={img} className=" mx-auto d-block rounded-circle w-50 pt-2" alt="" />
                    <Card.Body>
                        <Card.Title className=" text-secondary">{name}</Card.Title>
                        <Card.Text className=" text-center text-danger">{title}</Card.Text>
                        <Card.Text className=" text-start text-secondary "><span className="fw-bold">Clinical Expertise :</span> {expertise}</Card.Text>
                        <Card.Text className=" text-center text-primary"><span className="text-secondary fw-bold">Contact :</span> <i className="fas fa-phone-alt text-danger"></i> {phone}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ViewDoctors;