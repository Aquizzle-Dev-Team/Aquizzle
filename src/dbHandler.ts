import { getDatabase, ref, get, child, push, set } from '@firebase/database';
import { PerformedQuiz } from './features/performedQuizSlice';
import { firebaseApp } from './firebaseConfig';

const db = getDatabase(firebaseApp);

function getQuizInfoFromDBData(fetchedQuizes, dbData) {
    Object.keys(dbData).forEach((element: string) => {
        if (element === 'quizInfo') {
            const quizInfo = dbData[element];
            fetchedQuizes.push(quizInfo);
        }
        else if (typeof dbData[element] === 'object' && dbData[element] !== null)
            getQuizInfoFromDBData(fetchedQuizes, dbData[element]);
    });
}

export async function fetchPerformedQuizzesFromDB(): Promise<PerformedQuiz[]> {
    const fetchedQuizes = [];

    try {
        const snapshot = await get(child(ref(db), 'users/'));
        if (snapshot.exists()) {
            getQuizInfoFromDBData(fetchedQuizes, snapshot.val());
        }
    } catch (error) {}

    return fetchedQuizes;
}

export function storePerformedQuizInDB(dataPath, quizInfo) {
    const userRef = ref(db, dataPath);
    const newQuizRef = push(userRef);
    set(newQuizRef, { quizInfo });
}
