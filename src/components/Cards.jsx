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

  let cardsVirados = [];
  let cardsEmbaralhados = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

  return (
    <div className="cards-container">
      {cardsEmbaralhados.map((item) => {
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
