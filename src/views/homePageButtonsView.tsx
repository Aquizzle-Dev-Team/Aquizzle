import '../css/homePageButtons.css'

function HomePageButtonsView(){  
    return(
        <div className= "Div">
            <button className="leaderboard">Leaderboard</button>
            <button className="history">History</button>
            <button onClick = {() => {window.location.hash="#aboutus";}} className="aboutUs">About Us</button>
            <button className="something">Login / Sign Up</button>
        </div>
    )
}

export default HomePageButtonsView;