import React, { useEffect, useState } from "react";
import Gallery from "./Gallery";
import { people } from "./people";
import { getImageURL } from "./utils";
import { useImmer } from "use-immer";

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

  const chemists = people.filter((person) => person.profession == "chemist");

  return (
    <>
      <h1>Username:</h1>
      <p>name: {user.name}</p>
      <p>age: {user.age}</p>
      <Gallery />
      <h1>People</h1>
      <ol>
        {chemists.map((person) => {
          return (
            <li key={person.id}>
              <img src={getImageURL(person.imageId)} alt={person.name} />
              <p>
                <b>{person.name}</b>
                {" " + person.profession + " "}
                known for {person.accomplishment}
              </p>
            </li>
          );
        })}
      </ol>
    </>
  );
}

export default App;
