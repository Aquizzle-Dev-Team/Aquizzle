import '../css/quiz.css';
import React, {useState} from 'react';

export default function QuizView(props: any){

    return(
            <div className="quizDiv">
                <h1 className="question">{props.question}</h1>
                <button className="answer1">{props.answer1}</button>
                <button className="answer2">{props.answer2}</button>
                <button className="answer3">{props.answer3}</button>
                <button className="answer4">{props.answer4}</button>
                <button className="generateButton" onClick={props.handleAddQuestion}>Generate question</button>
            </div>
    )
}