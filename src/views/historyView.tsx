import '../css/history.css'

function HistoryView(props: any){
    const renderPerformedQuizzes = () => {
        const performedQuizCB = (quiz, key) => {
            return (
                <div key={key} className="completedQuiz">
                    <div className='quizType'>Quiz: {quiz.typeOfQuiz}</div>
                    <div className='score'>Score: {quiz.score}</div>
                    <div className='quizuid'>uid: {quiz.performedByuid}</div>
                    <div className='performedBy'>name: {quiz.performedByName}</div>
                    <div className='dateAndTime'>{`Date: ${quiz.date}`}</div>
                    <div className='dateAndTime'>{`Time: ${quiz.time}`}</div>
                </div>
            )
        }
        return (
            props.quizPerformed.map(performedQuizCB)
        )
    }

    console.log(props.quizPerformed);
    
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
            </select>
            {renderPerformedQuizzes()}
            <button onClick = {() => {window.location.hash="#quizselector";}}>Start a new game</button>
        </div>
    );
}

export default HistoryView;