import { useDispatch } from 'react-redux';
import { setResetType, setResetCode } from '../features/resetSlice';

export default function Reset() {
    const dispatch = useDispatch();

    const typeFromURL = window.location.hash.split('mode=').pop().split('&')[0];
    let type = '';
    if (typeFromURL === 'recoverEmail')
        type = 'email';
    else if (typeFromURL === 'resetPassword')
        type = 'password';
    const oobCode = window.location.hash.split('oobCode=').pop().split('&')[0];

    if (type && oobCode) {
        if (type === 'password' || type === 'email')
            dispatch(setResetType(type));
        dispatch(setResetCode(oobCode));

        switch (type) {
            case 'password':
                window.location.hash = `#resetpassword?oobCode=${oobCode}`;
                break;
            case 'email':
                window.location.hash = `#resetemail?oobCode=${oobCode}`;
                break;
        }
    }

    return <div/>;
}
