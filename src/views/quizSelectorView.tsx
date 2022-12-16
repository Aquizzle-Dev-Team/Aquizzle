import "../css/quizSelector.css";
import { animated, useSpring } from "@react-spring/web";

function QuizSelectorView(props: any) {
    const fade = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    })

    return(
        <animated.div style={fade} className="quizSelectorContainer">
            <span className="title"><h2>What quiz do you want to play?</h2></span>
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
        </animated.div>
    )
}

export default QuizSelectorView;