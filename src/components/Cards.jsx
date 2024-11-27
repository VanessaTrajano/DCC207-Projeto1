import './Cards.css'

function Cards() {
  const emojis = [ // usando emojis como exemplo para teste
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

  let cardsVirados = emojis; // por enquanto deixaremos assim para estilização

  return (
    <div className="cards-container">
      {cardsVirados.map((item) => {
        return(
            <div className="card">
                {item}
            </div>
        )
      })}
    </div>
  );
}

export default Cards;
