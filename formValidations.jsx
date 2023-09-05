
import React from "react";
import { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const handleSubmit = () => {
    if (email.trim() === "") {
      setError((error) => ({ ...error, email: "Enter email address" }));
    } else if (!emailPattern.test(email)) {
      setError((error) => ({ ...error, email: "Enter valid email address" }));
    } else {
      setError((error) => ({ ...error, email: "" }));
    }

    if (password.trim() === "") {
      setError((error) => ({ ...error, password: "Enter password " }));
    } else if (password.trim("").length < 8) {
      setError((error) => ({
        ...error,
        password: "password must contain 8 characters",
      }));
    } else {
      setError((error) => ({ ...error, password: "" }));
    }
  };
  return (
    <>
      <div className="border w-25 mt-5 m-auto p-3">
        <h2 className="text-primary text-center">Login Form</h2>
        <div className="mt-3">
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="form-control"
          />
          {error.email && <span className="text-danger">{error.email}</span>}
        </div>
        <div className="mt-3">
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="form-control"
          />
          {error.password && (
            <span className="text-danger">{error.password}</span>
          )}
        </div>

        <div className="mt-3">
          <button className="btn btn-primary w-100 " onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
