import React from 'react';

import Confetti from 'react-confetti';

export default function SecretPage(){

    return (
        <div>
            <Confetti
                width={1600}
                height={750}
            />
            <div className="secret">
                <h1>Bravo vous avez réussi !</h1>
            </div>
        </div>
        
    )
}