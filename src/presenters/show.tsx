import React from "react";
import "../css/show.css"

export default
function Show(props: any) {
    const [hashState, setHash]= React.useState(window.location.hash); 
        function hashListenerACB(){ setHash(window.location.hash); } 
        function componentWasCreatedACB(){ 
           window.addEventListener("hashchange", hashListenerACB);
           function isTakenDownACB(){        
               window.removeEventListener("hashchange", hashListenerACB)
           }
           return isTakenDownACB; 
        }
        React.useEffect( componentWasCreatedACB, [] );
    return (
    <div className = {(hashState === props.hash) ? "" : 'hide'}>{props.children}</div>
    );
}