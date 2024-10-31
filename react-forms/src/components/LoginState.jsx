import { useState } from "react";
import Input from "./Input";
import useInput from "../hooks/useInput";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    isEdited: isEmailEdited,
  } = useInput("");

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    isEdited: isPasswordEdited,
  } = useInput("");

  const emailIsInValid = isEmailEdited && !emailValue.includes("@");
  const passwordIsInvalid = isPasswordEdited && passwordValue.length <= 5;

  function handleSubmit(e) {
    e.preventDefault();

    if (emailIsInValid || passwordIsInvalid) {
      return;
    }

    console.log(emailValue, passwordValue);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="header">
        <h1>Login</h1>
        <p>Please enter your login and password!</p>
      </div>

      <Input
        type="email"
        name="email"
        id="email"
        labelText="Email"
        error={emailIsInValid && "Enter valid email"}
        value={emailValue}
        onBlur={handleEmailBlur}
        onChange={handleEmailChange}
      />

      <Input
        type="password"
        name="password"
        id="password"
        labelText="Password"
        error={passwordIsInvalid && "Parola min. 5 karakter olmalıdır."}
        value={passwordValue}
        onBlur={handlePasswordBlur}
        onChange={handlePasswordChange}
      />

      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button className="btn btn-outline-light">Reset</button>
      </div>
    </form>
  );
}
