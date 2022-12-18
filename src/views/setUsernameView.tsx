import { animated, useSpring } from '@react-spring/web';
import { useState } from 'react';
import '../css/setUsername.css'

export default function SetUsernameView(props: any) {
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
        <div className="setUsernameDiv">
            <h2 className="setUsernameTitle">Enter your new username below.</h2>
            <label className="usernameLable">New username</label>
            <input className="newUsername" id='setUsernameInput' onChange={props.handleUsernameChange} placeholder={'example'}></input>
            <p className="newUsernameError">{props.errorMessage}</p>

            <animated.button 
            style={fillButton}
            onMouseEnter={() => setToggle(!isToggled)} 
            onMouseLeave={() => setToggle(!isToggled)}
            className="setNewUsername" 
            onClick={props.setUsername}>Set Username</animated.button>

            <animated.button 
            style={fillButton2}
            onMouseEnter={() => setToggle2(!isToggled2)} 
            onMouseLeave={() => setToggle2(!isToggled2)}
            className="setUsernameBackHome" 
            onClick={() => {window.location.hash='#account';}}>Back</animated.button>
        </div>
    );
}
