import { RootState } from '../app/store';
import QuizView from '../views/quizView';
import {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { increment, initialPointsValue} from '../features/counter/pointsSlice';
import { decrementHealthBar, initialHealthBarValue} from '../features/healthBarSlice';
import { setQuestion, setAnswerA, setAnswerB, setAnswerC, setAnswerD, setAnswerE, setAnswerF } from '../features/quizQuestionAnswerSlice';
import { addQuestions, resetQuestionsState } from '../features/questionSlice';
import { addPerformedQuiz } from '../features/performedQuizSlice';
import { firebaseApp } from '../firebaseConfig';
import { getAuth } from '@firebase/auth';
import { incrementIndex, setIndex } from '../features/indexSlice';
import { addPromiseState } from '../features/promiseStateSlice';
import { getQuestions } from '../quizSource';


export default
function Quiz(){

    const question = useSelector((state: RootState) => state.QnA.question)
    const answerA = useSelector((state: RootState) => state.QnA.answerA)
    const answerB= useSelector((state: RootState) => state.QnA.answerB)
    const answerC = useSelector((state: RootState) => state.QnA.answerC)
    const answerD = useSelector((state: RootState) => state.QnA.answerD)
    const answerE = useSelector((state: RootState) => state.QnA.answerE)
    const answerF = useSelector((state: RootState) => state.QnA.answerF)

    const index = useSelector((state: RootState) => state.index.value);

    const promiseState = useSelector((state: RootState) => state.promiseState.value);

    const points = useSelector((state: RootState) => state.points.value);
    const healthBar = useSelector((state: RootState) => state.healthBar.value);
    const allQuestions = useSelector((state: RootState) => state.questions.value);
    const auth = getAuth(firebaseApp);
    
    let currentDate = new Date();
    
    const chosenQuiz = useSelector((state: RootState) => state.selectedQuiz.value);
    const timeStamp = useSelector((state: RootState) => state.timeStamp.value);
    
    const dispatch = useDispatch();

    const updateQuestionsOnClick = () =>{
        if(index < allQuestions.length - 1)
            dispatch(incrementIndex())
        randomizeCorrectAnswer();
    }

    useEffect(() => {
        dispatch(addPromiseState(true));
        if(window.location.hash === "#quiz")
            getQuestions({"tags": chosenQuiz}).then((result) => {
                console.log(result)
                dispatch(addPromiseState(false));
                dispatch(resetQuestionsState())
                dispatch(setIndex(0))
                dispatch(addQuestions(result));

                dispatch(setQuestion(result[0].question))
                dispatch(setAnswerA(result[0].answers.answer_a));
                dispatch(setAnswerB(result[0].answers.answer_b));
                dispatch(setAnswerC(result[0].answers.answer_c));
                dispatch(setAnswerD(result[0].answers.answer_d));
                dispatch(setAnswerE(result[0].answers.answer_e));
                dispatch(setAnswerF(result[0].answers.answer_f));
            })

        dispatch(initialPointsValue(0))
        dispatch(initialHealthBarValue(3))    
    }, [timeStamp])

    const randomizeCorrectAnswer = () =>{
        let A = allQuestions[index + 1].answers.answer_a
        let B = allQuestions[index + 1].answers.answer_b
        let C = allQuestions[index + 1].answers.answer_c
        let D = allQuestions[index + 1].answers.answer_d
        let E = allQuestions[index + 1].answers.answer_e
        let F = allQuestions[index + 1].answers.answer_f
        let randomAnswer = [A, B, C, D, E, F]

        let currIndex = randomAnswer.length, randIndex: number;
        while (currIndex != 0) {
            randIndex = Math.floor(Math.random() * currIndex);
            currIndex--;
            [randomAnswer[currIndex], randomAnswer[randIndex]] = [
            randomAnswer[randIndex], randomAnswer[currIndex]];
        }

        dispatch(setQuestion(allQuestions[index + 1].question))
        dispatch(setAnswerA(randomAnswer[0]));
        dispatch(setAnswerB(randomAnswer[1]));
        dispatch(setAnswerC(randomAnswer[2]));
        dispatch(setAnswerD(randomAnswer[3]));
        dispatch(setAnswerE(randomAnswer[4]));
        dispatch(setAnswerF(randomAnswer[5]));
    }

    const clickedOnRightAnswerHandler = () =>{
        dispatch(increment());
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
            dispatch(setAnswerE(""));
            dispatch(setAnswerF(""));
            dispatch(initialHealthBarValue(0))
        } else{
            dispatch(decrementHealthBar())
        }
    }    

    function isCorrectAnswer(answer){
        const answers = allQuestions[index].answers;
        const correctAnswers = allQuestions[index].correct_answers;
        return correctAnswers[`${Object.keys(answers).find(key => answers[key] === answer)}_correct`] === "true" ? true : false;
    }

    const clickedOnAnswerHandler = (e: any) =>{
        if (isCorrectAnswer(e.target.innerText))
            clickedOnRightAnswerHandler();
        else
            clickedOnWrongAnswerHandler();
        
        if(index < allQuestions.length - 1){
            updateQuestionsOnClick()
        } else {
            window.location.hash = "#win"
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
        answer4 = {answerD}
        answer5 = {answerE}
        answer6 = {answerF} /> }
    </div>
    )
}