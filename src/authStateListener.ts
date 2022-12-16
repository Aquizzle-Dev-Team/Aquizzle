import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { firebaseApp } from './firebaseConfig';

export default function setAuthStateActions(loggedInFunction: CallableFunction, loggedOutFunction: CallableFunction): void {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user) => {
        if (user)
            loggedInFunction(user);
        else
            loggedOutFunction();
    });
}
