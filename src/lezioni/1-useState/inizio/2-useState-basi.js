import React, { useState } from "react";
// Gli Hooks devono essere usasti con use davanti
// componenti devono avere la prima lettere Maiuscola
// Gli Hook devono essere invocati all'interno del corpo/funzione del componente
// Gli Hook non possono essere utilizzati in maniera condizionale

const UsoBase = () => {
  //   const value = useState()[0];
  //   const handler = useState()[1];
  //   console.log(value, handler);

  const [titolo, setTitolo] = useState("Hello World");

  const cambiaTitolo = () => {
    if (titolo === "Hello World") {
      setTitolo("Nuovo Titolo");
    } else {
      setTitolo("Hello World");
    }
      
  };

  return (
    <>
      <h2>{titolo}</h2>
      <button
        type="button"
        className="btn btn-info my-3"
        onClick={cambiaTitolo}
      >
        Change Me
      </button>
    </>
  );
};

export default UsoBase;
