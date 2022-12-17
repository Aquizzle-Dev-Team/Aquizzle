import '../css/resetPassword.css'

export default function ResetPasswordView(props: any) {
    return (
        <div className="resetPasswordDiv">
            <h2 className="resetPasswordTitle">Enter your new password.</h2>
            <label className="resetPasswordNewLable">New password:</label>
            <input className="resetPasswordNewInput" id='newPasswordInput' type='password' onChange={props.handlePasswordChange} placeholder={'******'}/>
            <label className="resetPasswordConfirmLable">Confirm password:</label>
            <input className="resetPasswordConfirmInput" id='confirmPasswordInput' type='password' onChange={props.handleConfirmPasswordChange}
                placeholder={'******'}/>
            <p className="resetPasswordError">{props.errorMessage}</p>
            <button className="resetPasswordSend" onClick={props.resetPassword}>Send</button>
            <button className="resetPasswordCancel" onClick={() => {window.location.hash='#forgottenpassword'}}>Cancel</button>
        </div>
    );
}
