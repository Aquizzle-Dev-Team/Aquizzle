import '../css/footer.css';

function FooterView(){

    return(
        <div className="footerDiv">
            {/*<div className="slutetlogo"></div>*/}
        
            <div className="followProject">
                <h3>Would you like to follow the project?</h3>
                <a href="https://github.com/Aquizzle-Dev-Team/Aquizzle" target="_blank"> Press here for the github link to the project </a>
            </div>
        </div>
    )
}

export default FooterView;