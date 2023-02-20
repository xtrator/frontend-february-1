import { useContext } from "react";
import { PageContext } from "./PageContext";
import { people as peopleList } from "./people-data";
import { useImmerReducer } from "use-immer";

function peopleReducer(draft, action) {
  switch (action.type) {
    case "add":
      draft.push({
        id: draft[draft.length],
        name: "Creola Katherine Johnson",
        profession: "mathematician",
        accomplishment: "spaceflight calculations",
        imageId: "MK3eW3A",
      });
      break;
    case "delete":
      draft.pop();
      break;
    case "edit":
      draft[draft.length - 1] = {
        id: 1,
        name: "Mario José Molina-Pasquel Henríquez",
        profession: "chemist",
        accomplishment: "discovery of Arctic ozone hole",
        imageId: "mynHUSa",
      };
      break;
    default:
      throw Error("Unknown action: " + action.type);
  }
}

export default function PeopleList() {
  let [people, dispatch] = useImmerReducer(peopleReducer, peopleList);
  let page = useContext(PageContext);
  if (page != 2) return null;

  function handleAdd() {
    dispatch({
      type: "add",
    });
  }

  function handleDelete() {
    dispatch({
      type: "delete",
    });
  }

  function handleEdit() {
    dispatch({
      type: "edit",
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
