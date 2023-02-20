import { getImageURL } from "./utils";
import { useContext } from "react";
import { PageContext } from "./PageContext";
import { people } from "./people-data";

export default function People() {
  let page = useContext(PageContext);
  if (page != 1) return <></>;
  const chemists = people.filter((person) => person.profession == "chemist");
  return (
    <>
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
