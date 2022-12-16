export default function AccountView(props: any) {
    return (
        <div>
            <h2>My account</h2>
            <p>{`Username: ${props.username}`}</p>
            <p onClick={props.changeUsername}>change</p>
            <p>{`Email: ${props.email}`}</p>
            <p onClick={props.changeEmail}>change</p>
            <button onClick={props.logout}>Logout</button>
            <button onClick={() => {window.location.hash='#homepage'}}>Back to home</button>
        </div>
    );
}
