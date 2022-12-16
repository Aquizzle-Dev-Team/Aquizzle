export default function ResetSuccessView(props: any) {
    return (
        <div>
            <h2>Your password was successfully changed!</h2>
            <button onClick={() => {window.location.hash='#auth'}}>Continue</button>
        </div>
    );
}
