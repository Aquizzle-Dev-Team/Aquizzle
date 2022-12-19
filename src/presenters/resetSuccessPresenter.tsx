import { useSelector } from 'react-redux';
import { getAuth, signOut } from '@firebase/auth';
import { RootState } from '../app/store';
import { firebaseApp } from '../firebaseConfig';
import ResetSuccessView from '../views/resetSuccessView';

export default function ResetSuccess() {
    const resetType = useSelector((state: RootState) => state.reset.value.type);
    const auth = getAuth(firebaseApp);

    return <ResetSuccessView
        resetType={resetType}
        continueClicked={() => {
            if (resetType === 'email')
                signOut(auth);
            window.location.hash = '#auth';
        }}
    />;
};
