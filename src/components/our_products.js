import Syltherine from '../assets/Syltherine.png';
import Leviosa from '../assets/Leviosa.png';
import Lolito from '../assets/Lolita.png';
import Respira from '../assets/Respira.png';
import Grifo from '../assets/Grifo.png';
import Muggo from '../assets/Muggo.png';
import Pingky from '../assets/Pingky.png';
import Potty from '../assets/Potty.png';
import heart from '../assets/Heart_white.png';
import share from '../assets/gridicons_share.png';
import label30 from '../assets/Label30.png';
import label50 from '../assets/Label50.png';
import labelnew from '../assets/LabelNew.png';


function OurProducts(){
    return(
        <div className="our_products">
            <h2>Our Products</h2>
            <div className="products-group">
                <div className="Featured-Products">
                    <img src={Syltherine} alt="Syltherine" className="product-picture"/>
                    <img src={label30} className="product-label"/>
                    <h4>Syltherine</h4>
                    <p>Stylish cafe chair</p>
                    <div className="products-h5">
                        <h5>Rp 2.500.000</h5>
                        <h5 className="smaller">Rp 3.500.000</h5>
                    </div>
                    <button className="hidden-button">Add to cart</button>
                    <div className="hidden-block">
                        <div className="hidden-block-links">
                            <img src={share}/>
                            <h3>Share</h3>
                        </div>
                        <div className="hidden-block-links">
                            <img src={heart}/>
                            <h3>Like</h3>
                        </div>
                    </div>
                </div>
                <div className="Featured-Products">
                    <img src={Leviosa} alt="Leviosa" className="product-picture"/>
                    <h4>Leviosa</h4>
                    <p>Stylish cafe chair</p>
                    <div className="products-h5">
                        <h5>Rp 2.500.000</h5>
                    </div>
                    <button className="hidden-button">Add to cart</button>
                    <div className="hidden-block">
                        <div className="hidden-block-links">
                            <img src={share}/>
                            <h3>Share</h3>
                        </div>
                        <div className="hidden-block-links">
                            <img src={heart}/>
                            <h3>Like</h3>
                        </div>
                    </div>
                </div>
                <div className="Featured-Products">
                    <img src={Lolito} alt="Lolito" className="product-picture"/>
                    <img src={label50} className="product-label"/>
                    <h4>Lolito</h4>
                    <p>Luxury big sofa</p>
                    <div className="products-h5">
                        <h5>Rp 7.000.000</h5>
                        <h5 className="smaller">Rp 14.000.000</h5>
                    </div>
                    <button className="hidden-button">Add to cart</button>
                    <div className="hidden-block">
                        <div className="hidden-block-links">
                            <img src={share}/>
                            <h3>Share</h3>
                        </div>
                        <div className="hidden-block-links">
                            <img src={heart}/>
                            <h3>Like</h3>
                        </div>
                    </div>
                </div>
                <div className="Featured-Products">
                    <img src={Respira} alt="Respira" className="product-picture"/>
                    <img src={labelnew} className="product-label"/>
                    <h4>Respira</h4>
                    <p>Minimalist fan</p>
                    <h5>Rp 500.000</h5>
                    <button className="hidden-button">Add to cart</button>
                    <div className="hidden-block">
                        <div className="hidden-block-links">
                            <img src={share}/>
                            <h3>Share</h3>
                        </div>
                        <div className="hidden-block-links">
                            <img src={heart}/>
                            <h3>Like</h3>
                        </div>
                    </div>
                </div>
                <div className="Featured-Products">
                    <img src={Grifo} alt="Grifo" className="product-picture"/>
                    <h4>Grifo</h4>
                    <p>Night lamp</p>
                    <h5>Rp 1.500.000</h5>
                    <button className="hidden-button">Add to cart</button>
                    <div className="hidden-block">
                        <div className="hidden-block-links">
                            <img src={share}/>
                            <h3>Share</h3>
                        </div>
                        <div className="hidden-block-links">
                            <img src={heart}/>
                            <h3>Like</h3>
                        </div>
                    </div>
                </div>
                <div className="Featured-Products">
                    <img src={Muggo} alt="Muggo" className="product-picture"/>
                    <img src={labelnew} className="product-label"/>
                    <h4>Muggo</h4>
                    <p>Small mug</p>
                    <h5>Rp 150.000</h5>
                    <button className="hidden-button">Add to cart</button>
                    <div className="hidden-block">
                        <div className="hidden-block-links">
                            <img src={share}/>
                            <h3>Share</h3>
                        </div>
                        <div className="hidden-block-links">
                            <img src={heart}/>
                            <h3>Like</h3>
                        </div>
                    </div>
                </div>
                <div className="Featured-Products">
                    <img src={Pingky} alt="Pingky" className="product-picture"/>
                    <img src={label50} className="product-label"/>
                    <h4>Pingky</h4>
                    <p>Cute bed set</p>
                    <div className="products-h5">
                        <h5>Rp 7.000.000</h5>
                        <h5 className="smaller">Rp 14.000.000</h5>
                    </div>
                    <button className="hidden-button">Add to cart</button>
                    <div className="hidden-block">
                        <div className="hidden-block-links">
                            <img src={share}/>
                            <h3>Share</h3>
                        </div>
                        <div className="hidden-block-links">
                            <img src={heart}/>
                            <h3>Like</h3>
                        </div>
                    </div>
                </div>
                <div className="Featured-Products">
                    <img src={Potty} alt="Potty" className="product-picture"/>
                    <img src={labelnew} className="product-label"/>
                    <h4>Potty</h4>
                    <p>Minimalist flower pot</p>
                    <h5>Rp 500.000</h5>
                    <button className="hidden-button">Add to cart</button>
                    <div className="hidden-block">
                        <div className="hidden-block-links">
                            <img src={share}/>
                            <h3>Share</h3>
                        </div>
                        <div className="hidden-block-links">
                            <img src={heart}/>
                            <h3>Like</h3>
                        </div>
                    </div>
                </div>
            </div>
            <button>Show more</button>
        </div>
    )
}

export default OurProducts;