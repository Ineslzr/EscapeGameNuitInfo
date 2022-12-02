import React from 'react';
import masque from '../img/masque.jpg';
import couvert from '../img/couvert.jpg';
import couverture from '../img/couverture.jpg';
import cou_vert from '../img/cou_vert.png';

export default function QuatreImagesUnMot(){
    return(
        <div>
            <div>
                <h3>Quatres images Un mot </h3>
            </div>
            <div className="cover">
                <img src={masque}/>
                <img src={couvert}/>
                <img src={couverture}/>
                <img src={cou_vert}/>
            </div>
        </div>
    );
}