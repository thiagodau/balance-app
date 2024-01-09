import { useState } from "react";

import useHandleChange from "../hooks/useHandleChange";

export default function Settings({ baudRate, setBaudRate }) {
  const [showSettings, setShowSettings] = useState(false);

  const handleChange = useHandleChange(setBaudRate);

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
          <label>BaudRate: </label>
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
