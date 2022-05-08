import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const RequiredAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading) {

        return <Loading></Loading>;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    console.log(user);
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return (
            <div>
                <h3 className='text-danger'>Your Email is not verified</h3>
                <h5 className='text-success'> Please verify your email address</h5>
                <button className='btn btn-primary'
                    onClick={async () => {
                        await sendEmailVerification();
                        toast('Sent email');
                    }}
                >
                    Verify email
                </button>
            </div>
        );
    };
    return children;
};

export default RequiredAuth;