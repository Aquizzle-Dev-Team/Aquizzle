import '../css/quiz.css';

interface QuizViewTypes{
    countNumber: number
}

export default function QuizView({countNumber}: QuizViewTypes){
    return(
        <div className="quizDiv">
            <h1 className="question">Question: {countNumber}</h1>
            <button className="answer1">Svar 1</button>
            <button className="answer2">Svar 2</button>
            <button className="answer3">Svar 3</button>
            <button className="answer4">Svar 4</button>
        </div>
    )
}