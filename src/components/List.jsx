export default function List(props) {
  return (
    <>
      <h3>Listagem</h3>
      {props.items.length > 0 ? (
        props.items.map((item) => (
          <div key={item.id}>
            <p>{item.part}</p>
            <p>{item.kg}</p>
          </div>
        ))
      ) : (
        <p>Não há items nessa lista.</p>
      )}
    </>
  );
}
