import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import ThirdPartyLogin from '../ThirdPartyLogin/ThirdPartyLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let errorElement;
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //  return to the page from where login page invoked
    if (user) {
        navigate(from, { replace: true });
    }


    const [sendPasswordResetEmail, sending, passError] = useSendPasswordResetEmail(auth);
    // error message show
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message || passError?.message} </p>
        </div>
    }

    //  return to the page from where login page invoked
    if (user) {
        navigate(from, { replace: true });
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    // password reset
    const resetPassword = async () => {
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email has been sent to reset passwword');
        } else {
            toast('Please enter your email address');
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);

    }

    return (
        <div className='container'>
            <div className='w-50 mx-auto'>
                <h2 style={{ textAlign: 'center', color: "#dcf715", margin: '20px 0px' }} className="text-center">Please Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <button type="submit" className='bookBtn text-dark' >Login</button>
                    <div className='my-2'>
                        {
                            errorElement
                        }
                    </div>
                </Form>


                <p>Forget Password?<button style={{ color: '#c5d912', outline: 'none', backgroundColor: '#fff', border: 'none' }} className=' pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>

                <p>New to Halal Food Japan? <Link to="/register" style={{ color: '#c5d912' }} className='pe-auto text-decoration-none' > Register Here</Link> </p>
            </div>
            <ThirdPartyLogin></ThirdPartyLogin>

        </div >
    );
};

export default Login;