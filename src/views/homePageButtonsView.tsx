import { animated, useSpring } from '@react-spring/web';
import { useState } from 'react';
import '../css/homePageButtons.css'

export default function HomePageButtonsView(props: any){
    const [isToggled, setToggle] = useState(false);
    const [isToggled2, setToggle2] = useState(false);
    const [isToggled3, setToggle3] = useState(false);
    const [isToggled4, setToggle4] = useState(false);


    const fillButton = useSpring({
        backgroundColor: isToggled ? '#CA3E47' : '#222222',
        config: { tension: 210, friction: 20 }
    })

    const fillButton2 = useSpring({
        backgroundColor: isToggled2 ? '#CA3E47' : '#222222',
        color: 'white',
        config: { tension: 210, friction: 20 }
    })

    const fillButton3 = useSpring({
        backgroundColor: isToggled3 ? '#CA3E47' : '#222222',
        config: { tension: 210, friction: 20 }
    })

    const fillButton4 = useSpring({
        backgroundColor: isToggled4 ? '#CA3E47' : '#222222',
        color: 'white',
        config: { tension: 210, friction: 20 }
    })
    
    return(
        <div className= "Div">
            <animated.button 
            style={fillButton}
            onMouseEnter={() => setToggle(!isToggled)} 
            onMouseLeave={() => setToggle(!isToggled)}
            className="leaderboard" 
            onClick = {() => {window.location.hash="#leaderboard";}}>Leaderboard</animated.button>
            <animated.button
            style={fillButton2}
            onMouseEnter={() => setToggle2(!isToggled2)} 
            onMouseLeave={() => setToggle2(!isToggled2)}            
            className="history" 
            onClick = {() => {window.location.hash="#history";}}>History</animated.button>
            <animated.button
            style={fillButton3}
            onMouseEnter={() => setToggle3(!isToggled3)} 
            onMouseLeave={() => setToggle3(!isToggled3)} 
            className="aboutUs" 
            onClick = {() => {window.location.hash="#aboutus";}}>About Us</animated.button>
            <animated.button
            style={fillButton4}
            onMouseEnter={() => setToggle4(!isToggled4)} 
            onMouseLeave={() => setToggle4(!isToggled4)} 
            onClick={props.handleAuthClick}>{props.authStateText}</animated.button>
        </div>
    )
}