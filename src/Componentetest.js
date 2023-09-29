import React from "react";

const Componentetest = ({ toggleTexto2 }) => {
  const handleTextoClick = () => {
    toggleTexto2(); // Llama a la función toggleTexto para cambiar el estado
  };

  return (
    <div>
      <h1 style={{ cursor: "pointer" }} onClick={handleTextoClick}>
        Este es el componente 2
      </h1>
    </div>
  );
};

export default Componentetest;
