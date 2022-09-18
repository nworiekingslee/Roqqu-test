import { Link } from "react-router-dom";

// icons import
import logo from "../../images/roqqu-logo.png";
import profile from "../../images/profile.png";
import notification from "../../images/navigation/notification.svg";

// css import
import "../../styles/Topnav.css";

const Topnav = () => {
  return (
    <div className="top-nav">
      <div className="link-group">
        <Link to="/">
          <img src={logo} alt="Roqqu" className="nav-brand" />
        </Link>
        <div className="profile-group">
          <img src={notification} alt="notification" className="icon" />
          <div className="user-profile">
            <img src={profile} alt="user" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
