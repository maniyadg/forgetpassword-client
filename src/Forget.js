import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import './App.css';
import { useFormik } from "formik";
import { config } from "./Config";

function Forget() {
  const loginForm = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
           try {
        const user = await axios.post(`${config.api}/forget`, values);
        if (user.data.message === "success") {
          alert("E-MAIL Sent Check Your E-mail")
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  });
  return (
    <div className="card" style={{width: '500px' , height:'auto',}}>
            <h3 className="header">Forget Password</h3>
      <div className="forget-img">
        <img
        
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZPYMrQqi67tbub6JCWygHh0tou-WeG4LY2w&usqp=CAU"
          className="card-img-top real-img"
          alt="login-img"
        />
      </div>
      <form onSubmit={loginForm.handleSubmit}>
        <div className="row">
          <div className="col-lg-12 form-group">
            <h4 className="label" >Enter Your Valid E-MAIL</h4>
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

export default Forget;
