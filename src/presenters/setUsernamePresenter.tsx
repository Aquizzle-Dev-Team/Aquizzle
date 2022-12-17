import { getAuth, updateProfile } from '@firebase/auth';
import { useState } from 'react';
import { firebaseApp } from '../firebaseConfig';
import SetUsernameView from '../views/setUsernameView';

export default function SetUsername() {
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    return <SetUsernameView 
        handleUsernameChange={(e) => {
            setUsername(e.target.value);
        }}
        setUsername={() => {
            if (username.length > 0) {
                updateProfile(getAuth(firebaseApp).currentUser, {
                    displayName: username
                });
                setErrorMessage('');
                window.location.hash='#account';
            }
            else
                setErrorMessage('You must enter a username.');
        }}
        errorMessage={errorMessage}
    />;
};
