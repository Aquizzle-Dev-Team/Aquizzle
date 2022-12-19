import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { fetchPerformedQuizzesFromDB } from "../dbHandler";
import LeaderboardView from "../views/leaderboardView";

export default
function Leaderboard(){
    const [quizzes, setQuizzes] = useState([]);
    const [quizFilter, changeQuizFilter] = useState('all');

    fetchPerformedQuizzesFromDB().then((quizzes) => {
       const quizzesSortedByScore = quizzes.sort((a, b) => b.score - a.score);

        if (quizFilter !== 'all') {
            setQuizzes(quizzesSortedByScore.filter((quiz) => {
                return quiz.typeOfQuiz === quizFilter;
            }));
        }
        else
            setQuizzes(quizzesSortedByScore);
    });
    /* const [filteredQuiz, changeFilteredQuiz] = useState(quizzes) */

    const quizToShow = (e:any) => {
        
        let quizSortedByScore = [...quizzes].sort((a :any, b : any) => {return (b.score-a.score)})
            changeQuizFilter(e.target.value);
/*         if (e.target.value === "all") {
            changeFilteredQuiz(quizSortedByScore);
        } else {
        const quizFilter = (quiz) => {
            if(quiz.typeOfQuiz === e.target.value) return true;
        }
        changeFilteredQuiz(quizSortedByScore.filter(quizFilter));
        } */
    }

    return(
        <LeaderboardView 
            quizPerformed={quizzes}
            selectQuizToShow = {quizToShow}/>
    );
}