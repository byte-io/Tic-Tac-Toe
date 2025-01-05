import { useEffect, useState } from "react";

export function Board({ setWinner }) {
  const [value, setValue] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  useEffect(() => {
    findWinner(value);
  }, [value]);

  function handleClick(index) {
    if (!value[index]) {
      value[index] = xTurn ? "X" : "O";
      setValue([...value]);
      setXTurn(!xTurn);
    }
  }

  function findWinner(value) {
    const winningLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i <= 7; i++) {
      console.log(i);
      const [a, b, c] = winningLine[i];
      if (
        value[a] === "X" &&
        value[a] === value[b] &&
        value[b] === value[c] &&
        value[a] === value[c]
      ) {
        setWinner("X");
      } else if (
        value[a] === "O" &&
        value[a] === value[b] &&
        value[b] === value[c] &&
        value[a] === value[c]
      ) {
        setWinner("O");
      }
    }
  }

  return (
    <div className="board">
      <div className="box" onClick={() => handleClick(0)}>
        {value[0]}
      </div>
      <div className="box" onClick={() => handleClick(1)}>
        {value[1]}
      </div>
      <div className="box" onClick={() => handleClick(2)}>
        {value[2]}
      </div>
      <div className="box" onClick={() => handleClick(3)}>
        {value[3]}
      </div>
      <div className="box" onClick={() => handleClick(4)}>
        {value[4]}
      </div>
      <div className="box" onClick={() => handleClick(5)}>
        {value[5]}
      </div>
      <div className="box" onClick={() => handleClick(6)}>
        {value[6]}
      </div>
      <div className="box" onClick={() => handleClick(7)}>
        {value[7]}
      </div>
      <div className="box" onClick={() => handleClick(8)}>
        {value[8]}
      </div>
    </div>
  );
}
