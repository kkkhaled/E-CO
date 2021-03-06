import React, { useState, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Register = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const register = { AuthContext };

  const { setAlert } = alertContext;
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const { name, email, password, password2 } = user;

  const onChange = e => {
    setUser({ [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    if (name === "" || email === "" || password === "") {
      setAlert("please enter all fields", "danger");
    } /* else if (password !== password2) {
      setAlert("password dose not match", "danger");
    }*/ else {
      register({
        name,
        email,
        password
      });
      e.preventDefault();
    }
  };
  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="from-group">
          <label htmlFor="name">Name </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="from-group">
          <label htmlFor="email">Email Address </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="from-group">
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <div className="from-group">
          <label htmlFor="password2">Confirm Password </label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Register;
