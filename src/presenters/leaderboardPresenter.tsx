import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import LeaderboardView from "../views/leaderboardView";

export default
function Leaderboard(){
    const quiz = useSelector((state: RootState) => state.PerformedQuiz.value);
    const [filteredQuiz, changeFilteredQuiz] = useState(quiz)

    const quizToShow = (e:any) => {
        
        let quizSortedByScore = [...quiz].sort((a :any, b : any) => {return (b.score-a.score)})

        if (e.target.value === "all") {
            changeFilteredQuiz(quizSortedByScore);
        } else {
        const quizFilter = (quiz) => {
            if(quiz.typeOfQuiz === e.target.value) return true;
        }
        changeFilteredQuiz(quizSortedByScore.filter(quizFilter));
        }
    }

    return(
        <LeaderboardView 
            quizPerformed={filteredQuiz}
            selectQuizToShow = {quizToShow}/>
    );
}