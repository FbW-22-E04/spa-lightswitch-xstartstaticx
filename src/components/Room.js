import { useState } from "react";
import "./Room.css";

function Room() {
  const [lightOn, setLightOn] = useState(true);

  const lightHandler = () => {
    setLightOn(!lightOn);
  };

  return (
    <div className={`room ${lightOn === true ? "lit" : "dark"}`}>
      <button onClick={lightHandler}>Light Switch</button>

      {lightOn === true ? <p>The room is lit</p> : <p>The room is dark</p>}
    </div>
  );
}

export default Room;
