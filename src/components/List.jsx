import { useContext } from "react";
import ItemsContext from "../contexts/ItemsContext";
import Item from "./Item";
import Amount from "./Amount";

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
      <hr />
      <Amount
        items={items}
        getTotalAndSumDianteiro={getTotalAndSumDianteiro}
        getTotalAndSumTraseiro={getTotalAndSumTraseiro}
      />
      <div className="section-buttons some">
        <button onClick={() => window.print()}>Imprimir</button>
        <button onClick={() => window.print()}>Salvar PDF</button>
      </div>
    </div>
  );
}
