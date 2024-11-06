import React from 'react';
import {useNavigate} from 'react-router-dom';

const HomePage = ({setModoJogo}) => {
    const navigate = useNavigate();

    const escolherModo = (modo) => {
        setModoJogo(modo); 
        navigate('/cadastro'); 
    };

    return (
        <div className="home-page">
            <h1 className='Titulo'>Jogo da Velha</h1>
            <div className='botoes-container'>
            <button onClick={() => escolherModo('singleplayer')} className='Botão Primeira'>Single-Player</button>
            <button onClick={() => escolherModo('multiplayer')}className='Botão Segunda'>Multiplayer</button>
            </div>
        </div>
    );
};

export default HomePage;
