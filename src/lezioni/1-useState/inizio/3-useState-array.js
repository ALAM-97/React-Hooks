import React, { useState} from "react";
import {data} from '../../../data'

const ArrayState = () => {
  const [people, setPeople] = useState(data);

  const removeItem = id => {
    setPeople((oldPeople) => {
      return oldPeople.filter((el) => el.id !== id);
    });
  }
  
  return (
    <>
      {
        people.map( elm => (
          <div key={ elm.id } className="item shadow">
            <h5>{ elm.name }</h5>
            <button type="button" className="button delete-button" onClick={ () => removeItem(elm.id) }>
              x
            </button>
          </div>
        ))
      }
    </>
  );
};

export default ArrayState;
