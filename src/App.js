import "./styles.css";
import { Board } from "./Board";
import { useState } from "react";

export default function App() {
  const [winner, setWinner] = useState("");
  return (
    <div className="App">
      <div>
        <h2>Winner: {winner}</h2>
        <Board setWinner={setWinner} />
      </div>
    </div>
  );
}
