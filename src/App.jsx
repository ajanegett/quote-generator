import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [data, setData] = useState(false);
  const [change, setChange] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.quotable.io/random?author=friedrich-nietzsche|nikola-tesla|pythagoras|socrates|plato|plotinus|andrew-tate|napoleon|marcus-aurelius|alan-watts|jocko-willink|joe-rogan|elon-musk|leonardo-da-vinci|musashi-miyamoto|alexander-the-great|the-budha|muhammad-ali|carl-jung|steve-jobs|joseph-campbell|albert-einstein|thomas-jefferson|bruce-lee|lao-tzu"
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response);
      });
  }, [change]);

  function getQuote() {
    setChange(() => {
      return change ? false : true;
    });
  }

  return (
    <div className="flex flex-col items-center">
      <div>
        <div className="content p-6 pb-4">{data && data.content}</div>
        <div className="author p-2 text-center">{data && data.author}</div>
      </div>
      <button onClick={getQuote} className="bg-black block p-2 ">
        Generate Quote
      </button>
    </div>
  );
}

export default App;
