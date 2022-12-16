export default function ResetPasswordView(props: any) {
    return (
        <div>
            <h2>Enter your new password.</h2>
            <label>New password</label>
            <input id='newPasswordInput' type='password' onChange={props.handlePasswordChange} placeholder={'******'}/>
            <label>Confirm password</label>
            <input id='confirmPasswordInput' type='password' onChange={props.handleConfirmPasswordChange}
                placeholder={'******'}/>
            <p>{props.errorMessage}</p>
            <button onClick={props.resetPassword}>Send</button>
            <button onClick={() => {window.location.hash='#forgottenpassword'}}>Cancel</button>
        </div>
    );
}
