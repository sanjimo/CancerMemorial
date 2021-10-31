import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="mb-0 bg-secondary w-100">
           <Container>
                <Row className="mb-1">
                    <h5 className="text-light">--- Links ---</h5>
                    <Col className="d-flex-inline">
                        <NavLink to="/home" className="text-decoration-none text-light me-3"><i className="fas fa-home text-light"></i> Home</NavLink>
                        <NavLink to="/doctors" className="text-decoration-none text-light me-3"><i className="fas fa-user-md text-light"></i> Doctors</NavLink>
                        <NavLink to="/about" className="text-decoration-none text-light me-3"><i className="fab fa-leanpub text-light"></i> About</NavLink>
                        <NavLink to="/contact" className="text-decoration-none text-light"><i className="fas fa-phone-alt text-light"></i> Contact Us</NavLink>
                    </Col>
                </Row>
            </Container>
            <div className="bg-white text-secondary ps-2 pe-2">
                <Row className="pt-4 text-light" lg={3} xs={1}>
                    <Col className=" text-secondary text-start">
                        <h5 className="fw-bold"><span className="text-danger">Cancer</span>Memorial</h5>
                        <p>House # 6 , Road-2</p>
                        <p>Saskatoon , Saskatchewan</p>
                        <p>Canada</p>
                    </Col>
                    <Col className=" text-secondary text-center mb-3">
                        <h5 className="fw-bold">FOLLOW US</h5>
                        <div className="d-flex inline pt-2 ps-2 justify-content-center">
                            <i className="fab fa-facebook pe-2 ps-2 fs-2 text-secondary"></i>
                            <i className="fab fa-instagram pe-2 ps-2 fs-2 text-secondary"></i>
                            <i className="fab fa-youtube pe-2 ps-2 fs-2  text-secondary"></i>
                        </div>
                    </Col>
                    <Col className=" text-secondary text-end">
                        <h5 className="fw-bold">CONTACT US</h5>
                        <p className="text-primary"><i className="fas fa-phone-alt  text-secondary"></i> 833-319-1577</p>
                        <p className="text-primary"><i className="far fa-envelope  text-secondary"></i> cancer_memorial@gmail.com</p>
                        <p>24 hours (seven days a week)</p>
                    </Col>
                </Row>
            </div>
            <Container>
                <Row className="mt-1">
                    <Col><small className="text-light">Copyright <i className="far fa-copyright text-light"></i> 2021 by CancerMemorial.</small></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;