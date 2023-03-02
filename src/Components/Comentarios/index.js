import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Styles.css";
import { FiUser } from "react-icons/fi";

const Comentario = () => {
  const [comentarioget, setComentarioget] = useState([]);

  useEffect(() => {
    axios
      .get(`https://web-production-a6075.up.railway.app/comentarios`)
      .then((data) => {
        setComentarioget(
          data.data.filter((item) => item.liberar == "aprovado")
        );
      });
    //console.log(comentarioget.sort())
  }, [comentarioget]);

  return (
    <div className="container-comentarios">
      <div className="box-title-comentarios">
        <h2>Avaliações</h2>
      </div>
      <div className="comentario">
        {comentarioget.sort().map((item) => {
          return (
            <div key={item._id} className="item-comentario">
              <div style={{ display: "flex", alignItems: "center" }}>
                <FiUser></FiUser>
                <h2>{item.user} comentou:</h2>
              </div>
              <p>{item.comentario}</p>
              {/* <p>{item.data}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comentario;
