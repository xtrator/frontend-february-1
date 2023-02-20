import { useContext } from "react";
import { PageContext } from "./PageContext";
import { people as peopleList } from "./people-data";
import { useImmer } from "use-immer";

export default function PeopleList() {
  let [people, updatePeople] = useImmer(peopleList);
  let page = useContext(PageContext);
  if (page != 2) return null;

  return (
    <div>
      <p>People List</p>
      <ol>
        {people.map((person) => {
          return <li key={person.id}>{person.name}</li>;
        })}
      </ol>
    </div>
  );
}
