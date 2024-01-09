import useHandleChange from "../hooks/useHandleChange";

export default function TypeBovine(props) {
  const handleChange = useHandleChange(props.setPartBovine)
  return (
    <>
      <label>Pesagem de: </label>
      <select value={props.partBovine} onChange={handleChange}>
        <option value="Dianteiro">Dianteiro</option>
        <option value="Traseiro">Traseiro</option>
      </select>
    </>
  );
}
