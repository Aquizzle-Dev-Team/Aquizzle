import "../css/leaderboard.css";

function LeaderboardView(props: any){
    const renderPerformedQuizzes = () => {
        const performedQuizCB = (quiz, key) => {
            return (
                <div key={key} className="completedQuizLeaderboard">
                    <div className='quizTypeLeaderboard'>Quiz: {quiz.typeOfQuiz}</div>
                    <div className='nameLeaderboard'>Name: {quiz.performedByName}</div>
                    <div className='scoreLeaderboard'>Score: {quiz.score}</div>
                    <div className='dateLeaderboard'>{`Date: ${quiz.date}`}</div>
                    <div className='timeLeaderboard'>{`Time: ${quiz.time}`}</div>
                </div>
            )
        }
        return (
            props.quizPerformed.map(performedQuizCB)
        )
    }

    return (
        <div className="leaderboardDiv">
            <h2>Leaderboard</h2>
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
            <button onClick = {() => {window.location.hash="#quizselector";}}>Start a new game</button>
        </div>
    );
}

export default LeaderboardView;