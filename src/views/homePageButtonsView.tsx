import '../css/homePageButtons.css'

function HomePageButtonsView(){

    return(
        <div className= "Div">
            <button className="leaderboard">Leaderboard</button>
            <button className="history">History</button>
            <button className="aboutUs">About Us</button>
            <button className="something">Choose Aquizzle</button>
        </div>
    )
}

export default HomePageButtonsView;