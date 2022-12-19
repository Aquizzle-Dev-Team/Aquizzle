import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';
import '../css/death.css'

function DeathView(props){
    const [isToggled, setToggle] = useState(false);
    const [isToggled2, setToggle2] = useState(false);

    const fillButton = useSpring({
        backgroundColor: isToggled ? '#CA3E47' : '#222222',
        config: { tension: 210, friction: 20 }
    })

    const fillButton2 = useSpring({
        backgroundColor: isToggled2 ? '#CA3E47' : '#222222',
        color: 'white',
        config: { tension: 210, friction: 20 }
    })

    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: {
            mass: 10,
            friction: 200,
        }
    })

    return(<div className="deathDiv">
        <animated.img style={fade} src="https://media3.giphy.com/media/OnWNE0feC5NA4jRTmU/giphy.gif?cid=6c09b9523ea7a668e7574a9e42cbe5d1f53b25ef1378aa58&rid=giphy.gif&ct=s" alt="Dead"/>
        <p className={props.score >= 10? "" : "hide"}>You got {props.score} points, Genius!</p>
        <p className={props.score >= 5 && props.score < 10 ? "" : "hide"}>You got {props.score} points, nicely done!</p>
        <p className={props.score < 5? "" : "hide"}>You got {props.score} points ..... you could've done better :/</p>
        
        <animated.button 
        style={fillButton}
        onMouseEnter={() => setToggle(!isToggled)} 
        onMouseLeave={() => setToggle(!isToggled)}
        onClick = {() => {window.location.hash="#homepage";}} 
        className="newQuiz">Start a new Quiz!</animated.button>
        
        <animated.button 
        style={fillButton2}
        onMouseEnter={() => setToggle2(!isToggled2)} 
        onMouseLeave={() => setToggle2(!isToggled2)}
        onClick = {() => {window.location.hash="#history";}} 
        className="goToHistory">Look at your history</animated.button>
    </div>)
}

export default DeathView;