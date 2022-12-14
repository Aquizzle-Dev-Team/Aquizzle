import { RootState } from '../app/store';
import QuizView from '../views/quizView';
import {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { increment } from '../features/counter/pointsSlice';
import { decrementHealthBar} from '../features/healthBarSlice';
import { setQuestion, setAnswerA, setAnswerB, setAnswerC, setAnswerD } from '../features/quizQuestionAnswerSlice';


export default
function Quiz(){

    const question = useSelector((state: RootState) => state.QnA.question)
    const answerA = useSelector((state: RootState) => state.QnA.answerA)
    const answerB= useSelector((state: RootState) => state.QnA.answerB)
    const answerC = useSelector((state: RootState) => state.QnA.answerC)
    const answerD = useSelector((state: RootState) => state.QnA.answerD)

    const [index, setindex] = useState(1);
    
    const points = useSelector((state: RootState) => state.points.value)
    const healthBar = useSelector((state: RootState) => state.healthBar.value)
    const allQuestions = useSelector((state: RootState) => state.questions.value)
    
    const dispatch = useDispatch();

    const updateQuestionsOnClick = () =>{
        if(index < allQuestions.length - 1)
            setindex(prevCount => prevCount + 1)
        
        dispatch(setQuestion(allQuestions[index].question))
        randomizeCorrectAnswer();
    }

    const randomizeCorrectAnswer = () =>{
        let A = allQuestions[index].answers.answer_a
        let B = allQuestions[index].answers.answer_b
        let C = allQuestions[index].answers.answer_c
        let D = allQuestions[index].answers.answer_d
        let randomAnswer = [A, B, C, D]

        let currIndex = randomAnswer.length, randIndex: number;
        while (currIndex != 0) {
            randIndex = Math.floor(Math.random() * currIndex);
            currIndex--;
            [randomAnswer[currIndex], randomAnswer[randIndex]] = [
            randomAnswer[randIndex], randomAnswer[currIndex]];
        }

        dispatch(setAnswerA(randomAnswer[0]));
        dispatch(setAnswerB(randomAnswer[1]));
        dispatch(setAnswerC(randomAnswer[2]));
        dispatch(setAnswerD(randomAnswer[3]));
    }

    const clickedOnRightAnswerHandler = () =>{
        updateQuestionsOnClick();
        dispatch(increment())
    }    

    const clickedOnWrongAnswerHandler = () =>{
        if(healthBar === 1)
            window.location.hash = "#homepage"
            
        updateQuestionsOnClick();
        dispatch(decrementHealthBar())
    }    

    const clickedOnAnswerHandler = (e: any) =>{

        if(e.target.innerText === allQuestions[index-1].answers.answer_a){
            clickedOnRightAnswerHandler();
        } else{
            clickedOnWrongAnswerHandler();
        }
    }

    return(
        <QuizView 
            question={question}   
            onClickAnswer = {clickedOnAnswerHandler}
            points = {points}
            healthBar = {healthBar}
            answer1 = {answerA}
            answer2 = {answerB}
            answer3 = {answerC}
            answer4 = {answerD}
        />
    )
}
