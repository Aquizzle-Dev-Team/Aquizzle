import '../css/forgottenPassword.css'

export default function ForgottenPasswordView(props: any) {
    return (
        <div className="forgottenPasswordDiv">
            <h2 className="forgottenPasswordTitle">Enter your email and a password reset mail will be sent to you.</h2>
            <label className="forgottenPasswordLable">Email</label>
            <input className="forgottenPasswordInput" id='forgottenPasswordEmailInput' type='email' onChange={props.handleEmailChange} 
                placeholder={'example@aquizzle.com'}/>
            <p className="forgottenPasswordError">{props.errorMessage}</p>
            <button className="forgottenPasswordSend" onClick={props.sendPasswordResetEmail}>Send</button>
            <button className="forgottenPasswordCancel" onClick={() => {window.location.hash='#auth'}}>Cancel</button>
        </div>
    );
}
