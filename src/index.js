import React, { useState } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

const Wrapper = styled.div`
  padding: 4em;
  text-align: center;
`;

function App() {
  const [temperature, setTemperature] = useState(20);

  return (
    <Wrapper>
      <Slider />
      <Temperature />
      <Water />
    </Wrapper>
  );

  function Slider() {
    return (
      <input
        type="range"
        min="-200"
        max="200"
        value={temperature}
        onChange={event => setTemperature(event.target.value)}
      />
    );
  }

  function Temperature() {
    return <h1>{temperature} °C</h1>;
  }

  function Water() {
    if (temperature < 0)
      return <img alt="" src="images/water-frozen.jpg" width="300" />;
    else if (temperature < 100)
      return <img alt="" src="images/water-liquid.jpg" width="300" />;
    else return <img alt="" src="images/water-gas.jpg" width="300" />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
