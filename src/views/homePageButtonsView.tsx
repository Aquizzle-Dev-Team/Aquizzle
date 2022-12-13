import '../css/homePageButtons.css'

function HomePageButtonsView(){

    function navigationACB(){
        window.location.hash="#aboutus"
    }
    
    return(
        <div className= "Div">
            <button className="leaderboard">Leaderboard</button>
            <button className="history">History</button>
            <button onClick = {navigationACB} className="aboutUs">About Us</button>
            <button className="something">Login / Sign Up</button>
        </div>
    )
}

export default HomePageButtonsView;