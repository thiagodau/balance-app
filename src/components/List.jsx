export default function List(props) {

  const removeItemOnList = (id) => {
    let messageWarning = 'Tem certeza que deseja excluir esse item?';
    if (confirm(messageWarning) == true) {
      props.setItems((currentState) => currentState.filter(item => item.id !== id))
    }
  }

  return (
    <>
      <h3>Listagem</h3>
      {props.items.length > 0 ? (
        props.items.map((item) => (
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
    </>
  );
}
