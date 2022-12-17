import '../css/resetSuccess.css'

export default function ResetSuccessView(props: any) {
    return (
        <div className="resetSuccessDiv">
            <h2 className="resetSuccessTitle">Your password was successfully changed!</h2>
            <button className="resetSuccessContinue" onClick={() => {window.location.hash='#auth'}}>Continue</button>
        </div>
    );
}
