import { useContext } from "react";
import { PageContext } from "./PageContext";
import { people as peopleList } from "./people-data";
import { useImmer } from "use-immer";

export default function PeopleList() {
  let [people, updatePeople] = useImmer(peopleList);
  let page = useContext(PageContext);
  if (page != 2) return null;

  function handleAdd() {
    updatePeople((draft) => {
      draft.push({
        id: draft[draft.length],
        name: "Creola Katherine Johnson",
        profession: "mathematician",
        accomplishment: "spaceflight calculations",
        imageId: "MK3eW3A",
      });
    });
  }

  function handleDelete() {
    updatePeople((draft) => {
      draft.pop();
    });
  }

  function handleEdit() {
    updatePeople((draft) => {
      draft[draft.length - 1] = {
        id: 1,
        name: "Mario José Molina-Pasquel Henríquez",
        profession: "chemist",
        accomplishment: "discovery of Arctic ozone hole",
        imageId: "mynHUSa",
      };
    });
  }

  return (
    <div>
      <p>People List</p>
      <ol>
        {people.map((person) => {
          return <li key={person.id}>{person.name}</li>;
        })}
      </ol>
      <button onClick={handleAdd}>Add person to list</button>
      <button onClick={handleDelete}>Delete person to list</button>
      <button onClick={handleEdit}>Edit person from list</button>
    </div>
  );
}
