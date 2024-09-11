import { useState } from "react";
import React from "react";
const initializeGame = () => Array(9).fill(null);

const useTicTaxToe = () => {
  const [board, setBoard] = useState(initializeGame());
  const [isXNext, setIsXNext] = useState(true);
  const WINNER_PATTERN = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 3, 6],
  ];

  const verifyingWinner = (currentBoard) => {
    for (let item of WINNER_PATTERN) {
      const [a, b, c] = item;
      if (
        currentBoard[a] !== null &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };
  const getWinner = () => {
    const winner = verifyingWinner(board);
    if (!board.includes(null)) return "draw";
    if (winner) return `Winner : Player ${winner}`;
    return `Player ${isXNext ? "X" : "O"} turn`;
  };

  const handleClick = (index) => {
    const winner = verifyingWinner(board);
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setIsXNext(!isXNext);
    setBoard(newBoard);

  };

  const resetGame = () => {
    setBoard(initializeGame());
    setIsXNext(true);
  };

  return { isXNext, board, verifyingWinner, getWinner, handleClick, resetGame };
};

export default useTicTaxToe;
