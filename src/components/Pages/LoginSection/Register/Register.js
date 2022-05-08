import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import ThirdPartyLogin from '../ThirdPartyLogin/ThirdPartyLogin';
import Loading from '../../../Shared/Loading/Loading';

const Register = () => {
    const [errMsg, setErrMsg] = useState("");
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    // creating new user with email and password
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, nameUpdating] = useUpdateProfile(auth);


    if (loading || nameUpdating) {
        return <Loading></Loading>
    }

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password !== confirmPassword) {
            setErrMsg("password doesn't match with confirm password");
            return;
        }
        else {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
            alert('Updated profile');
            console.log('register clicked')
            navigate('/home');
        }

    }




    return (
        <div>
            <div className='register-form'>
                <h2 style={{ textAlign: 'center', color: "#dcf715", margin: '20px 0px' }} className="text-center">Please Register</h2>
                <Form onSubmit={handleRegister} className='w-50 mx-auto my-3'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="text" name='name' placeholder="Enter Name here" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="email" name='email' placeholder="Enter Mail Address here" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control type="password" name='password' placeholder="Enter Your Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control name='confirmPassword' type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" name='terms' label="Agree All Terms and Condition of Decor Canvas" />
                    </Form.Group>
                    <button className='bookBtn text-dark'>Register</button>
                </Form>
                <p className='text-danger my-3'>{error || errMsg}</p>
                <p className='text-center'>Already have an account? <Link to="/login" style={{ color: '#c5d912' }} className='pe-auto text-decoration-none' onClick={navigateLogin}>Login</Link> </p>
            </div>
            <ThirdPartyLogin></ThirdPartyLogin>
        </div>
    );
};

export default Register;


// authUser
// T8eM7XnpthrLGT8K