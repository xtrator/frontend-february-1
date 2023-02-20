import React, { useEffect, useState } from "react";
import Gallery from "./Gallery";
import User from "./User";
import People from "./People";
import { useImmer } from "use-immer";
import Counter from "./Counter";

function App() {
  const [user, updateUser] = useImmer([]);

  const fetchData = () => {
    fetch("https://backend-february-1.vercel.app/")
      .then((response) => response.json())
      .then((data) => updateUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <User user={user}></User>
      <Gallery />
      <People></People>
      <Counter></Counter>
    </>
  );
}

export default App;
