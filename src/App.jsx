import { Route, Switch } from "react-router-dom";
import Nav from "./components/homeComponents/Nav";
import Home from "./routes/Home";
import TransactionPage from "./routes/TransactionPage";

// css import
import "./styles/App.css";

const App = () => {
  const base_url = process.env.REACT_APP_BASE_ENDPOINT;
  console.log("ENV", base_url);
  return (
    <div className="App">
      {process.env.BASE_ENDPOINT}
      <Nav />
      <Switch>
        <Route
          path="/:coin"
          render={(props) => <TransactionPage {...props} />}
        />
        <Route path="/" render={(props) => <Home {...props} />} />
      </Switch>
    </div>
  );
};

export default App;
