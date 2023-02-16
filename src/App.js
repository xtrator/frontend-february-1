import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://backend-february-1.vercel.app/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Username:</h1>
      <p>name: {user.name}</p>
      <p>age: {user.age}</p>
    </>
  );
}

export default App;
