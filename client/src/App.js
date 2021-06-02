import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [dice, setDice] = useState([]);
  const [savedDice, setSavedDice] = useState([]);
  const [count, setCount] = useState(0);

  function rollDice() {
    let die = document.querySelectorAll(".dice");

    die.forEach((die) => {
      die.style.animation = "roll-dice 3s";
    });

    setTimeout(function () {
      let num = 0;
      let dice = [];
      while (num <= die.length) {
        dice[num] = Math.floor(Math.random() * (6 - 1) + 1);
        num += 1;
      }
      setDice(dice);
      die.forEach((die, index) => {
        die.innerHTML = `${dice[index]}`;
        die.style.animation = "";
      });
      console.log(dice);
    }, 3000);
    setCount((curr) => (curr += 1));
  }

  function saveDice(id) {
    let saveDice = document.getElementById(`${id}`);
    if (saveDice.className === "saved-dice") {
      let pool = document.querySelector("#dice-cont");
      pool.appendChild(saveDice);
      saveDice.className = "dice";
    } else {
      let saved = document.querySelector(".saved");
      saved.appendChild(saveDice);
      saveDice.className = "saved-dice";
    }
  }

  useEffect(() => {
    setSavedDice(document.querySelectorAll(".saved-dice"));
    if (count === 3) {
      document.querySelector(".roll-btn").style.display = "none";
      //will display button again once turn has been used on the card and dice reset for next player/turn
    }
  }, [savedDice]);

  return (
    <div className="App">
      <h1> Lets Play Yahtzee!</h1>
      <div id="dice-cont">
        <button
          onClick={(e) => {
            e.preventDefault();
            saveDice(0);
          }}
          className="dice"
          id="0"
        ></button>
        <button
          onClick={(e) => {
            e.preventDefault();
            saveDice(1);
          }}
          className="dice"
          id="1"
        ></button>
        <button
          onClick={(e) => {
            e.preventDefault();
            saveDice(2);
          }}
          className="dice"
          id="2"
        ></button>
        <button
          onClick={(e) => {
            e.preventDefault();
            saveDice(3);
          }}
          className="dice"
          id="3"
        ></button>
        <button
          onClick={(e) => {
            e.preventDefault();
            saveDice(4);
          }}
          className="dice"
          id="4"
        ></button>
      </div>
      <div className="saved">Saved Dice</div>
      <button className="roll-btn" onClick={rollDice}>
        Role Dice
      </button>
    </div>
  );
}

export default App;
