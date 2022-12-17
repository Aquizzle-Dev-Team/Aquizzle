import { RootState } from '../app/store';
import QuizView from '../views/quizView';
import {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { increment, initialPointsValue} from '../features/counter/pointsSlice';
import { decrementHealthBar, initialHealthBarValue} from '../features/healthBarSlice';
import { setQuestion, setAnswerA, setAnswerB, setAnswerC, setAnswerD } from '../features/quizQuestionAnswerSlice';
import { resetQuestionsState } from '../features/questionSlice';
import { addPerformedQuiz } from '../features/performedQuizSlice';
import { firebaseApp } from '../firebaseConfig';
import { getAuth } from '@firebase/auth';


export default
function Quiz(){

    const question = useSelector((state: RootState) => state.QnA.question);
    const answerA = useSelector((state: RootState) => state.QnA.answerA);
    const answerB = useSelector((state: RootState) => state.QnA.answerB);
    const answerC = useSelector((state: RootState) => state.QnA.answerC);
    const answerD = useSelector((state: RootState) => state.QnA.answerD);

    const [index, setindex] = useState(1);

    const promiseState = useSelector((state: RootState) => state.promiseState.value);

    const points = useSelector((state: RootState) => state.points.value);
    const healthBar = useSelector((state: RootState) => state.healthBar.value);
    const allQuestions = useSelector((state: RootState) => state.questions.value);
    const chosenQuiz = useSelector((state: RootState) => state.selectedQuiz.value);
    const auth = getAuth(firebaseApp);
    
    let currentDate = new Date();
    
    const dispatch = useDispatch();

    const updateQuestionsOnClick = () =>{
        if(index < allQuestions.length - 1)
            setindex(prevCount => prevCount + 1)
        
        dispatch(setQuestion(allQuestions[index].question));
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
        if(healthBar === 1){

            let date = currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear();
            let time = currentDate.getHours() + ":" + currentDate.getMinutes();
            const quizInfo = {
                typeOfQuiz: chosenQuiz,
                date: date,
                time: time,
                performedByuid: auth.currentUser.uid,
                performedByName: auth.currentUser.displayName,
                score: points
            }
            dispatch(addPerformedQuiz(quizInfo));

            window.location.hash = "#death"

            dispatch(resetQuestionsState())
        
            dispatch(setQuestion("You have lost!"))
            dispatch(setAnswerA(""));
            dispatch(setAnswerB(""));
            dispatch(setAnswerC(""));
            dispatch(setAnswerD(""));
            dispatch(initialHealthBarValue(0))
        } else{   
            updateQuestionsOnClick();
            dispatch(decrementHealthBar())
        }
    }    

    const clickedOnAnswerHandler = (e: any) =>{

        if(e.target.innerText === allQuestions[index-1].answers.answer_a){
            clickedOnRightAnswerHandler();
        } else{
            clickedOnWrongAnswerHandler();
        }
    }

    return(
    <div>{promiseState ?
    <img width = "10%" src="https://i.gifer.com/XOsX.gif"/>
            : <QuizView 
        question={question}   
        onClickAnswer = {clickedOnAnswerHandler}
        points = {points}
        healthBar = {healthBar}
        answer1 = {answerA}
        answer2 = {answerB}
        answer3 = {answerC}
        answer4 = {answerD} /> }
    </div>
    )
}