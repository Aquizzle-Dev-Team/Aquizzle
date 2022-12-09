import '../css/footer.css';

function FooterView(){

    return(
        <div className="footerDiv">
            {/*<div className="slutetlogo"></div>*/}
        
            <div className="kontaktaOss">
                <h3>Kontakta oss</h3>
                <p>Gmail: andree3@kth.se</p>
                <p>Telefon: 072-324 28 22</p>
            </div>
        
            <div className="besökOss">
                <h3>Besök oss</h3>
                <p>Kistagången 16</p>
            </div>
            <div className="stödjaStudenter">
                <h3>Skulle du vilja stödja några studenter?</h3>
                <p>Swish: 072-324 28 22</p>
            </div>
        </div>
    )
}

export default FooterView;