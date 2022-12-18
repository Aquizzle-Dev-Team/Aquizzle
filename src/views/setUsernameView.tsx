import '../css/setUsername.css'

export default function SetUsernameView(props: any) {
    return (
        <div className="setUsernameDiv">
            <h2 className="setUsernameTitle">Enter your new username below.</h2>
            <label className="usernameLable">New username</label>
            <input className="newUsername" id='setUsernameInput' onChange={props.handleUsernameChange} placeholder={'example'}></input>
            <p className="newUsernameError">{props.errorMessage}</p>
            <button className="setNewUsername" onClick={props.setUsername}>Set Username</button>
            <button className="setUsernameBackHome" onClick={() => {window.location.hash='#account';}}>Back</button>
        </div>
    );
}
