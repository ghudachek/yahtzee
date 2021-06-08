import React from "react";
import { useState, useEffect } from "react";

const Logic = (props) => {
  const [scores, setScores] = useState([]);
  const [p1, setP1] = useState([]);
  const [p2, setP2] = useState([]);
  const [p3, setP3] = useState([]);

  let scores = [];

  function upperSecMath(num) {
    let sum = 0;
    props.dice.map((die) => {
      if (die === num) {
        sum += die;
      }
    });
    scores[num] = sum;
  }

  function ofAKind() {
    // check if there are four of the same number in the dice.
    // or if there are three of the same number in the dice.
  }

  function fullhouse() {
    //check for 2 of a kind && three of a kind (must have both)
  }

  function sequences() {
    //check for seq of 4 ie 1234 2345 3456
    //also check for seq of 5 ie 12345 23456
  }

  function yahtzee() {
    //check if all numbers are the same.
  }

  function chance() {
    //add all die up together.
  }

  return <div></div>;
};

export default Logic;
