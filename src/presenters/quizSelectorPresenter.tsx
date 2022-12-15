import { RootState } from '../app/store';
import {useEffect} from 'react';
import QuizSelectorView from '../views/quizSelectorView';
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentQuiz } from "../features/quizSelectorSlice"
import {getQuestions} from '../quizSource'
import { addQuestions, resetQuestionsState } from '../features/questionSlice';
import {initialPointsValue } from '../features/counter/pointsSlice';
import {initialHealthBarValue} from '../features/healthBarSlice';
import { setQuestion, setAnswerA, setAnswerB, setAnswerC, setAnswerD } from '../features/quizQuestionAnswerSlice';
import { changeTimeStamp } from '../features/timeStampSlice';

export default
function QuizSelector(){
    
    const chosenQuiz = useSelector((state: RootState) => state.selectedQuiz.value);
    const timeStamp = useSelector((state: RootState) => state.timeStamp.value);
    const dispatch = useDispatch();

    useEffect(() => {
        getQuestions({"tags": chosenQuiz}).then((result) => {
            dispatch(resetQuestionsState())
            dispatch(addQuestions(result));
        
            dispatch(setQuestion(result[0].question))
            dispatch(setAnswerA(result[0].answers.answer_a));
            dispatch(setAnswerB(result[0].answers.answer_b));
            dispatch(setAnswerC(result[0].answers.answer_c));
            dispatch(setAnswerD(result[0].answers.answer_d));
        })
        dispatch(initialPointsValue(0))
        dispatch(initialHealthBarValue(3))
    }, [timeStamp])

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