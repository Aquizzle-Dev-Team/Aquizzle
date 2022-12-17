import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import HistoryView from '../views/historyView'
import { firebaseApp } from '../firebaseConfig';
import { getAuth } from '@firebase/auth';
import { useState } from 'react';

export default
function History(){
    const auth = getAuth(firebaseApp);
    const quiz = useSelector((state: RootState) => state.PerformedQuiz.value).filter((quiz) => {
        if(quiz.performedByuid === auth?.currentUser.uid) return true;
    });
    const [filteredQuiz, changeFilteredQuiz] = useState(quiz)

    //console.log(auth?.currentUser.displayName);
    


    const quizToShow = (e:any) => {

        let quizSortedByScore = [...quiz].sort((a :any, b : any) => {return (b.score-a.score)})

        if (e.target.value === "all") {
            changeFilteredQuiz(quizSortedByScore);
        } else {
        const filterQuizByType = (quiz) => {
            if(quiz.typeOfQuiz === e.target.value) return true;
        }
        changeFilteredQuiz(quizSortedByScore.filter(filterQuizByType));
        }

        
    }

    return(
    <HistoryView
        quizPerformed = {filteredQuiz}
        selectQuizToShow = {quizToShow}
    />
    )
}