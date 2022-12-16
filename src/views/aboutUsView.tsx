import logo from '../images/aquizzleLogo.png';
import '../css/aboutUs.css'

function AboutUsView(props: any){
    return(
        <div className = "aboutUsDiv">
            <img src={logo} alt="Logo"/>
            <div>about us!</div>
            <p>This is a project worked on by computer engineering students at KTH. We are developing a quiz website using react redux. The basic functionality for the website is the ability to take a quiz and save your results to a leaderboard which ranks all results accoring to different criteria. We also intend on having a history page where a user can see the different quiz they have performed and the result of said quiz. 

What we have done is deployed the React app to firebase, we setup the code to fetch data from the quiz api and made our first simple quiz with a question and answer that shows if you have chosen the right answer. The setup for the redux react structure with an storing and diplaying a question.

What we plan to do in the future is to fully implement redux for the backend functionality of the website. This includes being able to change the hash state and make custom events that changes questions and answers. We also plan on making a leaderboard and being able to choose the type and difficuly of the quiz.

Our project file structure is made up of views, presenters, states and reducers. We have a store and slices (redux terminology) were we store all the data and reducers that changes the state of that data. Views shows all the components in the UI, presenters communicates with the view and also dispatches an action to the reducer and gets updated in the store.</p>
            <button onClick = {() => {window.location.hash="#homepage";}}>Back to homepage</button>
        </div>
    )
}

export default AboutUsView;