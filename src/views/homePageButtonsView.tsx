import '../css/homePageButtons.css'

export default function HomePageButtonsView(props: any){
    return(
        <div className= "Div">
            <button className="leaderboard" onClick = {() => {window.location.hash="#leaderboard";}}>Leaderboard</button>
            <button className="history" onClick = {() => {window.location.hash="#history";}}>History</button>
            <button className="aboutUs" onClick = {() => {window.location.hash="#aboutus";}}>About Us</button>
            <button onClick={props.handleAuthClick}>{props.authStateText}</button>
        </div>
    )
}
