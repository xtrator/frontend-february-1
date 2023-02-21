import { useContext } from "react";
import { PageContext } from "./PageContext";
import List from "./List";
import ActionButtons from "./ActionButtons";
import { PeopleProvider } from "./PeopleContext"; // logic here

export default function PeopleList() {
  let page = useContext(PageContext);
  if (page != 2) return null;

  return (
    <>
      <PeopleProvider>
        <List />
        <ActionButtons />
      </PeopleProvider>
    </>
  );
}
