import "../styles/Topnav.css";
import logo from "../images/roqqu-logo.png";
import profile from "../images/profile.png";
import notification from "../images/navigation/notification.svg";

const Topnav = () => {
  return (
    <div className="top-nav">
      <img src={logo} alt="Roqqu" className="nav-brand" />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: 100,
          margin: 32,
        }}
      >
        <img src={notification} alt="notification" className="icon" />
        <div className="user-profile">
          <img src={profile} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Topnav;
