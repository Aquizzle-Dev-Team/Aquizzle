import '../css/homePageButtons.css'

function HomePageButtonsView(){  
    return(
        <div className= "Div">
            <button onClick = {() => {window.location.hash="#leaderboard";}} className="leaderboard">Leaderboard</button>
            <button onClick = {() => {window.location.hash="#history";}} className="history">History</button>
            <button onClick = {() => {window.location.hash="#aboutus";}} className="aboutUs">About Us</button>
            <button className="something">Login / Sign Up</button>
        </div>
    )
}

export default HomePageButtonsView;