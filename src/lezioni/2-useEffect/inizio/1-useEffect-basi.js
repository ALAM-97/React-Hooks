import React, { useEffect, useState } from "react";

const useEffectBasi = () => {

  const [value, setValue] = useState(0);

  const aumenta = () => {
    setValue(oldValue => oldValue + 1);
  }

  useEffect(() => {
    console.log('Sono useEffect')
    if (value < 1 ) {
      document.title = `Nessun Messaggio`;
    } else if (value === 1) {
      document.title = `${value} Nuovo Messaggio`;
    } else {
      document.title = `${value} Nuovi Messaggi`;
    }
  }, [value]);

  return (
    <div className="item">
      <h4>Value: <span>{ value }</span></h4>
      <button className="button" onClick={ aumenta }>
        Aumenta
      </button>
    </div>
  );
};

export default useEffectBasi;
