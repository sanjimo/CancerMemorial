import React from 'react';
import { Row } from 'react-bootstrap';
import useTreatment from '../../../../src/hooks/useTreatment';
import ViewTreatment from '../ViewTreatment/ViewTreatment';


const Treatment = () => {
    const [treatment] = useTreatment();

    return (
        <div className="mt-2 mb-5">
            <h3 className="text-secondary fw-bold mt-4 mb-3">Our <span className="text-danger">Cancer</span> Treatments</h3>
            <hr className="text-secondary w-25 mx-auto"/>
            <Row xs={1} md={3} className="g-1">
            {
                treatment.map(t=><ViewTreatment key={t.id} t={t}></ViewTreatment>)
            }
            </Row>
       </div>
    );
};

export default Treatment;