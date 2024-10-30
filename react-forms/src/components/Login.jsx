import { useRef, useState } from "react";

export default function Login() {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const email = useRef();
  const password = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    const emailVal = email.current.value;
    const passwordVal = password.current.value;

    const emailIsInvalid = !emailVal.includes("@");
    const passwordIsInvalid = passwordVal.length <= 5;

    if (emailIsInvalid) {
      setEmailError(true);
      return;
    }

    if (passwordIsInvalid) {
      setPasswordError(true);
      return;
    }

    console.log("form submitted");

    setEmailError(false);
    setPasswordError(false);

    email.current.value = "";
    password.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="header">
        <h1>Login</h1>
        <p>Please enter your login and password!</p>
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          ref={email}
        />
        {emailError && (
          <div className="invalid-feedback d-block">Enter valid email.</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          ref={password}
        />{" "}
        {passwordError && (
          <div className="invalid-feedback d-block">
            Parola min. 5 karakter olmalıdır.
          </div>
        )}
      </div>

      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button className="btn btn-outline-light">Reset</button>
      </div>
    </form>
  );
}
