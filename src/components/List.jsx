import { useContext } from "react";
import ItemsContext from "../contexts/ItemsContext";

export default function List() {

  const [items, setItems] = useContext(ItemsContext)

  const removeItemOnList = (id) => {
    let messageWarning = "Tem certeza que deseja excluir esse item?";
    if (confirm(messageWarning) == true) {
      setItems((currentState) =>
        currentState.filter((item) => item.id !== id)
      );
    }
  };

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
      Total de Items: {items.length}
    </>
  );
}
