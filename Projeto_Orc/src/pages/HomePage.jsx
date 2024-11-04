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
            <h1>Jogo da Velha</h1>
            <p>Escolha o modo de jogo:</p>
            <button onClick={() => escolherModo('singleplayer')}>Single-Player</button>
            <button onClick={() => escolherModo('multiplayer')}>Multiplayer</button>
        </div>
    );
};

export default HomePage;
