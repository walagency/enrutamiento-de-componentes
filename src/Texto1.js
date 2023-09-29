import React from "react";

const Texto1 = ({ toggleTexto }) => {
  const handleTextoClick = () => {
    toggleTexto(); // Llama a la función toggleTexto para cambiar el estado
  };

  return (
    <div>
      <h1 style={{ cursor: "pointer" }} onClick={handleTextoClick}>
        Este es el componente Texto1
      </h1>
    </div>
  );
};

export default Texto1;
