import { useState } from "react";
import { Link } from "react-router";

const FormPage = () => {
  // uncontrolled component/input
  // const inputRef = useRef<HTMLInputElement>(null);
  // const inputEmailRef = useRef<HTMLInputElement>(null);

  // STATE
  //  controlled compoennt/input
  const [fullNameInput, setFullNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [userNameErrorMessage, setUserNameErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handleFormSubmit = () => {
    // const fullNameFormValue = inputRef.current?.value;
    // const emailFormValue = inputEmailRef.current?.value;
    // alert("submited: " + fullNameInput + " " + passwordInput);
  };

  return (
    <div>
      <h1>Form page</h1>

      {/* full name input */}
      <h2>Full Name Input: {fullNameInput}</h2>
      <h2>Password input: {passwordInput}</h2>

      <div className="form" style={{ display: "flex", flexDirection: "column", gap: "5px", maxWidth: "250px" }}>
        <label htmlFor="name">Full name</label>
        {/* <input ref={inputRef} type="text" id="name" /> */}
        <input
          type="text"
          id="name"
          onChange={(event) => {
            setFullNameInput(event.target.value);

            // VALIDATION
            const fullNameValidation = fullNameInput.length < 4;
            if (fullNameValidation) {
              setUserNameErrorMessage("Full name harus lebih dari 4 karakter");
            } else {
              setUserNameErrorMessage("");
            }
          }}
          value={fullNameInput}
        />
        <span style={{ color: "red" }}>{userNameErrorMessage}</span>

        <label htmlFor="password">Password</label>
        {/* <input ref={inputEmailRef} type="email" id="email" /> */}
        <input
          type="password"
          id="password"
          onChange={(event) => {
            setPasswordInput(event.target.value);

            const passwordValidation = passwordInput.length < 8;

            if (passwordValidation) {
              setPasswordErrorMessage("Password harus lebih dari 8 karakter");
            } else {
              setPasswordErrorMessage("");
            }
          }}
          value={passwordInput}
        />
        <span style={{ color: "red" }}>{passwordErrorMessage}</span>

        <button onClick={handleFormSubmit}>Submit</button>
        <Link to="/">Menuju ke halaman home</Link>
      </div>
    </div>
  );
};

export default FormPage;
