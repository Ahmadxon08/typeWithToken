import { Route, Routes } from "react-router-dom";
// import Admin from "../Content/Admin";
// import Test from "../components/Test";
import Login from "../components/Login";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<Admin />}>
          <Route index element={<Test />} />
        </Route> */}
      </Routes>
    </div>
  );
};

export default Router;
