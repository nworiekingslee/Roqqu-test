import "../styles/SideNav.css";

import stack from "../images/navigation/stack.svg";
import chart from "../images/navigation/bar-chart.svg";
import book from "../images/navigation/book.svg";
import fire from "../images/navigation/fire.svg";
import notification from "../images/navigation/notification.svg";
import pulse from "../images/navigation/pulse.svg";
import settings from "../images/navigation/settings.svg";
import wallet from "../images/navigation/wallet.svg";

const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="nav-group">
        <div className="nav-item">
          <img src={stack} alt="" />
        </div>
        <div className="nav-item">
          <img src={chart} alt="" />
        </div>
        <div className="nav-item">
          <img src={wallet} alt="" />
        </div>
        <div className="nav-item">
          <img src={book} alt="" />
        </div>
        <div className="nav-item">
          <img src={pulse} alt="" />
        </div>
        <div className="nav-item">
          <img src={fire} alt="" />
        </div>
        <div className="nav-item">
          <img src={settings} alt="" />
        </div>
        <div className="nav-item">
          <img src={notification} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
