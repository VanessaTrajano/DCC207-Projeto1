//import './Cards.css'

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
    <div>
      {cardsVirados.map((item) => {
        return(
            <div>
                {item}
            </div>
        )
      })}
    </div>
  );
}

export default Cards;
