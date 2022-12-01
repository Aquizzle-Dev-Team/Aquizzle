import logo from '../images/aquizzleLogo.png';
import '../css/homePageStart.css';

function HomePageStartView(props: any){
    
    return(
        <div className = "homePageStartDiv">
            <img src={logo} alt="Logo"/>
            <button>Start a game</button>
        </div>
    )
}

export default HomePageStartView;