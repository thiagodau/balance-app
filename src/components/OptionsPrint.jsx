import "./OptionsPrint.css";

import { Printer, ScanEye, FileDown, Trash2 } from "lucide-react";

export default function OptionsPrint() {
  return (
    <div className="section-buttons">
      <button onClick={() => window.print()}>
        <ScanEye className="transparent" />
        Visualizar
      </button>
      <button onClick={() => window.print()}>
        <Printer className="transparent" /> Imprimir
      </button>
      <button onClick={() => window.print()}>
        <FileDown className="transparent" />
        Salvar PDF
      </button>
      {localStorage.length > 0 ? (
        <button
          onClick={() => {
            let text =
              "Isso irá excluir todos os items e desconectar da balança, tem certeza que deseja fazer isso?";
            if (confirm(text)) {
              localStorage.clear();
              location.reload();
            }
          }}
        >
          <Trash2 className="transparent" /> Remover todos os items
        </button>
      ) : null}
    </div>
  );
}
