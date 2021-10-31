import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import CancerTypes from '../CancerTypes/CancerTypes';
import Doctors from '../Doctors/Doctors';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div>
            <Banner/>
            <div>
                <Treatment></Treatment>
            </div>
            <div>
                <Doctors></Doctors>
            </div>
            <div>
                <CancerTypes></CancerTypes>
            </div>
            <div>
                <About></About>
            </div>
        </div>
    );
};

export default Home;