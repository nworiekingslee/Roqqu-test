import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./routes/Home";
import TransactionPage from "./routes/TransactionPage";

// css import
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
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
