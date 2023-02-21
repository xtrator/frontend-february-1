import { usePeople } from "./PeopleContext";

export default function List() {
  const people = usePeople();
  return (
    <>
      <p>People List from Context</p>
      <ol>
        {people.map((person) => {
          return <li key={person.id}>{person.name}</li>;
        })}
      </ol>
    </>
  );
}
