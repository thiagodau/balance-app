import PropTypes from "prop-types";

import useHandleChange from "../hooks/useHandleChange";

TypeBovine.propTypes = {
  partBovine: PropTypes.string,
  setPartBovine: PropTypes.func,
};

export default function TypeBovine({ partBovine, setPartBovine }) {
  const handleChange = useHandleChange(setPartBovine);
  return (
    <>
      <select value={partBovine} onChange={handleChange}>
        <option value="Dianteiro">Dianteiro</option>
        <option value="Traseiro">Traseiro</option>
      </select>
    </>
  );
}
