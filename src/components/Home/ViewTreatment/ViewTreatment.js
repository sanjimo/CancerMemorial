import { NavLink } from 'react-router-dom';
import React from 'react';
import { Col } from 'react-bootstrap';



const ViewTreatment = (props) => {
    const {img,name,title,id} = props.t;

    return (
        <div className="mt-2 mb-2">
            <Col className="m-3 gx-4">
                <div className="card border-0 shadow h-100">
                    <img src={img} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title text-secondary">{name}</h5>
                        <p className="card-text text-start text-secondary">{title}</p>
                        <NavLink
                        to={`/singleTreatment/${id}`} type="button"
                        className="btn btn-secondary text-decoration-none text-white fs-6 fw-bold m-1"
                        >More Detail</NavLink>
                    </div>
                </div>
            </Col>
        </div>
    );
};

export default ViewTreatment;