import { getAuth, signOut } from '@firebase/auth';
import { useState } from 'react';
import { firebaseApp } from '../firebaseConfig';
import AccountView from '../views/accountView';
import setAuthStateActions from '../authStateListener';

export default function Account() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const auth = getAuth(firebaseApp);

    setAuthStateActions((user) => {
        setUsername(user.displayName);
        setEmail(user.email);
    }, () => {});

    return <AccountView
        username={username ? username : 'not loaded'}
        email={email ? email : 'not loaded'}
        changeUsername={() => {window.location.hash='#setusername'}}
        changeEmail={() => {window.location.hash='#changeemail'}}
        logout={() => {signOut(auth).then(() => {
            window.location.hash='#homepage';
        })}}
    />;
};
