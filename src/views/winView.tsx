import '../css/win.css'

function WinView(){
    return(<div className="winDiv">
        <img src="https://i.gifer.com/origin/f9/f90fc85cf18e351c565692dcb1c0feeb_w200.webp" alt="kermitWin"/>
        <h2>Holy ****, you won!</h2>
        <h3>Well done you genius!</h3>
        <button className="playAgain" onClick = {() => {window.location.hash="#quizselector";}}>Play again!</button>
        <button className="lookAtProgress" onClick = {() => {window.location.hash="#history";}}>Your history!</button>
    </div>)
}

export default WinView