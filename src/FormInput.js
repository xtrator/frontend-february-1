import { forwardRef } from "react";

const FormInput = forwardRef((props, ref) => {
  return (
    <>
      <input {...props} ref={ref} type="text" />
    </>
  );
});

FormInput.displayName = "Form Input";

export default FormInput;
