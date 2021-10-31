import React from 'react';
import { Col, Row } from 'react-bootstrap';

const CancerTypes = () => {
    return (
        <div className="mb-5 mt-3">
            <h5>Few Types of <span className="text-danger fw-bold">Cancer</span></h5>
            <hr className="text-secondary w-25 mx-auto"/>
            <Row md={2} xs={1} className="g-4 shadow m-2">
                <Col className="fw-bold">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item  list-group-item-dark text-dark ">AIDS-Associated Cancers</li>
                        <li class="list-group-item text-primary ">Adrenal Tumors</li>
                        <li class="list-group-item  list-group-item-dark text-dark ">Anal Cancer</li>
                        <li class="list-group-item text-primary ">Bladder Cancer</li>
                        <li class="list-group-item  list-group-item-dark text-dark ">Bone Cancer</li>
                        <li class="list-group-item text-primary ">Brain Tumors & Brain Cancer</li>
                        <li class="list-group-item  list-group-item-dark text-dark ">Breast Cancer</li>
                        <li class="list-group-item text-primary ">Colon Cancer</li>
                        <li class="list-group-item  list-group-item-dark text-dark ">Gynecologic Cancer</li>
                        <li class="list-group-item text-primary ">Kidney Cancer</li>
                   </ul>
                </Col>
                <Col className="fw-bold">
                    <ul class="list-group list-group-flush ">
                        <li class="list-group-item  list-group-item-dark text-dark ">Leukemia and Other Blood Cancers</li>
                        <li class="list-group-item text-primary ">Liver Cancer</li>
                        <li class="list-group-item list-group-item-dark text-dark ">Lung Cancer</li>
                        <li class="list-group-item text-primary ">Male Breast Cancer</li>
                        <li class="list-group-item list-group-item-dark text-dark ">Ovarian Cancer</li>
                        <li class="list-group-item text-primary ">Rare Blood Disorders</li>
                        <li class="list-group-item  list-group-item-dark text-dark ">Skin Cancer</li>
                        <li class="list-group-item text-primary ">Stomach (Gastric) Cancer</li>
                        <li class="list-group-item  list-group-item-dark text-dark ">Thyroid Cancer</li>
                        <li class="list-group-item text-primary ">Uterine (Endometrial) Cancer</li>
                   </ul>
                </Col>
            </Row>
        </div>
    );
};

export default CancerTypes;