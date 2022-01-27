import React, { useState } from "react";

const StateObject = () => {
  const [person, setPerson] = useState({
    name: "Dario",
    age: 24,
    saluto: "ciao",
  });

  const cambiaSaluto = () => {
    setPerson({
      ...person,
      age: 25,
      saluto: "ciao ho fatto gli anni",
    });
  };
  return (
    <div className="item shadow">
      <div className="text-left">
        <h5>{person.name}</h5>
        <h5>{person.age}</h5>
        <h6>{person.saluto}</h6>
      </div>
      <button className="button" onClick={cambiaSaluto}>
        Cambia Saluto
      </button>
    </div>
  );
};

export default StateObject;
