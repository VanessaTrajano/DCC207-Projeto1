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

  function checaIgualdade() {
    const novosCards = [...cardsEmbaralhados];

    if (novosCards[0].emoji === novosCards[1].emoji) {
      novosCards[0].estaCerto = true;
      novosCards[1].estaCerto = true;
    } else {
      novosCards[0].estaVirado = false;
      novosCards[1].estaVirado = false;
    }

    setCardsEmbaralhados(novosCards);
    setCardsVirados([]);
  }

  function handleClick(indice) {
    if (cardsVirados.length < 2 && !cardsEmbaralhados[indice].estaVirado) {
      const novosCards = cardsEmbaralhados.map((card, i) =>
        i === indice ? { ...card, estaVirado: true } : card
      );

      setCardsEmbaralhados(novosCards);
      setCardsVirados([...cardsVirados, indice]);

      if (cardsVirados.length === 1) {
        setTimeout(checaIgualdade, 500);
      }
    }
  }

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
