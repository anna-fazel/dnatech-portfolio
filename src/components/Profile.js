import React from "react";
import "./login.css";
import { useSelector } from "react-redux";

const Profile = () => {
  

  return (
    <div className="profilePage">
      <div className="p-header">
        <h1>Profile Page</h1>
      </div>
      <div className="login">
        <form action="">
          <h3 className="form-title">Profile </h3>

          <label htmlFor="name">Name*</label>
          <input type="text" id="name" className="input" name="name" required />

          <label htmlFor="username">Username*</label>
          <input
            type="text"
            id="username"
            className="input"
            name="username"
            required
            
          />

          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            className="input"
            name="email"
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

          <button className="form-button">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
