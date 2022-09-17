import "./styles/App.css";
import Nav from "./components/Nav";
import Home from "./routes/Home";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
};

export default App;
