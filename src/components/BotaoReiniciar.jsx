import React from 'react';

const BotaoReiniciar = ({onClick, texto}) => (
    <button className="botao-reiniciar" onClick={onClick}>
        {texto}
    </button>
);

export default BotaoReiniciar;
