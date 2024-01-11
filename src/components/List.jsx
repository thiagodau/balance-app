import { useContext, useState } from "react";
import ItemsContext from "../contexts/ItemsContext";
import Item from "./Item";
import Amount from "./Amount";

export default function List() {
  const [items, setItems, getTotalAndSumDianteiro, getTotalAndSumTraseiro] =
    useContext(ItemsContext);

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
    <>
      <h3>Listagem</h3>
      {items.length > 0 ? (
        items.map((item) => (
          <Item
            key={item.id}
            item={item}
            removeItemOnList={() => removeItemOnList(item.id)}
          />
        ))
      ) : (
        <p>Não há items nessa lista.</p>
      )}
      <hr />
      <Amount
        items={items}
        getTotalAndSumDianteiro={getTotalAndSumDianteiro}
        getTotalAndSumTraseiro={getTotalAndSumTraseiro}
      />
      
    </>
  );
}
