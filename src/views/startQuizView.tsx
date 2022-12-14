import logo from '../images/aquizzleLogo.png';
import '../css/startQuiz.css';

function StartQuizView(props: any){
    return(
        <div className = "startQuizDiv">
            <img src={logo} alt="Logo"/>
            <button onClick = {() => {window.location.hash="#quizselector";}} >Start a game</button>
        </div>
    )
}

export default StartQuizView;