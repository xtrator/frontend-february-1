import { usePeopleDispatch } from "./PeopleContext";

export default function ActionButtons() {
  const dispatch = usePeopleDispatch();
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
    <>
      <button onClick={handleAdd}>Add person to list</button>
      <button onClick={handleDelete}>Delete person to list</button>
      <button onClick={handleEdit}>Edit person from list</button>
    </>
  );
}
