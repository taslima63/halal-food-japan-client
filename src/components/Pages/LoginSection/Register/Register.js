import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center', color: "#dcf715", margin: '20px 0px' }}>Please Register</h2>
            <Form className='w-50 mx-auto my-3'>
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
                    <Form.Check type="checkbox" name='terms' label="Agree All Terms and Condition of Decor Canvas" />
                </Form.Group>
                <button className='bookBtn text-dark'>Register</button>
            </Form>
            <p className='text-danger my-3'></p>
            <p>Already have an account? <Link to="/login" style={{ color: '#c5d912' }} className='pe-auto text-decoration-none' >Login</Link> </p>
        </div>
    );
};

export default Register;


// authUser
// T8eM7XnpthrLGT8K