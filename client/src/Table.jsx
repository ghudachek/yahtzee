import React from "react";

export const Table = (props) => {
  // if input make card input or else make buttons

  return (
    <tr>
      <th>{props.title}</th>
      <th>{props.descript}</th>
      <th className="p3">
        {props.player1.length > 0 ? (
          <p>{props.player1}</p>
        ) : (
          <input type="number" />
        )}
      </th>
      <th className="p3">
        {props.player2.length > 0 ? (
          <p>{props.player2}</p>
        ) : (
          <input type="number" />
        )}
      </th>
      <th className="p3">
        {props.player3.length > 0 ? (
          <p>{props.player3}</p>
        ) : (
          <input type="number" />
        )}
      </th>
    </tr>

    // <tr>
    //   <th>{props.title}</th>
    //   <th>{props.descript}</th>
    //   <th className="p3">
    //     <button>{props.player1}</button>
    //   </th>
    //   <th className="p3">
    //     <button>{props.player2}</button>
    //   </th>
    //   <th className="p3">
    //     <button>{props.player3}</button>
    //   </th>
    // </tr>
  );
};
