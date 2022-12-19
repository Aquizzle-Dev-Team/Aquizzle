import { animated, useSpring } from '@react-spring/web';
import { useState } from 'react';
import '../css/resetSuccess.css'

export default function ResetSuccessView(props: any) {
    const [isToggled, setToggle] = useState(false);

    const fillButton = useSpring({
        backgroundColor: isToggled ? '#CA3E47' : '#222222',
        config: { tension: 210, friction: 20 }
    })
    return (
        <div className="resetSuccessDiv">
            <h2 className="resetSuccessTitle">Your {props.resetType} was successfully changed!</h2>
            
            <animated.button 
            style={fillButton}
            onMouseEnter={() => setToggle(!isToggled)} 
            onMouseLeave={() => setToggle(!isToggled)}
            className="resetSuccessContinue" 
            onClick={props.continueClicked}>Continue</animated.button>
        </div>
    );
}
