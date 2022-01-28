import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react/cjs/react.development";
const url = "https://api.github.com/users";

const FetchComponent = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await axios.get(url);
    console.log(response);
    setUsers(response.data);
  };
  useEffect(() =>  {
    getData();
  }, []);

    return (
    <>
      <h1>Fetch Component</h1>
      <ul className="users">
        { 
        users.map((el) => {
          return (
          <li className="shadow">
            <img src={ el.avatar_url } />
            <div>
              <h5>{ el.login }</h5>
              <a href={ el.html_url }>Profile</a>
            </div>
          </li>
        )})
        }
      </ul>
    </>
  );
};

export default FetchComponent;
