import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://api.github.com/users/QuincyLarson";

const ConditionalCompining = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState();

  const getData = async() => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await axios.get(url);
      setUser(response.data);
      
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, [])

  if (isLoading) {
    return <Loading/>
  }
  if (isError) {
    return <ErrorComponent/>
  }
  return (
    <article className="card d-flex align-items-center p-5 shadow mt-5">
      <img src={ user.avatar_url } style={{ width: '80px', height: '80px' }} className="rounded-circle my-4 shadow" />
      <h3>{ user.login }</h3>
    </article>
  );
};

const Loading = () => {
  return (
    <div>
      <h2>Loading...</h2>
    </div>
  )
}

const ErrorComponent = () => {
  return (
    <div>
      <h2>Sorry, there is an error</h2>
    </div>
  );
};

export default ConditionalCompining;
