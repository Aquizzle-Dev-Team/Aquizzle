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
            <animated.button onClick = {() => {window.location.hash="#quizselector";}} >Start a game</animated.button>
        </animated.div>
    )
}

export default StartQuizView;