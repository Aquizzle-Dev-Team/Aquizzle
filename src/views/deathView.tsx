import '../css/death.css'

function DeathView(){
    return(<div className="deathDiv">
        <img src="https://media3.giphy.com/media/OnWNE0feC5NA4jRTmU/giphy.gif?cid=6c09b9523ea7a668e7574a9e42cbe5d1f53b25ef1378aa58&rid=giphy.gif&ct=s" alt="Dead"/>
        <button onClick = {() => {window.location.hash="#homepage";}} className="newQuiz">Start a new Quiz!</button>
        <button onClick = {() => {window.location.hash="#history";}} className="goToHistory">Look at your history</button>
    </div>)
}

export default DeathView;