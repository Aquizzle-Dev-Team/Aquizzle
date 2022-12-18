import { getDatabase, ref, get, child } from '@firebase/database';
import { firebaseApp } from './firebaseConfig';

export const fetchedQuizes = [];

function getQuizInfoFromDBData(dbData) {
    Object.keys(dbData).forEach((element: string) => {
        if (element === 'quizInfo') {
            const quizInfo = dbData[element];
            fetchedQuizes.push(quizInfo);
        }
        else if (typeof dbData[element] === 'object' && dbData[element] !== null)
            getQuizInfoFromDBData(dbData[element]);
    });
}

export function storeDataFromDB(attempt: number = 5) {
    if (attempt === 0)
        return;

    const dbRef = ref(getDatabase(firebaseApp));

    get(child(dbRef, 'users/')).then((snapshot) => {
        if (snapshot.exists()) {
            console.log('data fetched from db');
            getQuizInfoFromDBData(snapshot.val());
        } else {
            storeDataFromDB(attempt-1);
        }
        }).catch((error) => {
            console.error(error);
    });
}
