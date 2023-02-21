import { useContext } from "react";
import { PageContext } from "./PageContext";

export default function User({ user }) {
  const page = useContext(PageContext);
  if (page !== 1) return <></>;
  return (
    <>
      <h1>Username:</h1>
      <p>name: {user.name}</p>
      <p>age: {user.age}</p>
    </>
  );
}
