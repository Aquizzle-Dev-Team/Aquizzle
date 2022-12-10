import '../css/quiz.css';
import React, {useState} from 'react';

//class={(state === props.hash)? "show" : "hide"

export default function QuizView(props: any){

    return(
            <div className="quizDiv">
                <h1 className="question">{props.question}</h1>
                <button className="answer1" onClick = {props.onClickAnswerIncrement}>{props.answer1}</button>
                <button className="answer2" onClick = {props.onClickAnswerDecrement}>{props.answer2}</button>
                <button className={props.answer3? "answer3" : "hideButton"} onClick = {props.onClickAnswerIncrement}>{props.answer3}</button>
                <button className={props.answer4? "answer4" : "hideButton"} onClick = {props.onClickAnswerDecrement}>{props.answer4}</button>
                <button className="generateButton" onClick={props.onAddQuestion}>Generate question</button>
                <h1 className = "counter"> points {props.points}</h1>
                <h1 className = "lives">lives {props.lives}</h1>
            </div>
    )
}