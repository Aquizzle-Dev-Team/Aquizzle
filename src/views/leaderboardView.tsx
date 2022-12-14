import "../css/leaderboard.css";

function LeaderboardView(){
    return (
        <div className="leaderboardDiv">
            <h2>Leaderboard</h2>
            <p>Här ska det stå namn, poäng och annat kanske</p>
            <button onClick = {() => {window.location.hash="#quizselector";}}>Start a new game</button>
        </div>
    );
}

export default LeaderboardView;