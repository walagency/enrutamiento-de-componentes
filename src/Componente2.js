import React from "react";

const Componente2 = ({ toggleTexto }) => {
  const handleTextoClick = () => {
    toggleTexto(); // Llama a la función toggleTexto para cambiar el estado
  };

  return (
    <div>
      <h1 style={{ cursor: "pointer" }} onClick={handleTextoClick}>
        Este es el componente 2
      </h1>
    </div>
  );
};

export default Componente2;
