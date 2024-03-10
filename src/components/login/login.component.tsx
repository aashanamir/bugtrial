import React, { useState } from "react";
import { auth } from "../../firebase/firebase.utils";
import { useHistory } from "react-router-dom";
import "./login.styles.scss";
import {Link} from "react-router-dom";

interface UserLogin {
  [fieldName: string]: string;
}

const Login = () => {
  const history = useHistory();
  const [userCredentials, setUserCredentials] = useState({
    email: "email@gmail.com",
    password: "12345678",
  });

  const { email, password } = userCredentials;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserCredentials((prevUserCredentials) => ({
      ...prevUserCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserCredentials({
        email: "",
        password: "",
      });
      history.push("/bugtrail-v3");
    } catch (error) {
      console.error("Couldn't login user: ", error);
    }
  };

  return (
    <div className={"text-center mb-5 mt-5"}>
      <form className="form-signin" onSubmit={handleSubmit}>
        <img
          className="mb-4"
          src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-bug-icon-png-image_3773538.jpg"
          alt="bugtrail"
          width="72"
          height="72"
        />
        <h1 className="h3 mb-3 font-weight-normal">Please Login</h1>
        <div className="form-group">
          <label htmlFor="loginEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="loginEmail"
            className="form-control"
            placeholder="Email address"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="loginPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="loginPassword"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-danger btn-block" type="submit">
          Login
        </button>
      </form>
      <Link to={"/bugtrail-v3/register"}>Don't Have Account Sign up</Link>
    </div>
  );
};

export default Login;
