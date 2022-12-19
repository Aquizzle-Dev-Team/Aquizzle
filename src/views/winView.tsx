import { animated, useSpring } from '@react-spring/web';
import { useState } from 'react';
import '../css/win.css'

function WinView(){
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
    return(<div className="winDiv">
        <img src="https://i.gifer.com/origin/f9/f90fc85cf18e351c565692dcb1c0feeb_w200.webp" alt="kermitWin"/>
        <h2>Holy ****, you won!</h2>
        <h3>Well done you genius!</h3>
        
        <animated.button 
        style={fillButton}
        onMouseEnter={() => setToggle(!isToggled)} 
        onMouseLeave={() => setToggle(!isToggled)}
        className="playAgain" 
        onClick = {() => {window.location.hash="#quizselector";}}>Play again!</animated.button >
        
        <animated.button  
        style={fillButton2}
        onMouseEnter={() => setToggle2(!isToggled2)} 
        onMouseLeave={() => setToggle2(!isToggled2)}
        className="lookAtProgress" 
        onClick = {() => {window.location.hash="#history";}}>Your history!</animated.button >
    </div>)
}

export default WinView