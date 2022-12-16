export default function ChangeEmailView(props: any) {
    return (
        <div>
            <h2>Enter your new email below.</h2>
            <label>Email</label>
            <input id='changeEmailInput' type='email' onChange={props.handleEmailChange} 
                placeholder={'example@aquizzle.com'}/>
            <p>{props.errorMessage}</p>
            <button onClick={props.changeEmail}>Confirm Email</button>
            <button onClick={() => {window.location.hash='#homepage';}}>Back to home</button>
        </div>
    );
}
