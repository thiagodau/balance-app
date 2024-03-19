import { useContext, useState } from "react";
import ItemsContext from "../contexts/ItemsContext";
import Item from "./Item";
import Amount from "./Amount";
import AnotherWeight from "./AnotherWeight";

import OptionsPrint from "./OptionsPrint";

export default function List() {
  const [items, setItems, getTotalAndSumDianteiro, getTotalAndSumTraseiro] =
    useContext(ItemsContext);

  const getDate = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return today.toLocaleDateString();
  };

  const removeItemOnList = (id) => {
    let messageWarning = "Tem certeza que deseja excluir esse item?";
    if (confirm(messageWarning) == true) {
      setItems((currentState) => {
        const newState = currentState.filter((item) => item.id !== id);
        localStorage.setItem("bapp-items", JSON.stringify(newState));
        return newState;
      });
    }
  };

  const [extra, setExtra] = useState("");

  const [amountExtra, setAmountExtra] = useState(0);

  const [showExtra, setShowExtra] = useState(false);

  return (
    <div className="list">
      <table>
        <thead>
          <tr>
            <th>{getDate()}</th>
            <th>Tipo</th>
            <th>Peso (Kg)</th>
            <th className="some">Ação</th>
          </tr>

          {items.length > 0
            ? items.map((item) => (
                <Item
                  key={item.id}
                  item={item}
                  removeItemOnList={() => removeItemOnList(item.id)}
                />
              ))
            : null}
        </thead>
      </table>
      <span className="ancora"></span>
      <hr />
      <Amount
        items={items}
        getTotalAndSumDianteiro={getTotalAndSumDianteiro}
        getTotalAndSumTraseiro={getTotalAndSumTraseiro}
        extra={extra}
        amountExtra={amountExtra}
      />
      <br />
      <div className="some">
        <input
          type="checkbox"
          id="showExtra"
          value={showExtra}
          onChange={() => {
            setShowExtra((currentState) => !currentState);
            let heightPage = document.body.scrollHeight;
            window.scrollTo(0, heightPage);
          }}
          style={{ cursor: "pointer" }}
        />

        <label htmlFor="showExtra" style={{ cursor: "pointer" }}>
          &nbsp; Outra pesagem &nbsp;
        </label>

        {showExtra ? (
          <>
            <AnotherWeight
              extra={extra}
              setExtra={setExtra}
              amountExtra={amountExtra}
              setAmountExtra={setAmountExtra}
            />
            &nbsp;
            <button
              onClick={() => {
                setShowExtra((currentState) => !currentState);
                let element = document.querySelector("#showExtra");
                element.checked = false;
              }}
            >
              Salvar
            </button>
          </>
        ) : null}
      </div>

      <br />
      <OptionsPrint />
    </div>
  );
}
