import { useContext, useState } from "react";
import ItemsContext from "../contexts/ItemsContext";
import Item from "./Item";

export default function List() {
  const [items, setItems, getTotalAndSumDianteiro, getTotalAndSumTraseiro] =
    useContext(ItemsContext);

  const removeItemOnList = (id) => {
    let messageWarning = "Tem certeza que deseja excluir esse item?";
    if (confirm(messageWarning) == true) {
      setItems((currentState) => {
        const newState = currentState.filter((item) => item.id !== id);
        localStorage.setItem('bapp-items', JSON.stringify(newState))
        return newState
      });
    }
  };

  let totalGeralKg = (
    +getTotalAndSumDianteiro.totalKg + +getTotalAndSumTraseiro.totalKg
  ).toFixed(3);

  return (
    <>
      <h3>Listagem</h3>
      {items.length > 0 ? (
        items.map((item) => (
          <Item item={item} removeItemOnList={() => removeItemOnList(item.id)} key={item.id} />
        ))
      ) : (
        <p>Não há items nessa lista.</p>
      )}
      Total de Dianteiro: {getTotalAndSumDianteiro.totalKg}KG e sua quantidade é{" "}
      {getTotalAndSumDianteiro.amount}
      <br />
      Total de Traseiro: {getTotalAndSumTraseiro.totalKg}KG e sua quantidade é{" "}
      {getTotalAndSumTraseiro.amount}
      <br />
      Soma total: {totalGeralKg == "NaN" ? 0 : totalGeralKg}KG
      <br />
      Total de Items: {items.length}
    </>
  );
}
