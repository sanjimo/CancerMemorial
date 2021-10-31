import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import initializeAuthentication from '../../../Firebase/firebase.init';
import { useHistory, useLocation } from 'react-router-dom';

initializeAuthentication();

const Login = () => {
    const auth = getAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/home";

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError("Password must contain at least 2 uppercase!");
            return;
        }

        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password);
        }

    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (
        <div className='w-50 mx-auto m-5'>
            <Form onSubmit={handleRegistration}>
                <h3 className="text-secondary">{ !isLogin ? 'Create an Account' : 'Login'}</h3>
                {!isLogin && <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label text-secondary">Name</label>
                    <div className="col-sm-10">
                        <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="text-secondary col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" placeholder="Your Email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label text-secondary">Password</label>
                    <div className="col-sm-10">
                        <input type="password" onBlur={handlePasswordChange} className="form-control" placeholder="Your Password" id="inputPassword3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-6 offset-sm-6 mx-auto m-0">
                        <div className="form-check m-0">
                            <input onChange={toggleLogin} className="form-check-input me-0" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label  text-secondary ms-0" htmlFor="gridCheck1">
                            {!isLogin ? 'Already have an account?' :'New to Cancer Memorial?'}
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger fs-6 mx-start">{error}</div>
               <div>
                <button
                type="submit"
                className="btn btn-secondary ps-5 pe-5 text-light mb-1 mt-1"
                >{isLogin?'Login':'Register'}</button>
               </div>
            </Form>
            <div>
               <button
               onClick={ handleGoogleLogIn }
               className="m-1 btn btn-danger text-light  mx-auto"
               ><i className="fab fa-google text-light mb-2"></i> Google Sign In</button>
            </div>

        </div>
    );
};

export default Login;