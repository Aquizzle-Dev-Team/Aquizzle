import '../css/resetSuccess.css'

export default function ResetSuccessView(props: any) {
    return (
        <div className="resetSuccessDiv">
            <h2 className="resetSuccessTitle">Your {props.resetType} was successfully changed!</h2>
            <button className="resetSuccessContinue" onClick={props.continueClicked}>Continue</button>
        </div>
    );
}
