export default function AccountView(props: any) {
    return (
        <div>
            <h2>My account</h2>
            <p>{`Username: ${props.username}`}</p>
            <a href='/#setusername'>change</a>
            <p>{`Email: ${props.email}`}</p>
            <a href='/#changeemail'>change</a>
            <button onClick={props.logout}>Logout</button>
            <button onClick={() => {window.location.hash='#homepage'}}>Back to home</button>
        </div>
    );
}
