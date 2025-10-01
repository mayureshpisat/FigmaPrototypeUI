import "./Footer.css"

export function Footer(){
    return(
        <div className="footer">
            <div className="footer-above">
            <h3>Startup 3</h3>
            <ul className="footer-list">
                <li>Privacy Policy</li>
                <li>Terms</li>
                <li>FAQ</li>
                <li>Mail</li>
            </ul>
            </div>
            <div className="footer-line"></div>
            <div className="footer-under">
            <ul className="footer-under-list">
                <li>Tour</li>
                <li>Feature</li>
                <li>Pricing Plan</li>
                <li>Brands</li>
                <li>Contact</li>
            </ul>
            <p>© 2017 Designmodo. All rights reserved.</p>
            </div>

        </div>
    )
}