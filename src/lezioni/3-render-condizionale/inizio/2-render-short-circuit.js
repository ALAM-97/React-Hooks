import React, { useState } from "react";

const ShortRender = () => {
  const [parola, setParola] = useState('valore');
  const [toggle, setToggle] = useState(false);

  // Short Circuit Evaluation con or (||) operator
  // const esempio = parola || 'sono un esempio';

  // Short Circuit Evaluation con and (&&) operator
  // const esempio2 = parola && 'ho un valore';

  // Ternary Operator
  // const esempio3 = !parola ? 'vero' : 'falso';

  return (
    <div>
      <h2>{parola || "sono un esempio se non è inserito un valore"}</h2>
      {toggle ? (
        <h2 className="text-success">Vero</h2>
      ) : (
        <h2 className="text-danger">Falso</h2>
      )}
      <button className="button" onClick={() => setToggle(!toggle)}>
        Cambia
      </button>
    </div>
  );
};

export default ShortRender;
