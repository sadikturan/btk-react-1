import { useState } from "react";

export default function Login() {
  const initialValues = { email: "", password: "" };

  const [values, setValues] = useState(initialValues);

  const emailIsInValid = values.email !== "" && !values.email.includes("@");
  const passwordIsInvalid =
    values.password !== "" && values.password.length <= 5;

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
    setValues(initialValues);
  }
  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setValues({
      ...values, // email: "11", passwod: "233", email: 123
      [name]: value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
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
          value={values.email}
          onChange={handleInputChange}
        />
        {emailIsInValid && (
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
          value={values.password}
          onChange={handleInputChange}
        />
        {passwordIsInvalid && (
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
