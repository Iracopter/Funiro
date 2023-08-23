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
                    <div className="item1"><img src={share1} alt="furniture"/></div>
                    <div className="item2"><img src={share2} alt="furniture"/></div>
                    <div className="item3"><img src={share3} alt="furniture"/></div>  
                    <div className="item4"><img src={share4} alt="furniture"/></div>
                </div>
                <img src={share5} alt="furniture" className="furniture-photo"/>
                <div className="furniture-block2">
                    <div className="item6"><img src={share6} alt="furniture"/></div>
                    <div className="item7"><img src={share7} alt="furniture"/></div>
                    <div className="item8"><img src={share8} alt="furniture"/></div>  
                    <div className="item9"><img src={share9} alt="furniture"/></div>
                </div>
            </div>
            <div className="line"></div>
        </div>
    )
}

export default Share;