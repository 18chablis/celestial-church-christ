import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "../redux/actions/error";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { login } from "../redux/actions/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();
  const { message } = useSelector((state) => state.messageReducer);
  const { isLoggedIn } = useSelector((state) => state.authReducer);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);
    setLoading(true);
    await dispatch(login(email, password))
      .then(() => {
        history("/dashboard");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
    setTimeout(function () {
      setDisable(false);
      setLoading(false);
      dispatch(clearMessage());
    }, 3000);
  };
  return (
    <div style={{ margin: "auto" }}>
      {message && (
        <div className={isLoggedIn ? "success" : "fail"}>{message}</div>
      )}
      <form onSubmit={handleSubmit} className="login">
        <input
          type="email"
          placeholder="something@anything.something"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="#" className="forgot">
          forgot password?
        </Link>
        <input type="submit" value="Sign in" />
      </form>
      <div className="shadow"></div>
    </div>
  );
};

export default Login;
