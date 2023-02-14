import React, { useContext } from "react";
import "./style.css";
import { AuthContext } from "../../Contexts/auth";

export default function Modalmenu() {
  const { usercliente } = useContext(AuthContext);

  return (
    <div className="container-modal-menucomponent">
      <div className="modal-menu-component">
        <div className="box-btns-menu-component">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <label>Moda Esportiva</label>
            <button onClick={() => (window.location.href = "/loja/camiseta")}>
              Camisetas
            </button>
            <button onClick={() => (window.location.href = "/loja/calca")}>
              Calças
            </button>
            <button onClick={() => (window.location.href = "/loja/short")}>
              Shorts
            </button>
            <button onClick={() => (window.location.href = "/loja/regata")}>
              Regatas
            </button>
          </div>
        </div>
        <div className="box-btns-menu-component">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <label>Moda Intima</label>
            <button onClick={() => (window.location.href = "/loja/calcinha")}>
              Calcinhas
            </button>
            <button onClick={() => (window.location.href = "/loja/sutiã")}>
              Sutiãs
            </button>
            <button onClick={() => (window.location.href = "/loja2/lingerie")}>
              Lingeries
            </button>
            <button onClick={() => (window.location.href = "/loja/pijamas")}>
              Pijamas
            </button>
            <button onClick={() => (window.location.href = "/loja/cueca")}>
              Cuecas
            </button>
          </div>
        </div>

        <div className="box-btns-menu-component">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <label>Vittoria</label>
            <button onClick={() => (window.location.href = "/sobrenos")}>
              Sobre nós
            </button>
            {usercliente != null ? (
              <button onClick={() => (window.location.href = "/minhaconta")}>
                Minha conta
              </button>
            ) : (
              ""
            )}
            <button onClick={() => (window.location.href = "/favoritos")}>
              Favoritos
            </button>
            <button onClick={() => (window.location.href = "/contato")}>
              Fale conosco
            </button>

            {/* {
              <button onClick={() => (window.location.href = "/franqueados")}>
                Seja um franqueado
              </button>
            } */}
          </div>
        </div>
      </div>
    </div>
  );
}
