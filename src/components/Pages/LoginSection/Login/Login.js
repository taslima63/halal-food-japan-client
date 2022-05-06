import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import ThirdPartyLogin from '../ThirdPartyLogin/ThirdPartyLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // error message show
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} </p>
        </div>
    }
    const [sendPasswordResetEmail, sending, passError] = useSendPasswordResetEmail(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);

    }

    const navigateRegister = event => {
        navigate('/register');
    }

    return (
        <div className='container'>
            <div className='w-50 mx-auto'>
                <h2 style={{ textAlign: 'center', color: "#dcf715", margin: '20px 0px' }}>Please Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <button type="submit" className='bookBtn text-dark' >Login</button>

                </Form>


                <p>Forget Password?<button style={{ color: '#c5d912', outline: 'none', backgroundColor: '#fff', border: 'none' }} className=' pe-auto text-decoration-none' >Reset Password</button> </p>

                <p>New to Halal Food Japan? <Link to="/register" style={{ color: '#c5d912' }} className='pe-auto text-decoration-none' > Register Here</Link> </p>
            </div>
            <ThirdPartyLogin></ThirdPartyLogin>
        </div>
    );
};

export default Login;