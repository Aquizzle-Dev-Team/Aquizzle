import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';
import '../css/resetFail.css'

export default function ResetFailView(props: any) {
    const [isToggled, setToggle] = useState(false);

    const fillButton = useSpring({
        backgroundColor: isToggled ? '#CA3E47' : '#222222',
        config: { tension: 210, friction: 20 }
    })

    return (
        <div className="resetFailDiv">
            <h2 className="resetFailTitle">Something went wrong, close this window and try again.</h2>

            <animated.button 
            style={fillButton}
            onMouseEnter={() => setToggle(!isToggled)} 
            onMouseLeave={() => setToggle(!isToggled)}
            className="resetFailContinue" 
            onClick={() => {window.location.hash='#homepage'}}>Back to homepage</animated.button>
        </div>
    );
}