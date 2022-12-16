import '../css/homePageButtons.css'

export default function HomePageButtonsView(props: any){

    function navigationACB(){
        window.location.hash="#aboutus"
    }
    
    return(
        <div className= "Div">
            <button className="leaderboard">Leaderboard</button>
            <button className="history">History</button>
            <button onClick = {navigationACB} className="aboutUs">About Us</button>
            <button onClick={props.handleAuthClick}>{props.authStateText}</button>
        </div>
    )
}
