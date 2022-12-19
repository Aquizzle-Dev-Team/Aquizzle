import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import HistoryView from '../views/historyView'
import { firebaseApp } from '../firebaseConfig';
import { getAuth } from '@firebase/auth';
import { useState } from 'react';
import { fetchPerformedQuizzesFromDB } from '../dbHandler';

export default
function History(){
    const auth = getAuth(firebaseApp);
    const [quizzes, setQuizzes] = useState([]);
    const [quizFilter, changeQuizFilter] = useState('all');

    fetchPerformedQuizzesFromDB().then((quizzes) => {
       const quizzesByCurrentUserSortedByDate = quizzes.filter((quiz) => {
            return quiz.performedByuid === auth?.currentUser?.uid;
        }).reverse();

        if (quizFilter !== 'all') {
            setQuizzes(quizzesByCurrentUserSortedByDate.filter((quiz) => {
                return quiz.typeOfQuiz === quizFilter;
            }));
        }
        else
            setQuizzes(quizzesByCurrentUserSortedByDate);
    });

    const quizToShow = (e:any) => {
        changeQuizFilter(e.target.value);
/*         const quizSortedByDate = [...filteredQuiz].reverse();

        if (e.target.value === "all") {
            changeFilteredQuiz(quizSortedByDate);
        } else {
        const filterQuizByType = (quiz) => {
            if(quiz.typeOfQuiz === e.target.value) return true;
        }
        changeFilteredQuiz(quizSortedByDate.filter(filterQuizByType));
        } */

        
    }

    return(
    <HistoryView
        quizPerformed = {quizzes}
        selectQuizToShow = {quizToShow}
    />
    )
}