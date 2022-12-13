import logo from '../images/aquizzleLogo.png';
import '../css/logo.css';

function LogoView(props: any){
    
    return(
        <div className = "logoDiv">
            <a href='#homepage'>
                <img src={logo} alt="Logo"/>
            </a>
        </div>
    )
}

export default LogoView;