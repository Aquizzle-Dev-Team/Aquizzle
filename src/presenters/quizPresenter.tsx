import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import QuizView from '../views/quizView';
import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { addQuestion } from '../features/questionSlice';
import {getQuestions} from '../quizSource'


export default
function Quiz(){

    const [question, setQuestion] = useState("No question generated.");
    
    const [answer1, setAnswer1] = useState("Answer 1");
    const [answer2, setAnswer2] = useState("Answer 2");
    const [answer3, setAnswer3] = useState("Answer 3");
    const [answer4, setAnswer4] = useState("Answer 4");


    const dispatch = useDispatch();

 

    const handleAddQuestion = () => {  
        getQuestions({"limit": 1, "tags": "javascript"}).then((result) => {
            setQuestion(result[0].question);
            setAnswer1(result[0].answers.answer_a);
            setAnswer2(result[0].answers.answer_b);
            setAnswer3(result[0].answers.answer_c);
            setAnswer4(result[0].answers.answer_d);
            
        })      
        dispatch(addQuestion(question));
    }

    const questions = useSelector(
        (state: RootState) => state.questions.value
        )

    return(
        <QuizView question={question}   
        handleAddQuestion={handleAddQuestion}
        answer1 = {answer1}
        answer2 = {answer2}
        answer3 = {answer3}
        answer4 = {answer4}/>
    )
}