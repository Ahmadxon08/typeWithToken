import "./Profile.scss";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FaArrowLeftLong } from "react-icons/fa6";

// const logo = "./assets/logo.jpg";

const Profile = () => {
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;

  return (
    <div>
      <div className="container">
        <div className="profile_head">
          <Link to={"/"}>
            <Button variant="text">
              <FaArrowLeftLong color="black" size={22} />
            </Button>
          </Link>
          <h1>Profil</h1>
        </div>
        {/* <img src={logo} alt="logo" /> */}
        <div className="profile_body">
          {user && (
            <>
              <span>Faydalanuvchining email: {user.email}</span>
              <span>Faydalanuvchining password: {user.password}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
