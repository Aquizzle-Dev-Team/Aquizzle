import "../css/quizSelector.css";

function QuizSelectorView(props: any) {
    return(
        <div className="quizSelectorContainer">
            <div onClick={props.onPickQuiz} className="selectorCards jsCard">
                <span className="cardText">JavaScript</span>
            </div>
            <div onClick={props.onPickQuiz} className="selectorCards htmlCard">
                <span className="cardText">HTML</span>
            </div>
            <div onClick={props.onPickQuiz} className="selectorCards sqlCard">
                <span className="cardText">MySQL</span>
            </div>
            <div onClick={props.onPickQuiz} className="selectorCards dockerCard">
                <span className="cardText">Docker</span>
            </div>
            <div onClick={props.onPickQuiz} className="selectorCards phpCard">
                <span className="cardText">PHP</span>
            </div>
            <div onClick={props.onPickQuiz} className="selectorCards linuxCard">
                <span className="cardText">Linux</span>
            </div>
            <div onClick={props.onPickQuiz} className="selectorCards bashCard">
                <span className="cardText">Bash</span>
            </div>
            <div onClick={props.onPickQuiz} className="selectorCards kuberCard">
                <span className="cardText">Kubernetes</span>
            </div>
        </div>
    )
}

export default QuizSelectorView;