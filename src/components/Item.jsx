import PropTypes from "prop-types";

Item.propTypes = {
  item: PropTypes.object,
  removeItemOnList: PropTypes.func,
};

export default function Item({ item, removeItemOnList }) {
  return (
    <tr>
      <td style={{ fontWeight: "bold" }}>{item.id}</td>
      <td>{item.part}</td>
      <td>{item.kg.toFixed(3)}</td>
      <td className="some">
        <button
          onClick={removeItemOnList}
          style={{
            boxShadow: "none",
            background: "transparent",
            border: "1px solid #FD956C",
            padding: ".5rem",
            color: '#FD956C'
          }}
        >
          Excluir
        </button>
      </td>
    </tr>
  );
}
