import React, { useState } from 'react';
import Componente1 from './Texto1';
import Componentee from './Componentetest';
import imgan1 from './assest/img/imagen1.jpg'
import imgan2 from './assest/img/imagen2.jpg'


const App = () => {
  const [mostrarTexto, setMostrarTexto] = useState(false);
  const [mostrarTexto2, setMostrarTexto2] = useState(false);
  const [mostrarComponente, setMostrarComponente] = useState(true);
  const [mostrarComponente2, setMostrarComponente2] = useState(true);

  const toggleTexto = () => {
    setMostrarTexto(!mostrarTexto);
    setMostrarComponente(!mostrarComponente);
  };

  const toggleTexto2 = () => {
    setMostrarTexto2(!mostrarTexto2);
    setMostrarComponente2(!mostrarComponente2);
  };

  return (
    <>


      <div>
        {!mostrarTexto && mostrarComponente2 && (
          <img
            src={imgan1}
            alt="Imagen"
            style={{ cursor: 'pointer' }}
            onClick={toggleTexto}
          />
        )}
        {mostrarTexto && <Componente1 toggleTexto={toggleTexto} />}

      </div>



      <div>
        {!mostrarTexto2 && mostrarComponente && (
          <img
            src={imgan2}
            alt="Imagen"
            style={{ cursor: 'pointer' }}
            onClick={toggleTexto2}
          />
        )}
        {mostrarTexto2 && <Componentee toggleTexto2={toggleTexto2} />}
      </div>

    </>
  );
};

export default App;