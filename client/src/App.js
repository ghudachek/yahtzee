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
    <div>
      <h1> Lets Play Yahtzee!</h1>
      <div className="App">
        <section id="player-area">
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
        </section>
        <section id="player-card">
          <table>
            {" "}
            PLAYER CARD
            <tr>
              <th>Upper Section</th>
              <th>Scoring</th>
              <th>Player 1</th>
              <th>Player 2</th>
              <th>Player 3</th>
            </tr>
            <tr>
              <th>Aces=1</th>
              <th>Count and add only Aces</th>
              <th className="p1"></th>
              <th className="p2"></th>
              <th className="p3"></th>
            </tr>
            <tr>
              <th>Twos=2</th>
              <th>Count and add only Twos</th>
              <th className="p1"></th>
              <th className="p2"></th>
              <th className="p3"></th>
            </tr>
            <tr>
              <th>Threes=3</th>
              <th>Count and add only Threes</th>
              <th className="p1"></th>
              <th className="p2"></th>
              <th className="p3"></th>
            </tr>
            <tr>
              <th>Fours=4</th>
              <th>Count and add only Fours</th>
              <th className="p1"></th>
              <th className="p2"></th>
              <th className="p3"></th>
            </tr>
            <tr>
              <th>Fivess=5</th>
              <th>Count and add only Fives</th>
              <th className="p1"></th>
              <th className="p2"></th>
              <th className="p3"></th>
            </tr>
            <tr>
              <th>Sixes=6</th>
              <th>Count and add only Sixes</th>
              <th className="p1"></th>
              <th className="p2"></th>
              <th className="p3"></th>
            </tr>
            <tr>
              <th>Total Score</th>
              <th> ----> </th>
              <th className="p1"></th>
              <th className="p2"></th>
              <th className="p3"></th>
            </tr>
            <tr>
              <th>Bonus if total score is 63 or over</th>
              <th>Score 35</th>
              <th className="p1"></th>
              <th className="p2"></th>
              <th className="p3"></th>
            </tr>
            <tr>
              <th>Total Upper Section</th>
              <th> ----></th>
              <th className="p1"></th>
              <th className="p2"></th>
              <th className="p3"></th>
            </tr>
            <tr>
              <th>Lower Section</th>
            </tr>
            <tr>
              <th>3 of a Kind</th>
              <th> Add total of all Dice</th>
              <th className="p1"></th>
              <th className="p2"></th>
              <th className="p3"></th>
            </tr>
            <tr>
              <th>4 of a Kind</th>
              <th> Add total of all Dice</th>
              <th className="p1"></th>
              <th className="p2"></th>
              <th className="p3"></th>
            </tr>
            <tr>
              <th>Full House</th>
              <th>Score 25</th>
              <th className="p1"></th>
              <th className="p2"></th>
              <th className="p3"></th>
            </tr>
            <tr>
              <th>Small Straight (seq. of 4)</th>
              <th>Score 30</th>
              <th className="p1"></th>
              <th className="p2"></th>
              <th className="p3"></th>
            </tr>
            <tr>
              <th>Large Straight(seq. of 5)</th>
              <th>Score 40</th>
              <th className="p1"></th>
              <th className="p2"></th>
              <th className="p3"></th>
            </tr>
            <tr>
              <th>YAHTZEE(5 of a kind)</th>
              <th>Score 50</th>
              <th className="p1"></th>
              <th className="p2"></th>
              <th className="p3"></th>
            </tr>
            <tr>
              <th>Chance</th>
              <th>Add all dice</th>
              <th className="p1"></th>
              <th className="p2"></th>
              <th className="p3"></th>
            </tr>
            <tr>
              <th>Yahtzee bonus</th>
              <th>X for each bonus</th>
              <th className="p1"></th>
              <th className="p2"></th>
              <th className="p3"></th>
            </tr>
            <tr>
              <th>Yatzhee Bonus</th>
              <th>Score 100 per X</th>
              <th className="p1"></th>
              <th className="p2"></th>
              <th className="p3"></th>
            </tr>
            <tr>
              Total of Lower
              <th>----></th>
              <th className="p1"></th>
              <th className="p2"></th>
              <th className="p3"></th>
            </tr>
            <tr>
              <th>Total of Upper</th>
              <th>----></th>
              <th className="p1"></th>
              <th className="p2"></th>
              <th className="p3"></th>
            </tr>
            <tr>
              <th>Grand Total</th>
              <th>----></th>
              <th className="p1"></th>
              <th className="p2"></th>
              <th className="p3"></th>
            </tr>
          </table>
        </section>
      </div>
    </div>
  );
}

export default App;
