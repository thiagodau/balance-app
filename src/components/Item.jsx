import PropTypes from 'prop-types'

Item.propTypes = {
	item: PropTypes.object,
	removeItemOnList: PropTypes.func
}

export default function Item({ item, removeItemOnList }) {
  return (
    <>
      <p>{item.part}</p>
      <p>{item.kg}</p>
      <p>
        <button onClick={removeItemOnList}>Remover</button>
      </p>
    </>
  );
}