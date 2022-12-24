import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import './App.css';
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { config } from "./Config";

function Resetpass() {
  const navigate = useNavigate();
  const loginForm = useFormik({
    initialValues: {
      password: "",
      confirmpassword: "",
    },
    onSubmit: async (values) => {
           try {
        const user = await axios.post(`${config.api}/reset-password/:id/:token`, values);

          navigate("/");

      } catch (error) {
        alert(error.response.data.message);
      }
    },
  });
  return (
    <div className="card" style={{width: '500px' , height:'auto',}}>
            <h3 className="header">Sign-in</h3>
      <div className="login-img">
        <img
        
          src="reset-password/:id/:token"
          className="card-img-top real-img"
          alt="login-img"
        />
      </div>
      <form onSubmit={loginForm.handleSubmit}>
        <div className="row">
          <div className="col-lg-12 form-group">
            <h4 className="label" >New Password</h4>
            <input
              type={"confirmpassword"}
              name="confirmpassword"
              value={loginForm.values.confirmpassword}
              onChange={loginForm.handleChange}
              className="form-control"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="col-lg-12 form-group">
            <h4 className="label">Confirm PASSWORD</h4>
            <input
              type={"confirmpassword"}
              name="confirmpassword"
              value={loginForm.values.confirmpassword}
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
        </div>
      </form>
    </div>
  );
}

export default Resetpass;
