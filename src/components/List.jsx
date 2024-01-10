import { useContext, useState } from "react";
import ItemsContext from "../contexts/ItemsContext";

export default function List() {
  const [items, setItems, getTotalAndSumDianteiro, getTotalAndSumTraseiro] = useContext(ItemsContext);

  const removeItemOnList = (id) => {
    let messageWarning = "Tem certeza que deseja excluir esse item?";
    if (confirm(messageWarning) == true) {
      setItems((currentState) => currentState.filter((item) => item.id !== id));
    }
  };

  let totalGeralKg = (+getTotalAndSumDianteiro.totalKg + +getTotalAndSumTraseiro.totalKg).toFixed(3)

  return (
    <>
      <h3>Listagem</h3>
      {items.length > 0 ? (
        items.map((item) => (
          <div key={item.id}>
            <p>{item.part}</p>
            <p>{item.kg}</p>
            <p>
              <button onClick={() => removeItemOnList(item.id)}>Remover</button>
            </p>
          </div>
        ))
      ) : (
        <p>Não há items nessa lista.</p>
      )}
      Total de Dianteiro: {getTotalAndSumDianteiro.totalKg}KG e sua quantidade é {getTotalAndSumDianteiro.amount}
      <br />
      Total de Traseiro: {getTotalAndSumTraseiro.totalKg}KG e sua quantidade é {getTotalAndSumTraseiro.amount}
      <br />
      Soma total: {(totalGeralKg == 'NaN') ? 0 : totalGeralKg}KG
      <br />
      Total de Items: {items.length}
    </>
  );
}
