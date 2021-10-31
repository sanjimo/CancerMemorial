import React, {useEffect,useState} from 'react';
import {useParams} from 'react-router';
import { NavLink } from 'react-router-dom';
import useTreatment from '../../../../src/hooks/useTreatment';



const SingleTreatment = () => {
    const {treatmentId} = useParams();
    const [treatment] =useTreatment();
    const [details, setDetails]= useState({});

    useEffect(()=>{
        const matchTreatments = treatment.find(singleTreatment=>singleTreatment.id===treatmentId);
        setDetails(matchTreatments);
    },[treatmentId,treatment])

    return (
        <div className="card border-0 shadow h-100 m-5">
            <img src={details?.img} className="card-img-top w-50 mx-auto mt-3" alt=""/>
            <div className="card-body">
                <h5 className="card-title text-secondary">{details?.name}</h5>
                <p className="card-text text-start text-secondary">{details?.description}</p>
                <NavLink
                to="/appointment" type="button"
                className="btn btn-secondary text-decoration-none text-white fs-6 fw-bold m-1"
                >Appointment</NavLink>
            </div>
       </div>
    );
};

export default SingleTreatment;