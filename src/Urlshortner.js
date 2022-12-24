import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import './App.css';
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { config } from "./Config";

function Urlshortner() {



  const loginForm = useFormik({
    initialValues: {
      longurl: "",
    },
    onSubmit: async (values) => {
           try {
        const user = await axios.post(`${config.api}/urlshortner`, values);
      
alert(`https://url-shortner-t9jt.onrender.com/${user.data.shoten}`)
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
        
        //   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZPYMrQqi67tbub6JCWygHh0tou-WeG4LY2w&usqp=CAU"
          className="card-img-top real-img"
          alt="login-img"
        />
      </div>
      <form onSubmit={loginForm.handleSubmit}>
        <div className="row">
          <div className="col-lg-12 form-group">
            <h4 className="label" >Enter Your Long URL</h4>
            <input
              type={"text"}
              name="longurl"
              value={loginForm.values.longurl}
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

export default Urlshortner;
