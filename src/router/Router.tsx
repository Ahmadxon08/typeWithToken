// Router.tsx
import { Route, Routes } from "react-router-dom";
import Register from "../components/register/Register";
import Admin from "../Content/Admin";
import Profile from "../components/profile/Profile";
import Home from "../pages/home/Home";
import Service from "../pages/service/Service";
import Login from "../components/login/Login";
import Notification from "../notification/Notification";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Admin />}>
          <Route index element={<Home />} />
          <Route path="/service" element={<Service />} />
        </Route>
      </Routes>
      <Notification />
    </div>
  );
};

export default Router;
