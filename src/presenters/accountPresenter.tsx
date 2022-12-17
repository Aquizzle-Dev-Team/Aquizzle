import { getAuth, signOut } from '@firebase/auth';
import { useState } from 'react';
import { firebaseApp } from '../firebaseConfig';
import AccountView from '../views/accountView';
import setAuthStateActions from '../authStateListener';

export default function Account() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const backgroundColors = ['yellow', 'blue', 'white', 'rgb(212, 212, 212)'];
    const backgroundImages = ['https://upload.wikimedia.org/wikipedia/en/6/62/Kermit_the_Frog.jpg', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg'];
    let backgroundColorIndex = 0;
    let backgroundImageIndex = 0;

    const auth = getAuth(firebaseApp);

    setAuthStateActions((user) => {
        setUsername(user.displayName);
        setEmail(user.email);
    }, () => {});

    return <AccountView
        changeColor={() => { 
            document.getElementById("Account").style.backgroundImage = "none";
            if (backgroundColorIndex > 3){
                backgroundColorIndex = 0;
                document.getElementById("Account").style.backgroundColor = backgroundColors[backgroundColorIndex++]
            }
            else{
                document.getElementById("Account").style.backgroundColor = backgroundColors[backgroundColorIndex++]
            }}}
        changeImage={() => {
            if (backgroundImageIndex > 1){
                backgroundImageIndex = 0;
                document.getElementById("Account").style.backgroundImage = "url(" + backgroundImages[backgroundImageIndex++] + ")";
            }
            else{
                document.getElementById("Account").style.backgroundImage = "url(" + backgroundImages[backgroundImageIndex++] + ")";
            }
        }}
        username={username ? username : 'not loaded'}
        email={email ? email : 'not loaded'}
        logout={() => {signOut(auth).then(() => {
            window.location.hash='#homepage';
        })}}
    />;
};
