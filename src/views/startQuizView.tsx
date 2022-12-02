import logo from '../images/aquizzleLogo.png';
import '../css/startQuiz.css';

function StartQuizView(props: any){
    
    return(
        <div className = "startQuizDiv">
            <img src={logo} alt="Logo"/>
            <button>Start a game</button>
        </div>
    )
}

export default StartQuizView;