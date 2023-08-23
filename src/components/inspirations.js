import insp1 from '../assets/insp1.png';
import insp2 from '../assets/insp2.png';
import insp3 from '../assets/insp3.png';
import indicator from '../assets/Indicator.png';

function Inspirations(){
    return(
        <div className="inspirations">
            <div className="insp-information">
                <h2>50+ Beautiful rooms 
                    inspiration</h2>
                <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>    
                <button>Explore More</button>
            </div>
            <div className="img-insp">
                <img src={insp1} alt="insp1" className="insp1"/>
                <img src={insp2} alt="insp2" className="insp2"/>
                <img src={insp3} alt="insp3" className="insp3"/>
                <div className="img-insp-info">
                    <h5>01 — Bed Room</h5>
                    <h3>Inner Peace</h3>
                </div>
                <button className="img-insp-button">→</button>
                <img src={indicator} alt="indicator" className="indicator"/>
                <button className="img-insp-button1"></button>
            </div>
        </div>
    )
}

export default Inspirations;