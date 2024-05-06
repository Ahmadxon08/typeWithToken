// Login.tsx
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { ChangeEvent, FormEvent, useState } from "react";
import { useLogin } from "../../app/auth/useLogin";
// import { useLogin } from "../../app/auth/useLogin";

interface FormData {
  email: string;
  password: string;
}

const LoginImg = "./assets/logiinImg.png";
const Login = () => {
  const navigate = useNavigate();
  const { login }: any | string = useLogin();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  localStorage.setItem("user", JSON.stringify(formData));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(formData);
    navigate("/");
  };

  return (
    <div>
      <section className="img">
        <img src={LoginImg} alt="this is a login image of login page" />
      </section>
      <section>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="head">
              <h1>Tizimga kirish </h1>
            </div>
            <div className="formBody">
              <div className="form_group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  name="email"
                  placeholder=""
                />
              </div>
              <div className="form_group">
                <label htmlFor="password">Parol</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder=""
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="btn">
                <button type="submit">Tizimga kirish</button>
              </div>
              <div className="register">
                <span>Hisobingiz yo'qmi ?</span>
                <Link to={"/register"}>Registerga o'tish</Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
