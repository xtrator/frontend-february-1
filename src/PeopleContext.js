import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { people as peopleList } from "./people-data";

export const PeopleContext = createContext(null);
export const PeopleDispatchContext = createContext(null);

export function PeopleProvider({ children }) {
  const [people, dispatch] = useImmerReducer(peopleReducer, peopleList);
  return (
    <PeopleContext.Provider value={people}>
      <PeopleDispatchContext.Provider value={dispatch}>
        {children}
      </PeopleDispatchContext.Provider>
    </PeopleContext.Provider>
  );
}

export function usePeople() {
  return useContext(PeopleContext);
}

export function usePeopleDispatch() {
  return useContext(PeopleDispatchContext);
}

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
