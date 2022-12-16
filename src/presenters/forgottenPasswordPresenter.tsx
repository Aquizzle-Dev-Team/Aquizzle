import { getAuth, sendPasswordResetEmail } from '@firebase/auth';
import { useState } from 'react';
import { firebaseApp } from '../firebaseConfig';
import ForgottenPasswordView from '../views/forgottenPasswordView';

export default function SetUsername() {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const auth = getAuth(firebaseApp);

    return <ForgottenPasswordView 
        handleEmailChange={(e) => {
            setEmail(e.target.value);
        }}
        sendPasswordResetEmail={async () => {
            let emailSent = false;
            if (email.length > 0) {
                try {
                    await sendPasswordResetEmail(auth, email);
                    setErrorMessage('');
                    emailSent = true;
                } catch(rejectReason) {
                    if (rejectReason.code === 'auth/user-not-found')
                        setErrorMessage('There is no user with that email address.');
                }
            }
            else
                setErrorMessage('Please enter a valid email address.');
            return emailSent;
        }}
        errorMessage={errorMessage}
    />;
};
