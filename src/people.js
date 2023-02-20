import { getImageURL } from "./utils";
import { useContext } from "react";
import { PageContext } from "./PageContext";

const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];

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
