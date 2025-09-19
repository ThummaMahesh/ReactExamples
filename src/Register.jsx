import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { registerUser } from "./store";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    dispatch(registerUser(data));
    navigate("/login");
  };

  return (
    <div className="register-container d-flex justify-content-center align-items-center">
      <div className="card shadow p-4 register-card">
        <h3 className="text-center mb-4 text-primary">Create Account</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Username & Email in one row */}
          <div className="row mb-3">
          
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && (
                <small className="text-danger">{errors.username.message}</small>
              )}
         
           
          </div>
           <div className="row mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>

          {/* Mobile & Gender */}
          <div className="row mb-3">
           
              <input
                type="text"
                className="form-control"
                placeholder="Mobile Number"
                {...register("mobile", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Enter valid 10-digit mobile number",
                  },
                })}
              />
              {errors.mobile && (
                <small className="text-danger">{errors.mobile.message}</small>
              )}
          
           
          </div>
           <div className="row mb-3">
              <select
                className="form-control"
                {...register("gender", { required: "Gender is required" })}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male ♂️</option>
                <option value="Female">Female ♀️</option>
                <option value="Other">Other ⚧️</option>
              </select>
              {errors.gender && (
                <small className="text-danger">{errors.gender.message}</small>
              )}
            </div>

          {/* Address Fields */}
          <h6 className="mt-3 mb-2 text-secondary">Address</h6>
          <div className="row mb-3">
            <div className="col-md-12">
              <input
                type="text"
                className="form-control"
                placeholder="Street"
                {...register("street", { required: "Street is required" })}
              />
              {errors.street && (
                <small className="text-danger">{errors.street.message}</small>
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                {...register("city", { required: "City is required" })}
              />
              {errors.city && (
                <small className="text-danger">{errors.city.message}</small>
              )}
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="State"
                {...register("state", { required: "State is required" })}
              />
              {errors.state && (
                <small className="text-danger">{errors.state.message}</small>
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Pincode"
                {...register("pincode", {
                  required: "Pincode is required",
                  pattern: {
                    value: /^[1-9][0-9]{5}$/,
                    message: "Enter valid 6-digit pincode",
                  },
                })}
              />
              {errors.pincode && (
                <small className="text-danger">{errors.pincode.message}</small>
              )}
            </div>
          </div>

          {/* Password & Confirm Password */}
          <div className="row mb-3">
            
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
           
          </div>
           <div className="row">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value, formValues) =>
                    value === formValues.password || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <small className="text-danger">
                  {errors.confirmPassword.message}
                </small>
              )}
            </div>

          {/* Submit */}
          <div className="d-grid mt-3">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
