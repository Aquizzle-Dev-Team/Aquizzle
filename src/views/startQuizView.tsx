import logo from '../images/aquizzleLogo.png';
import '../css/startQuiz.css';

function StartQuizView(props: any){
    
    function navigationACB(){
        window.location.hash="#quizselector"
    }

    return(
        <div className = "startQuizDiv">
            <img src={logo} alt="Logo"/>
            <button onClick = {navigationACB} >Start a game</button>
        </div>
    )
}

export default StartQuizView;