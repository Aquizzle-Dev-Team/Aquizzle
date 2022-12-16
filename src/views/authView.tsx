export default function AuthView(props: any) {
    return (
        <div>
            <h2>Log in to an existing account or sign up to create a new one.</h2>
            <label>Email</label>
            <input id='emailAuthInput' type='email' onChange={props.handleEmailChange} placeholder={'example@aquizzle.com'}/>
            <label>Password</label>
            <input id='passwordAuthInput' type='password' onChange={props.handlePasswordChange} placeholder={'******'}/>
            <p>{props.errorMessage}</p>
            <button onClick={props.login} disabled={props.emptyInputs}>Log In</button>
            <button onClick={props.signup} disabled={props.emptyInputs}>Sign Up</button>
            <a href="/#forgottenpassword">Forgot your password?</a>
            <button onClick={() => {window.location.hash='#homepage'}}>Back to homepage</button>
        </div>
    );
}
