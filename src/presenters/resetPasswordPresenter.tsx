import { getAuth, confirmPasswordReset } from '@firebase/auth';
import { sha256 } from 'js-sha256';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { firebaseApp } from '../firebaseConfig';
import ResetPasswordView from '../views/resetPasswordView';

export default function SetUsername() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const auth = getAuth(firebaseApp);
    const resetCode = window.location.hash.split('oobCode=')[1];

    return <ResetPasswordView
        handlePasswordChange={(e) => {
            setPassword(e.target.value);
        }}
        handleConfirmPasswordChange={(e) => {
            setConfirmPassword(e.target.value);
        }}
        resetPassword={() => {
            if (password === confirmPassword) {
                if (password.length >= 6)
                    confirmPasswordReset(auth, resetCode, sha256(password)).then(() => {
                        window.location.hash='#resetsuccess';
                    }).catch((rejectReason) => {
                        setErrorMessage('This password reset link has expired, request a new one to continue.');
                    })
                else
                    setErrorMessage('Your password must be at least 6 characters long.');
            }
            else
                setErrorMessage('The passwords do not match.');
        }}
        errorMessage={errorMessage}
    />;
}
