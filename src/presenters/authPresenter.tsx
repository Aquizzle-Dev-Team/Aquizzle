import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
import { sha256 } from 'js-sha256';
import { useState } from 'react';
import { getMessageFromError } from '../authErrorMessageHandler';
import { firebaseApp } from '../firebaseConfig';
import AuthView from '../views/authView';

export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const auth = getAuth(firebaseApp);

    return <AuthView
        handleEmailChange={(e) => {
            setEmail(e.target.value);
        }}
        handlePasswordChange={(e) => {
            setPassword(e.target.value);
        }}
        emptyInputs={email.length === 0 || password.length === 0}
        login={(e) => {
            signInWithEmailAndPassword(auth, email, password.length >= 6 ? sha256(password) : password).then(() => {
                window.location.hash = '#homepage';
            }).catch((rejectReason) => {
                setErrorMessage(getMessageFromError(rejectReason.code));
            });
        }}
        signup={(e) => {
            createUserWithEmailAndPassword(auth, email, password.length >= 6 ? sha256(password) : password).then(() => {
                updateProfile(auth.currentUser, {
                    displayName: auth.currentUser.email
                });
                window.location.hash = '#setusername';
            }).catch((rejectReason) => {
                setErrorMessage(getMessageFromError(rejectReason.code));
            });
        }}
        errorMessage={errorMessage}
    />;
};
