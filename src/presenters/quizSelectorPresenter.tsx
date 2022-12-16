import QuizSelectorView from '../views/quizSelectorView';
import { useDispatch} from "react-redux";
import { changeCurrentQuiz } from "../features/quizSelectorSlice"
import { changeTimeStamp } from '../features/timeStampSlice';

export default
function QuizSelector(){
    const dispatch = useDispatch();

    const quizPicker = (e: any) => {
        dispatch(changeCurrentQuiz(e.target.innerText.toLowerCase()));
        dispatch(changeTimeStamp(e.timeStamp));
        window.location.hash = "#quiz"
    }

    return(
    <QuizSelectorView
        onPickQuiz = {quizPicker}
    />
    )
}