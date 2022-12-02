import React from 'react';
import Crossword from '@jaredreisinger/react-crossword';

const data = {
    across: {
      1: {
        clue: 'Protection',
        answer: 'PRESERVATIF',
        row: 0,
        col: 0,
      },
      3: {
        clue : 'Sentiment vif qui pousse à aimer',
        answer: 'AMOUR',
        row:3,
        col:3
      }
    },
    down: {
      2: {
        clue: 'Protégez-vous pour l\'éviter',
        answer: 'SIDA',
        row: 0,
        col: 3,
      },
    },
  
};

export default function CrossWord(){
    return(
        <div className='crossWord'>
            <h3>Prendre la première lettre de chaque mot pour former un mot! Bonne chance.</h3>
            <Crossword data={data}/>;
        </div>
    );
}

