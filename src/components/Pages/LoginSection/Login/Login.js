import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container'>
            <div className='w-50 mx-auto'>
                <h2 style={{ textAlign: 'center', color: "#dcf715", margin: '20px 0px' }}>Please Login</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control name='email' type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>

                    <button type="submit" className='bookBtn text-dark' >Login</button>

                </Form>


                <p>Forget Password?<button style={{ color: '#c5d912', outline: 'none', backgroundColor: '#fff', border: 'none' }} className=' pe-auto text-decoration-none' >Reset Password</button> </p>

                <p>New to Decor Canvas? <Link to="/register" style={{ color: '#c5d912' }} className='pe-auto text-decoration-none' > Register Here</Link> </p>
            </div>

        </div>
    );
};

export default Login;