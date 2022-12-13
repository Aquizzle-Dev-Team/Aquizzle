import '../css/quiz.css';
import React, {useState} from 'react';

export default function QuizView(props: any){

    return(
            <div className="quizDiv">
                <h1 className="question">{props.question}</h1>
                <button className={props.answer1? "answer1" : "hide"} onClick = {props.onClickAnswer}>{props.answer1}</button>
                <button className={props.answer2? "answer2" : "hide"} onClick = {props.onClickAnswer}>{props.answer2}</button>
                <button className={props.answer3? "answer3" : "hide"} onClick = {props.onClickAnswer}>{props.answer3}</button>
                <button className={props.answer4? "answer4" : "hide"} onClick = {props.onClickAnswer}>{props.answer4}</button>
                <button className="generateButton" onClick={props.onAddQuestions}>Generate question</button>
                <h2 className = "counter"> Points {props.points}</h2>
                <h2 className = "lives"><img className={(props.healthBar > 2)? "" : "hide"} src="https://www.freeiconspng.com/thumbs/heart-icon/heart-icon-valentine-2.png"/><img className={(props.healthBar > 1)? "" : "hide"}src="https://www.freeiconspng.com/thumbs/heart-icon/heart-icon-valentine-2.png"/><img className={(props.healthBar > 0)? "" : "hide"}src="https://www.freeiconspng.com/thumbs/heart-icon/heart-icon-valentine-2.png"/></h2>
            </div>
    )
}