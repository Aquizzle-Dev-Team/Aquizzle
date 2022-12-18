import logo from '../images/aquizzleLogo.png';
import '../css/startQuiz.css';
import { animated, useSpring } from '@react-spring/web';
import { useState } from 'react';

function StartQuizView(props: any){
    const [isToggled, setToggle] = useState(false);
    const [isToggled2, setToggle2] = useState(false);

    const fade = useSpring({
        backgroundColor: isToggled ? '#CA3E47' : '#222222',
        config: { tension: 210, friction: 20 }
    })

    const fade2 = useSpring({
        backgroundColor: isToggled2 ? '#CA3E47' : '#222222',
        color: 'white',
        config: { tension: 210, friction: 20 }
    })

    return(
        <div className = "startQuizDiv">
            <img src={logo} alt="Logo"/>
            <animated.button 
            style={fade}
            onMouseEnter={() => setToggle(!isToggled)} 
            onMouseLeave={() => setToggle(!isToggled)}
            className="seeYourHistory" 
            onClick = {() => {window.location.hash="#history";}} >See your progress</animated.button>
            <animated.button 
            style={fade2}
            onMouseEnter={() => setToggle2(!isToggled2)} 
            onMouseLeave={() => setToggle2(!isToggled2)}
            className="startNewGame" 
            onClick = {() => {window.location.hash="#quizselector";}} >Start a new game</animated.button>
        </div>
    )
}

export default StartQuizView;