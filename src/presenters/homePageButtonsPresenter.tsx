import { useState } from 'react';
import HomePageButtonsView from '../views/homePageButtonsView';

export default function HomePageButtons() {
    const [isLoggedIn, changeLoggedInState] = useState(false);

    const setAuthStateActions = require('../authStateListener').default;
    
    setAuthStateActions(() => {changeLoggedInState(true);},
                        () => {changeLoggedInState(false);});

    return <HomePageButtonsView
        handleAuthClick={ () => {
            if (isLoggedIn)
                window.location.hash = '#account';
            else
                window.location.hash = '#auth';
        }}
        authStateText={isLoggedIn ? 'My Account' : 'Login / Sign Up'}
    />;
}
