import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Register.scss";
import { useLogin } from "../../app/auth/useLogin";

const Register = () => {
  const { register } = useLogin();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(formData);
    console.log(formData);

    // register funktsiyasini ishga tushiramiz
  };

  return (
    <div className="container">
      <div className="reg_content">
        <div className="back">
          <Link to={"/"}>
            <IoIosArrowBack color="#000" size={32} />
            <span>Ortga</span>
          </Link>
        </div>
        <div className="register">
          <div className="reg_head">
            <h1>Royhatdan o'tish</h1>
          </div>
          <form onSubmit={handleSubmit} className="reg_form">
            <div className="reg_group">
              <label htmlFor="fullName">Ismingiz</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                onChange={handleChange}
              />
            </div>
            <div className="reg_group">
              <label htmlFor="phoneNumber">Telefon raqamingiz</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                onChange={handleChange}
              />
            </div>
            <div className="reg_group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="reg_group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="btn">
              <button type="submit">Ro'yhatdan o'tish</button>
            </div>
            <div className="tizim">
              <span>Ro'yhatdan o'tganmisiz ?</span>
              <Link to={"/login"}>Tizimga kirish</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
