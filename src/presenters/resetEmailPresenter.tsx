import { useSelector } from 'react-redux';
import { getAuth, applyActionCode } from '@firebase/auth';
import { RootState } from '../app/store';
import { firebaseApp } from '../firebaseConfig';
import { useState } from 'react';

export default function ResetEmail() {
    const auth = getAuth(firebaseApp);
    const code = useSelector((state: RootState) => state.reset.value.code);
    const [, rerender] = useState({});

    if (window.location.hash.split('?')[0] === '#resetemail') {
        applyActionCode(auth, code).then(() => {
            window.location.hash = '#resetsuccess';
        }).catch((error) => {});
    }

    return <div>
        <img width = "10%" src="https://i.gifer.com/XOsX.gif"/>
    </div>;
}
