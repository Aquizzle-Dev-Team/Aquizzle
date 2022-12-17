import '../css/changeEmail.css'

export default function ChangeEmailView(props: any) {
    return (
        <div className="changeEmailDiv">
            <h2 className="changeEmailTitle">Enter your new email below.</h2>
            <label className="changeEmailLable">Email</label>
            <input className="changeEmailInput" id='changeEmailInput' type='email' onChange={props.handleEmailChange} 
                placeholder={'example@aquizzle.com'}/>
            <p className="changeEmailError">{props.errorMessage}</p>
            <button className="changeEmailConfirm" onClick={props.changeEmail}>Confirm Email</button>
            <button className="changeEmailBackHome" onClick={() => {window.location.hash='#homepage';}}>Back to home</button>
        </div>
    );
}
