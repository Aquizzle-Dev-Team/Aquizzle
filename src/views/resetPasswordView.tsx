import { animated, useSpring } from '@react-spring/web';
import { useState } from 'react';
import '../css/resetPassword.css'

export default function ResetPasswordView(props: any) {
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
        <div className="resetPasswordDiv">
            <h2 className="resetPasswordTitle">Enter your new password.</h2>
            <label className="resetPasswordNewLable">New password:</label>
            <input className="resetPasswordNewInput" id='newPasswordInput' type='password' onChange={props.handlePasswordChange} placeholder={'******'}/>
            <label className="resetPasswordConfirmLable">Confirm password:</label>
            <input className="resetPasswordConfirmInput" id='confirmPasswordInput' type='password' onChange={props.handleConfirmPasswordChange}
                placeholder={'******'}/>
            <p className="resetPasswordError">{props.errorMessage}</p>
            
            <animated.button
            style={fillButton}
            onMouseEnter={() => setToggle(!isToggled)} 
            onMouseLeave={() => setToggle(!isToggled)} 
            className="resetPasswordSend" 
            onClick={props.resetPassword}>Send</animated.button>
            
            <animated.button 
            style={fillButton2}
            onMouseEnter={() => setToggle2(!isToggled2)} 
            onMouseLeave={() => setToggle2(!isToggled2)}
            className="resetPasswordCancel" 
            onClick={() => {window.location.hash='#forgottenpassword'}}>Cancel</animated.button>
        </div>
    );
}
