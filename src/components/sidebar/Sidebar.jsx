import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
 import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useUserAuth } from "../../context/UserAuthContext";
import { toast } from 'react-toastify';


const Sidebar = () => {

  const { logOut, currentUser } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
      e.preventDefault();
      try {
          await logOut(auth, currentUser)
              .then(() => { toast.info("Vous êtes bien Déconnecter !") });
          console.log("Déconnexion Réussie !");
          navigate("/");
      } catch (error) {
          console.log(error.message);
      }
  };


  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo">Wonder Trading</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/home">
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <p className="title">USEFUL</p>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <Link to="/support">
          <li>
            <SupportAgentIcon className="icon" />
            <span>Support</span>
          </li>
          </Link>
          <p className="title">USER</p>
          <Link to="/users/userprofile">
            <li>
              <AccountCircleIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <Link to="/">
          <li>
            <ArrowBackIcon className="icon" />
            <span>Return Home</span>
          </li>
          </Link>
          <li onClick={handleLogout}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Sidebar;
