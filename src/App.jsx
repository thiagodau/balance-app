import "./App.css";
import { useState } from "react";

import Settings from "./components/Settings";
import ConnectionWithBalance from "./components/ConnectionWithBalance";
import Panel from "./components/Panel";
import List from "./components/List";

import ItemsContext from "./contexts/ItemsContext";
import useGetTotalKg from "./hooks/useGetTotalKg";

function App() {
  const [baudRate, setBaudRate] = useState(9600);
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
        <ConnectionWithBalance baudRate={+baudRate} />
        <hr />
        <Panel />
        <hr />
        <List />
        <hr />
      </ItemsContext.Provider>
    </div>
  );
}

export default App;
