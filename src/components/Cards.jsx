import React, { useState } from "react";
import "./Cards.css";

function Cards() {
  const emojis = [
    "😸",
    "😸",
    "🦝",
    "🦝",
    "🦊",
    "🦊",
    "🐶",
    "🐶",
    "🐵",
    "🐵",
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🐮",
    "🐮",
  ];

  const [cardsEmbaralhados, setCardsEmbaralhados] = useState(
    emojis
      .sort(() => Math.random() - 0.5)
      .map((emoji, indice) => ({
        id: indice,
        emoji: emoji,
        estaVirado: false,
        estaCerto: false,
      }))
  );

  const [cardsVirados, setCardsVirados] = useState([]);
  const [bloqueio, setBloqueio] = useState(false);

  const handleClick = (indice) => {
    if (
      bloqueio ||
      cardsEmbaralhados[indice].estaVirado ||
      cardsEmbaralhados[indice].estaCerto
    ) {
      return;
    }

    const novosCards = cardsEmbaralhados.map((card, i) =>
      i === indice ? { ...card, estaVirado: true } : card
    );
    setCardsEmbaralhados(novosCards);

    const novosVirados = [...cardsVirados, indice];
    setCardsVirados(novosVirados);
  
    if (novosVirados.length === 2) {
      setBloqueio(true);
      setTimeout(() => checaIgualdade(novosVirados), 1000);
    }
  };

  const checaIgualdade = ([primeiroIndice, segundoIndice]) => {
    const novosCards = [...cardsEmbaralhados];
  
    if (novosCards[primeiroIndice].emoji === novosCards[segundoIndice].emoji) {
      novosCards[primeiroIndice].estaCerto = true;
      novosCards[segundoIndice].estaCerto = true;
    } else {
      novosCards[primeiroIndice].estaVirado = false;
      novosCards[segundoIndice].estaVirado = false;
    }
  
    setCardsEmbaralhados(novosCards);
    setCardsVirados([]);
    setBloqueio(false);
  };

  return (
    <div className="cards-container">
      {cardsEmbaralhados.map((card, indice) => (
        <div
          key={card.id}
          className={`card ${card.estaVirado ? "card-virado" : ""} ${
            card.estaCerto ? "acertou" : ""
          }`}
          onClick={() => handleClick(indice)}
        >
          {card.emoji}
        </div>
      ))}
    </div>
  );
}

export default Cards;
