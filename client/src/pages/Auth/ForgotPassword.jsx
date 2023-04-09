import React, { useState } from "react";
import Layout from "../../component/Layout/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("")

  const navigate = useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/forgot-password",
        {email, newPassword, answer }
      );
      if (res.data.success) {
        
        navigate("/login");
        Swal.fire({
          title: 'Password Reset Successfull',
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
    <Layout title="Forgot Password- Azizul eCommerce">
      <div className="login">
        <h1>Reset Password</h1>
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
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              What is your Favourite Game
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputAnswer"
              placeholder="Enter You Secret Answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Reset
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
