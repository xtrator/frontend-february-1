import React, { useEffect, useState } from "react";
import Gallery from "./Gallery";

function App() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://backend-february-1.vercel.app/")
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
      <Gallery />
    </>
  );
}

export default App;
