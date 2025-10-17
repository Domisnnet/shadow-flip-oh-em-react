import React, { useState } from 'react';

// IMPORTAÇÃO DE IMAGENS
import cosmosSentinel from '../assets/cosmos-sentinel.png';
import nebuladragon from '../assets/nebuladragon.png';
import cyberbladePaladin from '../assets/cyberblade-paladin.png';
import mechadragon from '../assets/mechadragon.png';
import archmage from '../assets/archmage.png';
import aegisKnight from '../assets/aegis-knight.png';
import stormbringer from '../assets/stormbringer.png';
import fundoCarta from '../assets/fundo-carta.jpg'; // ⬅️ adiciona o verso da carta

const cardImages = {
  'cosmos-sentinel.png': cosmosSentinel,
  'nebuladragon.png': nebuladragon,
  'cyberblade-paladin.png': cyberbladePaladin,
  'mechadragon.png': mechadragon,
  'archmage.png': archmage,
  'aegis-knight.png': aegisKnight,
  'stormbringer.png': stormbringer,
};

function Card({ data, isSelected }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { nome, fundo, nivel, imagem, alt, descricao, atk, def } = data;
  const cardClasses = `cartao ${fundo} ${isSelected ? 'selecionado' : ''}`;

  const totalEstrelas = nivel;
  const estrelas = Array.from({ length: totalEstrelas }).map((_, index) => (
    <span key={index} className="estrela"></span>
  ));

  const imageSrc = cardImages[imagem];

  // 🔄 alterna o estado de flip ao clicar
  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <li>
      <div className={cardClasses} onClick={handleFlip}>
        <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
          {/* FRENTE */}
          <div className="card-front">
            <h2 className="nome">{nome}</h2>
            <div className="nivel-carta">{estrelas}</div>
            <img src={imageSrc} alt={alt} className="imagem-carta" />
            <div className="informacoes">
              <p className="descricao">{descricao}</p>
              <div className="informacoes-ataque">
                <span>ATK/ {atk}</span>
                <span>DEF/ {def}</span>
              </div>
            </div>
          </div>

          {/* VERSO */}
          <div
            className="card-back"
            style={{ backgroundImage: `url(${fundoCarta})` }}
          ></div>
        </div>
      </div>
    </li>
  );
}

export default Card;