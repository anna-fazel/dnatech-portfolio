import React, {useState} from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/user";


const Login = () => {
   const [name, setName] = useState("")
   const user = useSelector((state) => state.user)
   const dispatch = useDispatch();
   
   const handleLogin =(e)=>{
      e.preventDefault();
      dispatch(login({name}))
   }

  return (
    <div className="loginPage">
      <div className="p-header">
        <h1>Login Page</h1>
      </div>
      <div className="login">
        <form action="">
          <h3 className="form-title">Sign In</h3>
          <label htmlFor="username">Name*</label>
          <input
            type="text"
            id="name"
            className="input"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="username">Username/Email*</label>
          <input
            type="text"
            id="username"
            className="input"
            name="username"
            required
          />

          <label htmlFor="pass">Password*</label>
          <input
            type="password"
            id="pass"
            className="input"
            name="pass"
            required
          />

          <button
            className="form-button"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
