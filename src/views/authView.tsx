import { animated, useSpring } from '@react-spring/web';
import { useState } from 'react';
import '../css/auth.css'

export default function AuthView(props: any) {
    const [isToggled, setToggle] = useState(false);
    const [isToggled2, setToggle2] = useState(false);
    const [isToggled3, setToggle3] = useState(false);


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

    return (
        <div className="logInDiv" >
            <h2 className="logInTitle">Log in to an existing account or sign up to create a new one.</h2>
            <label className="emailLable">Email</label>
            <input className="logInEmail" id='emailAuthInput' type='email' onChange={props.handleEmailChange} placeholder={'example@aquizzle.com'}/>
            <label className="passwordLable" >Password</label>
            <input className="logInPassword" id='passwordAuthInput' type='password' onChange={props.handlePasswordChange} placeholder={'******'}/>
            <p className="logInErrorMessage" >{props.errorMessage}</p>

            <animated.button 
            style={fillButton}
            onMouseEnter={() => setToggle(!isToggled)} 
            onMouseLeave={() => setToggle(!isToggled)}
            className="logInButton" 
            onClick={props.login} 
            disabled={props.emptyInputs}>Log In</animated.button>

            <animated.button 
            style={fillButton2}
            onMouseEnter={() => setToggle2(!isToggled2)} 
            onMouseLeave={() => setToggle2(!isToggled2)}
            className="signUpButton" 
            onClick={props.signup} 
            disabled={props.emptyInputs}>Sign Up</animated.button>

            <a className="forgotYourPassword" href="/#forgottenpassword">Forgot your password?</a>

            <animated.button 
            style={fillButton3}
            onMouseEnter={() => setToggle3(!isToggled3)} 
            onMouseLeave={() => setToggle3(!isToggled3)}
            className="logInBackHome"  
            onClick={() => {window.location.hash='#homepage'}}>Back to homepage</animated.button>
        </div>
    );
}
