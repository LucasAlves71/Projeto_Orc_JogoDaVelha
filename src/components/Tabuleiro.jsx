import React from 'react';
import Quadrado from './Quadrado';

const Tabuleiro = ({quadrados, onClick}) => (
    <div className="tabuleiro">
        {quadrados.map((valor, index) => (
            <Quadrado key={index} value={valor} onClick={() => onClick(index)} />
        ))}
    </div>
);

export default Tabuleiro;
