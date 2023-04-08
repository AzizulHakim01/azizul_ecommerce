import React, { useState } from "react";
import Layout from "../../component/Layout/Layout";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth()

  const navigate = useNavigate();
  const location = useLocation();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        {email, password }
      );
      if (res.data.success) {
        setAuth({
          ...auth,
          user: res.data.user,
          token:res.data.token,
        });
        localStorage.setItem('auth', JSON.stringify(res.data))
        navigate(location.state || "/");
        Swal.fire({
          title: 'Logged In',
          text: res.data.message,
          icon: 'success',
          confirmButtonText: 'Close'
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: res.data.message,
          icon: 'error',
          confirmButtonText: 'Close'
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title="Login Here - Azizul eCommerce">
      <div className="login">
        <h1>Login Here</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter A Complicated Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>
          <button type="button" className="me-5 btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>
            Forgot Password
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
