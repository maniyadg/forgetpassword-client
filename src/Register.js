import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./App.css";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { config } from "./Config";

function Register() {
  const navigate = useNavigate();
  const loginForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const user = await axios.post(`${config.api}/user/register`, values);
if(user.data.message === "success"){
navigate('/')
}
       
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  });
  return (
    <div className="card" style={{ width: "500px", height: "auto" }}>
      <h3 className="header">Sign-up</h3>
      <div className="reg-img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1xX0xkbmEMSXYYYZ-w3lB2qVAXQwfhEYrnw&usqp=CAU"
          className="card-img-top real-img"
          alt="login-img"
        />
      </div>
      <form onSubmit={loginForm.handleSubmit}>
        <div className="row">
          <div className="col-lg-12 form-group">
            <h4 className="label">Enter Your Full Name</h4>
            <input
              type={"name"}
              name="name"
              value={loginForm.values.name}
              onChange={loginForm.handleChange}
              className="form-control"
              placeholder="Full Name"
            />
          </div>
          <div className="col-lg-12 form-group">
            <h4 className="label">Enter Your Valid E-MAIL</h4>
            <input
              type={"email"}
              name="email"
              value={loginForm.values.email}
              onChange={loginForm.handleChange}
              className="form-control"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="col-lg-12 form-group">
            <h4 className="label">PASSWORD</h4>
            <input
              type={"password"}
              name="password"
              value={loginForm.values.password}
              onChange={loginForm.handleChange}
              className="form-control"
              placeholder="password"
            />
          </div>
          <div className="col-lg-12 form-group">
            <input
              type={"submit"}
              className="btn btn-primary mt-2"
              value={"Submit"}
            />
          </div>
          <Link to="/login" className="option-list">
            Sign-in
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
