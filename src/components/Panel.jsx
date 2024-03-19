import { useState } from "react";

import TypeBovine from "./TypeBovine";
import Kilograma from "./Kilograma";

import { Plus, CheckCircle } from "lucide-react";

import useSaveItem from "../hooks/useSaveItem";

import PropTypes from "prop-types";

Panel.propTypes = {
  kilograma: PropTypes.number,
};

export default function Panel({ kilograma, setItems, stability }) {
  const [partBovine, setPartBovine] = useState("Dianteiro");
  const saveItemOnList = useSaveItem(setItems, partBovine, kilograma);

  onkeydown = (e) => {
    document.getElementById("btnDesconnect").blur();
    document.getElementById("btnSelect").blur();
    if (e.key === "Enter") {
      saveItemOnList();
    }
  };

  return (
    <>
      <div className="panel">
        <TypeBovine partBovine={partBovine} setPartBovine={setPartBovine} />
        <Kilograma kilograma={kilograma} stability={stability} />
        <button
          id="btnSave"
          onClick={saveItemOnList}
          style={{ display: "flex", alignItems: "center", gap: ".3rem" }}
        >
          <Plus className="transparent" />
          Adicionar
        </button>
      </div>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        {stability ? (
          <p
            style={{
              display: "flex",
              paddingTop: ".5rem",
              alignItems: "center",
              fontStyle: "italic",
              fontSize: ".9rem",
              gap: ".2rem",
            }}
          >
            <CheckCircle size={".8rem"} color="green" /> Estabilizado
          </p>
        ) : (
          <span className="loader"></span>
        )}
      </div>
    </>
  );
}
