export default function SetUsernameView(props: any) {
    return (
        <div>
            <h2>Enter your new username below.</h2>
            <label>Username</label>
            <input id='setUsernameInput' onChange={props.handleUsernameChange} placeholder={'example'}></input>
            <p>{props.errorMessage}</p>
            <button onClick={props.setUsername}>Set Username</button>
            <button onClick={() => {window.location.hash='#homepage';}}>Back to home</button>
        </div>
    );
}
