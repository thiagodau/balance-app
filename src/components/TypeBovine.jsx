import useHandleChange from "../hooks/useHandleChange";
import PropTypes from "prop-types";

TypeBovine.propTypes = {
  partBovine: PropTypes.string,
  setPartBovine: PropTypes.func,
};

export default function TypeBovine({ partBovine, setPartBovine }) {
  const handleChange = useHandleChange(setPartBovine);
  return (
    <>
      <label>Pesagem de: </label>
      <select value={partBovine} onChange={handleChange}>
        <option value="Dianteiro">Dianteiro</option>
        <option value="Traseiro">Traseiro</option>
      </select>
    </>
  );
}
