import '../css/history.css'

function HistoryView(){
    return (
        <div className="historyDiv">
            <h2>History</h2>
            <p>Här ska det stå display name, poäng och annat kanske</p>
            <button onClick = {() => {window.location.hash="#quizselector";}}>Start a new game</button>
        </div>
    );
}

export default HistoryView;