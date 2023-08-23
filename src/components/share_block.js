import share1 from '../assets/share1.png';
import share2 from '../assets/share2.png';
import share3 from '../assets/share3.png';
import share4 from '../assets/share4.png';
import share5 from '../assets/share5.png';
import share6 from '../assets/share6.png';
import share7 from '../assets/share7.png';
import share8 from '../assets/share8.png';
import share9 from '../assets/share9.png';

function Share(){
    return(
        <div className="share-wrapper">
            <h3>Share your setup with</h3>
            <h2>#FuniroFurniture</h2>
            <div className="furniture-block">
                <div className="furniture-block1">
                    <div><img src={share1} alt="furniture" className="item1"/></div>
                    <div><img src={share2} alt="furniture" className="item2"/></div>
                    <div><img src={share3} alt="furniture" className="item3"/></div>  
                    <div><img src={share4} alt="furniture" className="item4"/></div>
                </div>
                <img src={share5} alt="furniture" className="furniture-photo"/>
                <div className="furniture-block2">
                    <div><img src={share6} alt="furniture" className="item6"/></div>
                    <div><img src={share7} alt="furniture" className="item7"/></div>
                    <div><img src={share8} alt="furniture" className="item8"/></div>  
                    <div><img src={share9} alt="furniture" className="item9"/></div>
                </div>
            </div>
            <div className="line"></div>
        </div>
    )
}

export default Share;
