import '../css/quiz.css';
import React, {useState} from 'react';

//class={(state === props.hash)? "show" : "hide"

export default function QuizView(props: any){

    return(
            <div className="quizDiv">
                <h1 className="question">{props.question}</h1>
                <button className="answer1">{props.answer1}</button>
                <button className="answer2">{props.answer2}</button>
                <button className={props.answer3? "answer3" : "hideButton"}>{props.answer3}</button>
                <button className={props.answer4? "answer4" : "hideButton"}>{props.answer4}</button>
                <button className="generateButton" onClick={props.handleAddQuestion}>Generate question</button>
            </div>
    )
}