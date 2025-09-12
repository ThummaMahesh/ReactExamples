import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./store";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function SignIn() {
  const dispatch = useDispatch();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [errors, setErrors] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    let formErrors = { username: "", password: "" };
    let valid = true;

    // Username validation
    if (!username) {
      formErrors.username = "Username is required";
      valid = false;
    } else if (username.length < 3) {
      formErrors.username = "Username must be at least 3 characters";
      valid = false;
    }

    // Password validation
    if (!password) {
      formErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(formErrors);

    if (valid) {
      dispatch(loginUser({ email: username, password }));
      toast.success("Login successful!");


      navigate("/"); // Navigate to homepage
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow w-100"
        style={{ maxWidth: "400px" }}
      >
        <h2 className="text-center mb-4 fw-bold text-primary">Login</h2>

        {/* Username Field */}
        <div className="mb-3">
          <input
            type="text"
            ref={usernameRef}
            placeholder="Enter username"
            className={`form-control ${errors.username ? "is-invalid" : ""}`}
          />
          {errors.username && (
            <div className="invalid-feedback">{errors.username}</div>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <input
            type="password"
            ref={passwordRef}
            placeholder="Enter password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100 fw-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default SignIn;
