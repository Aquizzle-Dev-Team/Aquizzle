import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import LeaderboardView from "../views/leaderboardView";

export default
function Leaderboard(){
    const quiz = useSelector((state: RootState) => state.PerformedQuiz.value);
    const [filteredQuiz, changeFilteredQuiz] = useState(quiz)

    const quizToShow = (e:any) => {
        if (e.target.value === "all") {
            changeFilteredQuiz(quiz);
        } else {
        const quizFilter = (quiz) => {
            if(quiz.typeOfQuiz === e.target.value) return true;
        }
        changeFilteredQuiz(quiz.filter(quizFilter));
        }
    }

    return(
        <LeaderboardView 
            quizPerformed={filteredQuiz}
            selectQuizToShow = {quizToShow}/>
    );
}