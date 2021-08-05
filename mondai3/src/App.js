import React, { useState } from "react";
import "./mondai3.css";

function App() {
  const [color, setColor] = useState("black");

  const clickButton = () => {
    if (color === "blue") {
      setColor("green");
    } else {
      setColor("black");
    }
  };

  const hovarButton = () => {
    setColor("blue");
  };

  const leaveButton = () => {
    setColor("black");
  };

  return (
    <div
      class="button"
      href="#"
      style={{ background: color }}
      onClick={clickButton}
      onMouseEnter={hovarButton}
      onMouseLeave={leaveButton}
    >
      <p>Button</p>
    </div>
  );
}

export default App;
