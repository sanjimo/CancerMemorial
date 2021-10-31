import React from 'react';
import { Row } from 'react-bootstrap';
import useDoctors from '../../../../src/hooks/useDoctors';
import ViewDoctors from '../ViewDoctors/ViewDoctors';


const Doctors = () => {
    const [doctors] = useDoctors();

    return (
        <div className="mt-2 mb-5">
            <h3 className="text-secondary fw-bold mt-4 mb-3">Our <span className="text-danger">Specialized</span> Doctors</h3>
            <hr className="text-secondary w-25 mx-auto"/>
            <Row xs={1} lg={3} className="g-1">
            {
                doctors.map(doctor=><ViewDoctors key={doctor.id} doctor={doctor}></ViewDoctors>)
            }
            </Row>
       </div>
    );
};

export default Doctors;