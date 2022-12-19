import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';
import '../css/forgottenPassword.css'

export default function ForgottenPasswordView(props: any) {
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

    return (
        <div className="forgottenPasswordDiv">
            <h2 className="forgottenPasswordTitle">Enter your email and a password reset mail will be sent to you.</h2>
            <label className="forgottenPasswordLable">Email</label>
            <input className="forgottenPasswordInput" id='forgottenPasswordEmailInput' type='email' onChange={props.handleEmailChange} 
                placeholder={'example@aquizzle.com'}/>
            <p className="forgottenPasswordError">{props.errorMessage}</p>
            
            <animated.button 
            style={fillButton}
            onMouseEnter={() => setToggle(!isToggled)} 
            onMouseLeave={() => setToggle(!isToggled)}
            className="forgottenPasswordSend" 
            onClick={props.sendPasswordResetEmail}>Send</animated.button>
            
            <animated.button 
            style={fillButton2}
            onMouseEnter={() => setToggle2(!isToggled2)} 
            onMouseLeave={() => setToggle2(!isToggled2)}
            className="forgottenPasswordCancel" 
            onClick={() => {window.location.hash='#auth'}}>Cancel</animated.button>
        </div>
    );
}
