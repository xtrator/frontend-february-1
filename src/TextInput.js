import { useState } from "react";

export default function TextInput({ selectedId }) {
  const [text, setText] = useState("");

  return (
    <>
      <label>
        Your input here:
        <input
          type="text"
          value={text}
          placeholder={selectedId}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </label>
      ;
    </>
  );
}
