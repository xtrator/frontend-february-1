import { useContext } from "react";
import { useImmer } from "use-immer";
import { PageContext } from "./PageContext";

export default function Counter() {
  const [count, updateCount] = useImmer(0);

  async function handleClick() {
    updateCount((c) => c + 1);
    await delay(3000);
    updateCount((c) => c - 1);
  }
  const page = useContext(PageContext);
  if (page !== 1) return <></>;
  return (
    <>
      <hr />
      <button onClick={handleClick}>Increase Count Momentarily</button>
      <p>Current count is {count}</p>
    </>
  );
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
