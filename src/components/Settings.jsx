import { useState } from "react";

export default function Settings() {
  const [showSettings, setShowSettings] = useState(false);
  const [baudRate, setBaudRate] = useState(9600);

  const handleChange = (event) => {
    console.log(event.target.value);
    setBaudRate(event.target.value);
  };

  return (
    <>
      <input
        type="checkbox"
        id="showSettings"
        value={showSettings}
        onChange={() => setShowSettings((currentState) => !currentState)}
      />
      <label htmlFor="showSettings">Exibir Configurações</label>
      {showSettings && (
        <>
          <h2>Selecione as configurações: </h2>
          <p>
            Para a balança possa conversar com o sistema precisamos do BaudRate.
            Por padrão é 9600.
          </p>
          <select value={baudRate} onChange={handleChange}>
            <option value="1200">1200</option>
            <option value="4800">4800</option>
            <option value="9600">9600</option>
          </select>
        </>
      )}
    </>
  );
}
