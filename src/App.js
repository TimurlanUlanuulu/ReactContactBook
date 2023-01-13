import "./App.css";
import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";

//json-server -w db.json -p 8000

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
