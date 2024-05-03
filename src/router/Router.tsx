import { Route, Routes } from "react-router-dom";
// import Admin from "../Content/Admin";
// import Test from "../components/Test";
import Login from "../components/Login";
import Register from "../components/Register";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/" element={<Admin />}>
          <Route index element={<Test />} />
        </Route> */}
      </Routes>
    </div>
  );
};

export default Router;
