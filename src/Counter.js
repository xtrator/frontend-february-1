import { useImmer } from "use-immer";

export default function Counter() {
  const [count, updateCount] = useImmer(0);

  async function handleClick() {
    updateCount((c) => c + 1);
    await delay(3000);
    updateCount((c) => c - 1);
  }
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
