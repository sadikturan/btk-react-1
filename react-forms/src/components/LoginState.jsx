import Input from "./Input";
import useInput from "../hooks/useInput";
import { isEmail, hasMinLength, isNotEmpty } from "../utils/validations";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 5));

  function handleSubmit(e) {
    e.preventDefault();

    if (emailHasError || passwordHasError) {
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
        error={emailHasError && "Enter valid email"}
        value={emailValue}
        onBlur={handleEmailBlur}
        onChange={handleEmailChange}
      />

      <Input
        type="password"
        name="password"
        id="password"
        labelText="Password"
        error={passwordHasError && "Parola min. 5 karakter olmalıdır."}
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
