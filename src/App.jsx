import "./App.css";
import { useState } from "react";

import Settings from "./components/Settings";
import Connection from "./components/Connection";
import Panel from "./components/Panel";
import List from "./components/List";

import ItemsContext from "./contexts/ItemsContext";
import useGetTotalKg from "./hooks/useGetTotalKg";

function App() {
  const [baudRate, setBaudRate] = useState(9600);
  const [kilograma, setKilograma] = useState(0);
  const [statusBalance, setStatusBalance] = useState(false);

  const [items, setItems] = useState(() => {
    const storageItems = localStorage.getItem("bapp-items");
    if (!storageItems) return [];
    return JSON.parse(storageItems);
  });

  const getTotalAndSumDianteiro = useGetTotalKg(items, "Dianteiro");
  const getTotalAndSumTraseiro = useGetTotalKg(items, "Traseiro");

  return (
    <div className="container">
      <ItemsContext.Provider
        value={[
          items,
          setItems,
          getTotalAndSumDianteiro,
          getTotalAndSumTraseiro,
        ]}
      >
        <h1>Sistema de Pesagem com Webserial</h1>
        <hr />
        <Settings baudRate={+baudRate} setBaudRate={setBaudRate} />
        <hr />
        <Connection
          baudRate={+baudRate}
          setKilograma={setKilograma}
          statusBalance={statusBalance}
          setStatusBalance={setStatusBalance}
        />
        <hr />
        {statusBalance ? (
          <Panel kilograma={kilograma} setItems={setItems} />
        ) : (
          <h4>Conecte-se a balança.</h4>
        )}
        <hr />
        <List />

        <hr />
      </ItemsContext.Provider>
    </div>
  );
}

export default App;
