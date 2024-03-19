import "./App.css";
import { useEffect, useState } from "react";

import Settings from "./components/Settings";
import Connection from "./components/Connection";
import Panel from "./components/Panel";
import List from "./components/List";

import ItemsContext from "./contexts/ItemsContext";
import useGetTotalKg from "./hooks/useGetTotalKg";

import logomarca from "./assets/logomarca-sf.jpg";

import { BadgeInfo } from "lucide-react";

function App() {
  const [baudRate, setBaudRate] = useState(9600);
  const [kilograma, setKilograma] = useState(0);
  const [statusBalance, setStatusBalance] = useState(false);
  const [stability, setStability] = useState(false);

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
        <section className="header some">
          <div className="header-menu">
            <div className="header-logo">
              <img
                src={logomarca}
                alt="Logomarca Casa de Carnes São Francisco"
              />
              <h1>
                Casa de Carnes São Francisco <br />{" "}
                <span style={{ color: "#212b40" }}>Sistema de Pesagem</span>
              </h1>
            </div>
            <Connection
              baudRate={+baudRate}
              setKilograma={setKilograma}
              statusBalance={statusBalance}
              setStatusBalance={setStatusBalance}
              stability={stability}
              setStability={setStability}
            />
          </div>
          {statusBalance ? (
            <Panel kilograma={kilograma} setItems={setItems} stability={stability}/>
          ) : (
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                gap: ".5rem",
                marginTop: ".5rem",
                padding: "1rem",
                border: "1px solid #fff",
                borderRadius: "0.5rem",
                backgroundColor: "#03A9F4",
                color: "#fff",
                fontSize: "1rem",
              }}
            >
              <BadgeInfo className="transparent" />
              Para começar conecte o cabo da balança no computador em seguida clique no botão Conectar a Balança.
            </h3>
          )}
        </section>
        {
          statusBalance ? (
            <List />
          ) : null
        }
      </ItemsContext.Provider>
    </div>
  );
}

export default App;
