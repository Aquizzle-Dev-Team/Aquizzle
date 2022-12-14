import QuizSelectorView from '../views/quizSelectorView';
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentQuiz } from "../features/quizSelectorSlice"


export default
function QuizSelector(){

    const dispatch = useDispatch();

    const quizPicker = (e: any) => {
        dispatch(changeCurrentQuiz(e.target.innerText.toLowerCase()));
        window.location.hash = "#quiz"
    }
    
    return(
    <QuizSelectorView
        onPickQuiz = {quizPicker}
    />
    )
}