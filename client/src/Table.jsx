import React from "react";

export const Table = (props) => {
  return (
    <tr>
      <th>{props.title}</th>
      <th>{props.descript}</th>
      <th className="p3">
        <button>{props.player1}</button>
      </th>
      <th className="p3">
        <button>{props.player2}</button>
      </th>
      <th className="p3">
        <button>{props.player3}</button>
      </th>
    </tr>
  );
};
