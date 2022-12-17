import '../css/auth.css'

export default function AuthView(props: any) {
    return (
        <div className="logInDiv" >
            <h2 className="logInTitle">Log in to an existing account or sign up to create a new one.</h2>
            <label className="emailLable">Email</label>
            <input className="logInEmail" id='emailAuthInput' type='email' onChange={props.handleEmailChange} placeholder={'example@aquizzle.com'}/>
            <label className="passwordLable" >Password</label>
            <input className="logInPassword" id='passwordAuthInput' type='password' onChange={props.handlePasswordChange} placeholder={'******'}/>
            <p className="logInErrorMessage" >{props.errorMessage}</p>
            <button className="logInButton" onClick={props.login} disabled={props.emptyInputs}>Log In</button>
            <button className="signUpButton" onClick={props.signup} disabled={props.emptyInputs}>Sign Up</button>
            <a className="forgotYourPassword" href="/#forgottenpassword">Forgot your password?</a>
            <button className="logInBackHome"  onClick={() => {window.location.hash='#homepage'}}>Back to homepage</button>
        </div>
    );
}
