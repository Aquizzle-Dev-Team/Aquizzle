import logo from '../images/aquizzleLogo.png';
import '../css/aboutUs.css'
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

function AboutUsView(props: any){
    const [isToggled, setToggle] = useState(false);

    const fillButton = useSpring({
        backgroundColor: isToggled ? '#CA3E47' : '#222222',
        config: { tension: 210, friction: 20 }
    })

    return(
        <div className = "aboutUsDiv">
            <img src={logo} alt="Logo"/>
            <div>About Aquizzle</div>
            <p>Aquizzle is a website made to aid students in their endeavors to grasp basic 
                knowledge within different computer science subjects. This is done by a 
                game-like quiz where students can test and train their knowledge in different 
                subjects like: JavaScript, HTML, MySQL, Kubernetes and more. <br/><br/> 
                So if you are a student in need of help to better understand your courses or anyone
                else just wanting to test their knowledge, try a quiz and see how far up the 
                leaderboard you can place! <br/><br/>

                Best regards, <br/>
                The Aquizzle Team 

            </p>
            <animated.button
            style={fillButton}
            onMouseEnter={() => setToggle(!isToggled)} 
            onMouseLeave={() => setToggle(!isToggled)} 
            onClick = {() => {window.location.hash="#homepage";}}>Back to homepage</animated.button>
        </div>
    )
}

export default AboutUsView;