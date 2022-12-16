import logo from '../images/aquizzleLogo.png';
import '../css/startQuiz.css';
import { animated, useSpring } from '@react-spring/web';

function StartQuizView(props: any){
    const fade = useSpring({
        from: {
            opacity: 0
        }, 
        to: {
            opacity: 1
        }
    })

    return(
        <animated.div style={fade} className = "startQuizDiv">
            <img src={logo} alt="Logo"/>
            <animated.button className="seeYourHistory" onClick = {() => {window.location.hash="#history";}} >See your progress</animated.button>
            <animated.button className="startNewGame" onClick = {() => {window.location.hash="#quizselector";}} >Start a new game</animated.button>
        </animated.div>
    )
}

export default StartQuizView;