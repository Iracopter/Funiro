import hp1 from '../assets/hp1.png';
import hp2 from '../assets/hp2.png';
import hp3 from '../assets/hp3.png';
import heart from '../assets/Heart.png';
import cart from '../assets/Cart.png';
import userphoto from '../assets/Ellipse 2.png';
import indicator from '../assets/Indicator.png';
import arrow from '../assets/Arrow-down.png';


function Header(){
    return(
        <div className="background">
            <div className="Top_Nav">
                <h2>Funiro.</h2>
                <select>
                    <option>Products</option>
                </select>
                <select>
                    <option>Rooms</option>
                </select>
                <h2 className="navigation-opt">Inspirations</h2>
                <input placeholder="Search for minimalist chair" />
                <img src={heart} alt="heart"/>
                <img src={cart} alt="cart"/>
                <img src={userphoto} alt="userphoto"/>
                <img src={indicator} className="indicator" alt="indicator"/>
                <div className="button-block">
                    <button className="button1"></button>
                    <button className="button2"></button>
                </div>
            </div>
            <div className="Image_Gallery">
                <img src={hp1} alt="header-picture" className="hp1"/>
                <img src={hp2} alt="header-picture" className="hp2"/>
                <img src={hp3} alt="header-picture" className="hp3"/>
                <div className="Hero_Content">
                    <h1>High-Quality Furniture Just For You</h1>
                    <p>Our furniture is made from selected and best quality materials that are suitable for your dream home</p>
                    <button>Shop Now</button>
                </div>
                <div className="Info_Box">
                    <h3>Bohauss</h3>
                    <h5>Luxury big sofa 2-seat</h5>
                    <h4>Rp 17.000.000 →</h4>
                </div>
            </div>
        </div>
    );
}

export default Header;