import pin from '../assets/Pin.png';
import phone from '../assets/Phone.png';
import telegram from '../assets/telegram.png';

function Footer(){
    return(
        <div className="footer">
            <div className="one">
                <h2>Funiro.</h2>
                <p className="footer-big-p">Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</p>
                <div className="contact">
                    <img src={pin} alt="pin"/>
                    <p>Sawojajar Malang, Indonesia</p>
                </div>
                <div className="contact">
                    <img src={phone} alt="phone"/>
                    <p>+6289 456 3455</p>
                </div>
                <p>www.funiro.com</p>
            </div>
            <div className="one">
                <h2>Menu</h2>
                <p>Products</p>
                <p>Rooms</p>
                <p>Inspirations</p>
                <p>About Us</p>
                <p>Terms & Policy</p>
            </div>
            <div className="one">
                <h2>Account</h2>
                <p>My Account</p>
                <p>Checkout</p>
                <p>My Cart</p>
                <p>My catalog</p>
            </div>
            <div className="one">
                <h2>Stay Connected</h2>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
            </div>
            <div className="one">
                <h2>Stay Updated</h2>
                <div className="input-telegram">
                    <input placeholder="Enter your email" type="text"/>
                    <img src={telegram} className="submit"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;