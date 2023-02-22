import { useContext, useRef } from "react";
import { PageContext } from "./PageContext";
import FormInput from "./FormInput";

export default function Form() {
  const page = useContext(PageContext);
  const inputRef = useRef(null);
  if (page !== 2) return <></>;
  return (
    <>
      <hr></hr>
      <br />
      <br />
      <br />
      <FormInput ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus Input
      </button>
    </>
  );
}
