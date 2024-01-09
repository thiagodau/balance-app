import "./App.css";
import { useState } from "react";


import Settings from "./components/Settings";
import ConnectionWithBalance from "./components/ConnectionWithBalance";
import Panel from "./components/Panel";
import List from "./components/List"; 
import ItemsContext from "./contexts/ItemsContext";


function App() {
  const [baudRate, setBaudRate] = useState(9600);
  const [items, setItems] = useState([]);

  return (
    <ItemsContext.Provider value={[items, setItems]}>
      <h1>Sistema de Pesagem com Webserial</h1>
      <hr />
      <Settings baudRate={baudRate} setBaudRate={setBaudRate} />
      <hr />
      <ConnectionWithBalance baudRate={baudRate} />
      <hr />
      <Panel />
      <hr />
      <List items={items} setItems={setItems} />
    </ItemsContext.Provider>
  );
}

export default App;
