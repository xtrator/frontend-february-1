import React, { useEffect, useState } from "react";
import Gallery from "./Gallery";
import User from "./User";
import People from "./People";
import { useImmer } from "use-immer";
import Counter from "./Counter";
import { PageContext } from "./PageContext";
import PageButtons from "./PageButtons";

function App() {
  const [user, updateUser] = useImmer([]);
  const [page, setPage] = useImmer(1);

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
      <PageContext.Provider value={page}>
        <PageButtons page={page} setPage={setPage}></PageButtons>
        <User user={user}></User>
        <Gallery />
        <People></People>
        <Counter></Counter>
      </PageContext.Provider>
    </>
  );
}

export default App;
