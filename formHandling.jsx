import React from "react";
import { useRef } from "react";
import { useState } from "react";


const App = () => {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const pwd = useRef();
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
        </div>
        <div className="mt-3">
          <label>Password</label>
          <input
            type="password"
           
            ref={pwd}
            className="form-control"
          />
        </div>

        <div className="mt-3">
          <button className="btn btn-primary w-100 " onClick={()=>{
            console.log("Email : ",email)
            console.log("Password: ",pwd.current.value)
          }}>Login</button>
        </div>
      </div>
    </>
  );
};

export default App;
