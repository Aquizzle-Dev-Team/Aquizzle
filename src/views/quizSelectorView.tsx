import "../css/quizSelector.css";

function QuizSelectorView() {
    return(
        <div className="quizSelectorContainer">
            <div className="selectorCards jsCard">
                <span className="cardText">JavaScript</span>
            </div>
            <div className="selectorCards htmlCard">
                <span className="cardText">HTML</span>
            </div>
            <div className="selectorCards sqlCard">
                <span className="cardText">MySQL</span>
            </div>
            <div className="selectorCards">
                <span className="cardText">Docker</span>
            </div>
            <div className="selectorCards">
                <span className="cardText">PHP</span>
            </div>
            <div className="selectorCards">
                <span className="cardText">Linux</span>
            </div>
            <div className="selectorCards">
                <span className="cardText">Bash</span>
            </div>
            <div className="selectorCards">
                <span className="cardText">Kubernetes</span>
            </div>
        </div>
    )
}

export default QuizSelectorView;