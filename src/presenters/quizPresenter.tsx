import { RootState } from '../app/store';
import QuizView from '../views/quizView';
import {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addQuestions } from '../features/questionSlice';
import {getQuestions} from '../quizSource'
import { increment, initialPointsValue } from '../features/counter/pointsSlice';
import { decrementHealthBar, initialHealthBarValue} from '../features/healthBarSlice';


export default
function Quiz(){

    const [question, setQuestion] = useState("No question generated.");
    const [answer1, setAnswer1] = useState("Answer 1");
    const [answer2, setAnswer2] = useState("Answer 2");
    const [answer3, setAnswer3] = useState("Answer 3");
    const [answer4, setAnswer4] = useState("Answer 4");
    const [index, setindex] = useState(1);
    
    const points = useSelector((state: RootState) => state.points.value)
    const healthBar = useSelector((state: RootState) => state.healthBar.value)
    const allQuestions = useSelector((state: RootState) => state.questions.value)
    const chosenQuiz = useSelector((state: RootState) => state.selectedQuiz.value);


    const dispatch = useDispatch();

    const handleAddQuestions = () => {  
        getQuestions({"tags": chosenQuiz}).then((result) => {
            setQuestion(result[0].question);
            setAnswer1(result[0].answers.answer_a);
            setAnswer2(result[0].answers.answer_b);
            setAnswer3(result[0].answers.answer_c);
            setAnswer4(result[0].answers.answer_d);
            dispatch(addQuestions(result));
        }) 
        dispatch(initialPointsValue(0))
        dispatch(initialHealthBarValue(3))
    }

    const updateQuestionsOnClick = () =>{
        if(index < allQuestions.length - 1)
            setindex(prevCount => prevCount + 1)
        
        setQuestion(allQuestions[index].question);
        randomizeCorrectAnswer();
    }

    const randomizeCorrectAnswer = () =>{
        let A = allQuestions[index].answers.answer_a
        let B = allQuestions[index].answers.answer_b
        let C = allQuestions[index].answers.answer_c
        let D = allQuestions[index].answers.answer_d
        let randomAnswer = [A, B, C, D]

        let currIndex = randomAnswer.length, randIndex;
        // While there remain elements to shuffle.
        while (currIndex != 0) {
        
            // Pick a remaining element.
            randIndex = Math.floor(Math.random() * currIndex);
            currIndex--;
        
            // And swap it with the current element.
            [randomAnswer[currIndex], randomAnswer[randIndex]] = [
            randomAnswer[randIndex], randomAnswer[currIndex]];
        }

        setAnswer1(randomAnswer[0]);
        setAnswer2(randomAnswer[1]);
        setAnswer3(randomAnswer[2]);
        setAnswer4(randomAnswer[3]);
    }

    const clickedOnRightAnswerHandler = () =>{
        updateQuestionsOnClick();
        dispatch(increment())
    }    

    const clickedOnWrongAnswerHandler = () =>{
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
            onAddQuestions={handleAddQuestions}
            onClickAnswer = {clickedOnAnswerHandler}
            points = {points}
            healthBar = {healthBar}
            answer1 = {answer1}
            answer2 = {answer2}
            answer3 = {answer3}
            answer4 = {answer4}
        />
    )
}