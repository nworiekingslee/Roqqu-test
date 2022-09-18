import TransactionDashboard from "../components/TransactionDashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart } from "@fortawesome/free-regular-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { faChessBishop } from "@fortawesome/free-regular-svg-icons";
import { faFaceKissBeam } from "@fortawesome/free-regular-svg-icons";
import { faHandsAslInterpreting } from "@fortawesome/free-solid-svg-icons";

// css import
import "../styles/TransactionPage.css";

const TransactionPage = (props) => {
  const coin = props.match.params.coin;

  return (
    <div className="single-col container">
      <TransactionDashboard coin={coin} />

      <div className="grid-container">
        <div className="chart-section">
          <div className="chart-header">
            <h3>Charts</h3>
            <span>
              <button>Price</button>
              <button>Depth</button>
            </span>
          </div>

          <div className="action-nav">
            {/* Icons neeeded are not downloadable form the design files, 
            so I turned to Fontawesome ...and still couldn't find the exact icon */}
            <div className="action-group">
              <span className="action-item">4h</span>
              <span className="action-item">
                <FontAwesomeIcon
                  icon={faBarChart}
                  className="font-icon"
                ></FontAwesomeIcon>
              </span>
              <span className="action-item">
                <FontAwesomeIcon
                  icon={faCompass}
                  className="font-icon"
                ></FontAwesomeIcon>
              </span>
              <span className="action-item">
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                  className="font-icon"
                ></FontAwesomeIcon>
              </span>
            </div>

            <div className="action-group">
              <span className="action-item">Save</span>
              <span className="action-item">
                <FontAwesomeIcon
                  icon={faChessBishop}
                  className="font-icon"
                ></FontAwesomeIcon>
              </span>
              <span className="action-item">
                <FontAwesomeIcon
                  icon={faFaceKissBeam}
                  className="font-icon"
                ></FontAwesomeIcon>
              </span>
              <span className="action-item">
                <FontAwesomeIcon
                  icon={faHandsAslInterpreting}
                  className="font-icon"
                ></FontAwesomeIcon>
              </span>
            </div>
          </div>

          <div className="chart">chart here</div>
        </div>
        <div>
          <div className="order-book">Order-book</div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
