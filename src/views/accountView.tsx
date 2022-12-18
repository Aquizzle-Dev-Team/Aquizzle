import { animated, useSpring } from '@react-spring/web';
import { useState } from 'react';
import '../css/account.css'

export default function AccountView(props: any) {
    const [isToggled, setToggle] = useState(false);
    const [isToggled2, setToggle2] = useState(false);


    const fillButton = useSpring({
        backgroundColor: isToggled ? '#CA3E47' : '#222222',
        config: { tension: 210, friction: 20 }
    })
    const fillButton2 = useSpring({
        backgroundColor: isToggled2 ? '#CA3E47' : '#222222',
        config: { tension: 210, friction: 20 }
    })
    
    return (
        <div className="myAccountDiv" id="Account">
            <h1 className="accountTitle">My account</h1>
            <h2 className="username">{`Username: ${props.username}`}</h2>
            <a href='/#setusername' className="usernameChange">change </a>
            <h2 className="email">{`Email: ${props.email}`}</h2>
            <a href='/#changeemail' className="emailChange">change</a>

            <animated.button
            style={fillButton}
            onMouseEnter={() => setToggle(!isToggled)} 
            onMouseLeave={() => setToggle(!isToggled)} 
            className="logOutButton" 
            onClick={props.logout}>Logout</animated.button>

            <animated.button 
            style={fillButton2}
            onMouseEnter={() => setToggle2(!isToggled2)} 
            onMouseLeave={() => setToggle2(!isToggled2)}
            className="backHomeButton" 
            onClick={() => {window.location.hash='#homepage'}}>Back to home</animated.button>
        </div>
    );
}
