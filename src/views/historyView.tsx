import { animated, useSpring } from '@react-spring/web'
import { useState } from 'react'
import '../css/history.css'

function HistoryView(props: any){
    const renderPerformedQuizzes = () => {
        const performedQuizCB = (quiz, key) => {
            return (
                <div key={key} className="completedQuiz">
                    <div className='quizType'>Quiz played: {quiz.typeOfQuiz}</div>
                    <div className='score'>Your score: {quiz.score}</div>
                    <div className='date'>{`Date: ${quiz.date}`}</div>
                    <div className='time'>{`Performed at: ${quiz.time}`}</div>
                </div>
            )
        }
        return (
            props.quizPerformed.map(performedQuizCB)
        )
    }
    
    const [isToggled, setToggle] = useState(false);


    const fillButton = useSpring({
        backgroundColor: isToggled ? '#CA3E47' : '#222222',
        config: { tension: 210, friction: 20 }
    })

    return (
        <div className="historyDiv">
            <h2>History</h2>
            <select onChange={props.selectQuizToShow} name="Quiz" id="quizPicker">
                <option value="all">All quizzes</option>
                <option value="javascript">Javascript</option>
                <option value="html">HTML</option>
                <option value="mysql">MySQL</option>
                <option value="docker">Docker</option>
                <option value="php">PHP</option>
                <option value="linux">Linux</option>
                <option value="bash">Bash</option>
                <option value="kubernetes">Kubernetes</option>
            </select> <br></br> <br></br>
            {renderPerformedQuizzes()}
            <animated.button
            style={fillButton}
            onMouseEnter={() => setToggle(!isToggled)} 
            onMouseLeave={() => setToggle(!isToggled)} 
            onClick = {() => {window.location.hash="#quizselector";}}>Start a new game</animated.button>
        </div>
    );
}

export default HistoryView;