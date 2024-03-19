import PropTypes from "prop-types";

import useHandleChange from "../hooks/useHandleChange";

import dianteiro from "../assets/dianteiro.png";
import traseiro from "../assets/traseiro.png";

TypeBovine.propTypes = {
  partBovine: PropTypes.string,
  setPartBovine: PropTypes.func,
};

export default function TypeBovine({ partBovine, setPartBovine }) {
  const handleChange = useHandleChange(setPartBovine);
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F5F6FA",
        }}
      >
        {partBovine == "Dianteiro" ? (
          <img
            src={dianteiro}
            alt="Imagem da Parte Dianteira do Boi"
            style={{
              width: "3rem",
              backgroundColor: "#F5F6FA",
            }}
          />
        ) : (
          ""
        )}
        {partBovine == "Traseiro" ? (
          <img
            src={traseiro}
            alt="Imagem da Parte Traseira do Boi"
            style={{
              display: "flex",
              width: "3rem",
              backgroundColor: "#F5F6FA",
            }}
          />
        ) : (
          ""
        )}
        &nbsp;
        <select
          id="btnSelect"
          value={partBovine}
          onChange={handleChange}
          style={{ fontSize: "1rem", height: "2.5rem" }}
        >
          <option value="Dianteiro">Dianteiro</option>
          <option value="Traseiro">Traseiro</option>
        </select>
      </div>
    </>
  );
}
