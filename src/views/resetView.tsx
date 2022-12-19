import '../css/resetPassword.css'

export default function ResetView(props: any) {
    return (
        <div className="resetPasswordDiv">
            <h2 className="resetPasswordTitle">Enter your new {props.type}.</h2>
            <label className="resetPasswordNewLable">New {props.type}:</label>
            <input className="resetPasswordNewInput" id='newPasswordInput' type={props.type} 
                   onChange={props.handlePasswordChange} placeholder={props.placeholder}/>
            <label className="resetPasswordConfirmLable">Confirm {props.type}:</label>
            <input className="resetPasswordConfirmInput" id='confirmPasswordInput' type={props.type} 
                   onChange={props.handleConfirmPasswordChange} placeholder={props.placeholder}/>
            <p className="resetPasswordError">{props.errorMessage}</p>
            <button className="resetPasswordSend" onClick={props.reset}>Send</button>
            <button className="resetPasswordCancel" onClick={() => {window.location.hash='#auth'}}>Cancel</button>
        </div>
    );
}
