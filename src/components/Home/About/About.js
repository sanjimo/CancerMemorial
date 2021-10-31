import React from 'react';
import { Image } from 'react-bootstrap';
import image1 from '../../../images/about1.jpg';

const About = () => {
    return (
        <div className="mt-2 mb-5 container w-100">
           <div className="row">
                <div className="mt-5 col-lg-6 col-sm-12">
                    <Image variant="top" src={image1} className="img-fluid"  rounded/>
                </div>
                <div className="mt-3 col-lg-6 col-sm-12">
                    <h5 className="text-center text-secondary fs-5"><span className="text-danger">Cancer</span>Memorial</h5>
                    <hr className="text-secondary" />
                    <p className="text-start text-secondary">In 1945, philanthropist Alfred P. Sloan, Jr., and engineer Charles F. Kettering founded the Cancer Memorial (CM) on Saskatoon City’s Upper East Side, with the vision of harnessing the latest research techniques in order to conquer cancer. This goal endures today.<br/>
                    As the experimental research arm of Memorial Cancer Center, CM is focused on the pursuit of fundamental scientific discoveries. The institute’s philosophy is that the best way to fuel progress in cancer treatment is to support scientists as they explore the unknown.</p>
                    <h6 className="text-start text-secondary">CM is distinguished by its:</h6>
                    <li className="text-start text-secondary">world-renowned faculty</li>
                    <li className="text-start text-secondary">cutting-edge technological resources</li>
                    <li className="text-start text-secondary">relatively small size and open academic community</li>
                    <li className="text-start text-secondary">extensive collaboration between scientists and clinicians </li>
                </div>
           </div>
        </div>
    );
};

export default About;