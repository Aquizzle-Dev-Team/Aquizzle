import '../css/account.css'

export default function AccountView(props: any) {
    return (
        <div className="myAccountDiv" id="Account">
            <h1 className="accountTitle">My account</h1>
            <h2 className="username">{`Username: ${props.username}`}</h2>
            <a href='/#setusername' className="usernameChange">change </a>
            <h2 className="email">{`Email: ${props.email}`}</h2>
            <a href='/#changeemail' className="emailChange">change</a>
            <button className="logOutButton" onClick={props.logout}>Logout</button>
            <button className="backHomeButton" onClick={() => {window.location.hash='#homepage'}}>Back to home</button>
            <button className="changeBackgroundColor" onClick={props.changeColor}>Change your background color</button>
            <button className="changeBackgroundImage" onClick={props.changeImage}>Change your background image</button>
        </div>
    );
}
