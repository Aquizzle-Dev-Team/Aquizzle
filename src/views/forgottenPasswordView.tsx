export default function ForgottenPasswordView(props: any) {
    return (
        <div>
            <h2>Enter your email and a password reset mail will be sent to you.</h2>
            <label>Email</label>
            <input id='forgottenPasswordEmailInput' type='email' onChange={props.handleEmailChange} 
                placeholder={'example@aquizzle.com'}/>
            <p>{props.errorMessage}</p>
            <button onClick={props.sendPasswordResetEmail}>Send</button>
            <button onClick={() => {window.location.hash='#auth'}}>Cancel</button>
        </div>
    );
}
