import { getAuth, updateEmail } from '@firebase/auth';
import { useState } from 'react';
import { getMessageFromError } from '../authErrorMessageHandler';
import { firebaseApp } from '../firebaseConfig';
import ChangeEmailView from '../views/changeEmailView';

export default function ChangeEmail() {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    return <ChangeEmailView
        handleEmailChange={(e) => {
            setEmail(e.target.value);
        }}
        changeEmail={() => {
            if (email.length > 0) {
                updateEmail(getAuth(firebaseApp).currentUser, email).then(() => {
                    setErrorMessage('');
                    window.location.hash='#homepage';
                }).catch((rejectReason) => {
                    setErrorMessage(getMessageFromError(rejectReason.code));
                });
            }
            else
                setErrorMessage('You must enter an email!');
        }}
    errorMessage={errorMessage}
    />;
};
