import { useState } from "react";

export default function Login() {
  // const [newEmail, setEmail] = useState("");
  // const [newPassword, setPassword] = useState("");

  const initialValues = { email: "", password: "" };

  const [values, setValues] = useState(initialValues);

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
      </div>

      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button className="btn btn-outline-light">Reset</button>
      </div>
    </form>
  );
}
