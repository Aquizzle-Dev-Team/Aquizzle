import '../css/quiz.css';
import React, {useState} from 'react';

//class={(state === props.hash)? "show" : "hide"

export default function QuizView(props: any){

    return(
            <div className="quizDiv">
                <h1 className="question">{props.question}</h1>
                <button className="answer1" onClick = {props.onClickAnswer}>{props.answer1}</button>
                <button className="answer2" onClick = {props.onClickAnswer}>{props.answer2}</button>
                <button className={props.answer3? "answer3" : "hideButton"} onClick = {props.onClickAnswer}>{props.answer3}</button>
                <button className={props.answer4? "answer4" : "hideButton"} onClick = {props.onClickAnswer}>{props.answer4}</button>
                <button className="generateButton" onClick={props.onAddQuestions}>Generate question</button>
                <h1 className = "counter"> points {props.points}</h1>
                <h1 className = "lives">lives {props.healthBar}</h1>
            </div>
    )
}