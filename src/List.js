import { usePeople } from "./PeopleContext";
import { useState } from "react";
import TextInput from "./TextInput";

export default function List() {
  const people = usePeople();
  const [selectedId, setSelectedId] = useState(0);
  return (
    <>
      <p>People List from Context</p>
      <ol>
        {people.map((person) => {
          return (
            <li
              onClick={() => {
                setSelectedId(person.id);
              }}
              key={person.id}
            >
              {selectedId === person.id ? <b>{person.name}</b> : person.name}
              {` Key = ${person.id}`}
            </li>
          );
        })}
      </ol>
      <TextInput key={selectedId} selectedId={selectedId}></TextInput>
    </>
  );
}
