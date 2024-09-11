import React from "react";
import useTicTaxToe from "../Hooks/use-Tic-Tac-Toe";
import "../App.css";

const TicTacToe = () => {
  const { isXNext, board, verifyingWinner, getWinner, handleClick, resetGame } =
    useTicTaxToe();
  let MSG = getWinner();
  return (
    <div>
      <div className="nav">
        <h1>
          <span>#</span>TicTacToe
        </h1>
        <h2 className={isXNext ? "x-f" : "o-f"}>{MSG}</h2>
        <button className="reset-btn" onClick={() => resetGame()}>
          RESET
        </button>
      </div>
      <div className="Main-Container">
        <div className="Game-Container">
          {board.map((item, index) => {
            return (
              <button
                className={`cell +  ${
                  item === null ? "disable" : item === "X" ? "x-f" : "o-f"
                }`}
                key={index}
                onClick={() => handleClick(index)}
                disabled={item !== null}
              >
                {item && item ? item : "#"}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
