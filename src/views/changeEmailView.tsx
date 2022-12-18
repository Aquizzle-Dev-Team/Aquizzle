import { animated, useSpring } from '@react-spring/web';
import { useState } from 'react';
import '../css/changeEmail.css'

export default function ChangeEmailView(props: any) {
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
        <div className="changeEmailDiv">
            <h2 className="changeEmailTitle">Enter your new email below.</h2>
            <label className="changeEmailLable">Email</label>
            <input className="changeEmailInput" id='changeEmailInput' type='email' onChange={props.handleEmailChange} 
                placeholder={'example@aquizzle.com'}/>
            <p className="changeEmailError">{props.errorMessage}</p>

            <animated.button
            style={fillButton}
            onMouseEnter={() => setToggle(!isToggled)} 
            onMouseLeave={() => setToggle(!isToggled)}
            className="changeEmailConfirm" 
            onClick={props.changeEmail}>Confirm Email</animated.button>

            <animated.button 
            style={fillButton2}
            onMouseEnter={() => setToggle2(!isToggled2)} 
            onMouseLeave={() => setToggle2(!isToggled2)}
            className="changeEmailBackHome" 
            onClick={() => {window.location.hash='#account';}}>Back</animated.button>
        </div>
    );
}
