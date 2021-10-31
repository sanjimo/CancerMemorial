import React from 'react';


const Contact = () => {
    return (
        <div className="row mt-5 mb-5 g-4">
            <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="card h-150 shadow border-0">
                    <div className="card-body">
                        <h5 className="card-title text-secondary">General Inquires</h5>
                        <hr className="text-secondary"/>
                        <p className="card-text text-secondary">For general inquiries about CM, email :</p>
                        <p className="text-primary">cancer_memorial@gmail.com</p><br/>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="card h-150 shadow border-0">
                    <div className="card-body">
                        <h5 className="card-text text-secondary">Mailing Address</h5>
                        <hr className="text-secondary"/>
                        <p className="card-text text-secondary">Department of CM Administration</p>
                        <p className="card-text text-secondary">House # 6 , Road-2</p>
                        <p className="card-text text-secondary">Saskatoon , Saskatchewan , Canada</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="card h-150 shadow border-0">
                    <div className="card-body">
                       <h5 className="card-title text-secondary">Contact <span className="text-danger">Cancer</span>Memorial</h5>
                       <hr className="text-secondary"/>
                       <p className="card-text text-secondary">For general information, call <span className="text-primary">212-639-2000</span>, 24 hours a day, seven days a week.</p>
                       <p className="card-text text-secondary">To make an appointment, call <span className="text-primary">833-319-1577</span>, Monday through Friday between 8:30 am and 5:30 pm ET.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;