import React from "react";
import "../css/show.css"
import { resetInputs } from "../inputReset";

export default
function Show(props: any) {
    const [, setHash]= React.useState(window.location.hash); 
        function hashListenerACB() {
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
        <div className = {(window.location.hash.split('?')[0] === props.hash) ? 'showDiv' : 'hide'}>{props.children}</div>
    );
}