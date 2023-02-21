import { usePeople } from "./PeopleContext";
import { useEffect, useState } from "react";
import TextInput from "./TextInput";

export default function List() {
  const people = usePeople();
  const [selectedId, setSelectedId] = useState(0);

  useEffect(() => {
    if (people.length === 0) return;
    const isSelectedIdPresent = people.some((person) => {
      return person.id === selectedId;
    });

    if (!isSelectedIdPresent) {
      setSelectedId(people[people.length - 1].id);
    }
  });

  return (
    <>
      <p>People List</p>
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
