import trophy from '../assets/trophy.png';
import guarantee from '../assets/guarantee.png';
import shipping from '../assets/shipping.png';
import support from '../assets/customer-support.png';

function Feature(){
    return(
        <div className="feature">
            <div className="feature-group">
                <img src={trophy} alt="trophy"/>
                <div>
                    <h4>High Quality</h4>
                    <p>crafted from top materials</p>
                </div>
            </div>
            <div className="feature-group">
                <img src={guarantee} alt="guarantee"/>
                <div>
                    <h4>Warrany Protection</h4>
                    <p>Over 2 years</p>
                </div>
            </div>
            <div className="feature-group">
                <img src={shipping} alt="shipping"/>
                <div>
                    <h4>Free Shipping</h4>
                    <p>Order over 150 $</p>
                </div>
            </div>
            <div className="feature-group">
                <img src={support} alt="support"/>
                <div>
                    <h4>24 / 7 Support</h4>
                    <p>Dedicated support</p>
                </div>
            </div>
        </div>
    )
}

export default Feature;