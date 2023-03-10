import { useEffect } from "react";
import Gallery from "./Gallery";
import User from "./User";
import People from "./People";
import { useImmer } from "use-immer";
import Counter from "./Counter";
import { PageContext } from "./PageContext";
import PageButtons from "./PageButtons";
import PeopleList from "./PeopleList";
import Stopwatch from "./Stopwatch";
import Cats from "./Cats";
import Form from "./Form";

function App() {
  const [user, updateUser] = useImmer([]);
  const [page, setPage] = useImmer(1);

  const fetchData = () => {
    fetch("https://backend-february-1.vercel.app/")
      .then((response) => response.json())
      .then((data) => updateUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <PageContext.Provider value={page}>
        <PageButtons page={page} setPage={setPage}></PageButtons>
        <User user={user}></User>
        <Gallery />
        <People></People>
        <Counter></Counter>
        <PeopleList></PeopleList>
        <Stopwatch />
        <Cats />
        <Form />
      </PageContext.Provider>
    </>
  );
}

export default App;
