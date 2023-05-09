import React, { useState } from "react";
import { TextField, FormControl, Button, Container } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (email == "") {
      setEmailError(true);
    }
    if (password == "") {
      setPasswordError(true);
    }

    if (email && password) {
      console.log(email, password);
      navigate("/todos");
    }
  };

  return (
    <React.Fragment>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          variant="outlined"
          color="primary"
          type="email"
          sx={{ mb: 3 }}
          fullWidth
          value={email}
          error={emailError}
        />
        <TextField
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          variant="outlined"
          color="primary"
          type="password"
          value={password}
          error={passwordError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <Button variant="outlined" color="primary" type="submit">
          Login
        </Button>
      </form>
      <small>
        Need an account?
        <NavLink to="/register">Register here</NavLink>
      </small>
    </React.Fragment>
  );
};
