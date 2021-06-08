import React from "react";
import { Table } from "./Table";
const GameCard = () => {
  return (
    <table>
      PLAYER CARD
      <Table
        title={"Upper Section"}
        descript={"Scoring"}
        player1={"Player 1"}
        player2={"Player 2"}
        player3={"Player 3"}
      />
      <Table
        title={"Aces = 1"}
        descript={"Count and add only Aces"}
        player1={""}
        player2={""}
        player3={""}
      />
      <Table
        title={"Twos = 2"}
        descript={"Count and add only Twos"}
        player1={""}
        player2={""}
        player3={""}
      />
      <Table
        title={"Threes = 3"}
        descript={"Count and add only Threes"}
        player1={""}
        player2={""}
        player3={""}
      />
      <Table
        title={"Fours = 4"}
        descript={"Count and add only Fours"}
        player1={""}
        player2={""}
        player3={""}
      />
      <Table
        title={"Fives = 5"}
        descript={"Count and add only Fives"}
        player1={""}
        player2={""}
        player3={""}
      />
      <Table
        title={"Sixes = 6"}
        descript={"Count and add only Sixes"}
        player1={""}
        player2={""}
        player3={""}
      />
      <Table
        title={"Total Score"}
        descript={"---->"}
        player1={""}
        player2={""}
        player3={""}
      />
      <Table
        title={"Bonus if total score is 63 or over"}
        descript={"Score 35"}
        player1={""}
        player2={""}
        player3={""}
      />
      <Table
        title={"Total Upper Section"}
        descript={"---->"}
        player1={""}
        player2={""}
        player3={""}
      />
      <tr>
        <th>Lower Section</th>
      </tr>
      <Table
        title={"3 of a Kind"}
        descript={"Add total of all dice"}
        player1={""}
        player2={""}
        player3={""}
      />
      <Table
        title={"4 of a Kind"}
        descript={"Add total of all dice"}
        player1={""}
        player2={""}
        player3={""}
      />
      <Table
        title={"Full House"}
        descript={"Score 25"}
        player1={""}
        player2={""}
        player3={""}
      />
      <Table
        title={"Small Straight (seq. 4)"}
        descript={"Score 30"}
        player1={""}
        player2={""}
        player3={""}
      />
      <Table
        title={"Large straight (seq.5)"}
        descript={"Score 40"}
        player1={""}
        player2={""}
        player3={""}
      />
      <Table
        title={"Yahtzee"}
        descript={"Score 50"}
        player1={""}
        player2={""}
        player3={""}
      />
      <Table
        title={"Chance"}
        descript={"Add all dice"}
        player1={""}
        player2={""}
        player3={""}
      />
      <Table
        title={"Yahtzee Bonus"}
        descript={"X for each bonus"}
        player1={""}
        player2={""}
        player3={""}
      />
      <Table
        title={"Yahtzee Bonus"}
        descript={"Score 100 per X"}
        player1={""}
        player2={""}
        player3={""}
      />
      <Table
        title={"Total of Lower"}
        descript={"---->"}
        player1={""}
        player2={""}
        player3={""}
      />
      <Table
        title={"Total of Upper"}
        descript={"---->"}
        player1={""}
        player2={""}
        player3={""}
      />
      <Table
        title={"Grand Total"}
        descript={"---->"}
        player1={""}
        player2={""}
        player3={""}
      />
    </table>
  );
};

export default GameCard;
