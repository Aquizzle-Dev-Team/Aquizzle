import React from "react";
import { getAuth } from "@firebase/auth";
import { firebaseApp } from "../firebaseConfig";
import "../css/show.css"
import { resetInputs } from "../inputReset";

export default
function Show(props: any) {
    const [, setHash]= React.useState(window.location.hash); 
        function hashListenerACB() {
            if (!getAuth(firebaseApp)?.currentUser) {
                let hash = window.location.hash;
                if (!(hash === '#homepage' || hash === '#aboutus' || hash === '#leaderboard' ||
                      hash === '#auth' || hash === '#forgottenpassword' || hash === '#resetsuccess'))
                    window.location.hash = '#auth';
            }
            setHash(window.location.hash);
            resetInputs();
        } 
        function componentWasCreatedACB(){ 
           window.addEventListener("hashchange", hashListenerACB);
           function isTakenDownACB(){        
               window.removeEventListener("hashchange", hashListenerACB)
           }
           return isTakenDownACB; 
        }
        React.useEffect( componentWasCreatedACB, [] );
    return (
        <div className = {(window.location.hash.split('?')[0] === props.hash)? (window.location.hash.split('?')[0] === "#win") ? 'winShowDiv' : 'showDiv' : 'hide'}>{props.children}</div>
    );
}