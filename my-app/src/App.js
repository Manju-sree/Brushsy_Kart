import "./App.css";
import logo from "./logo.png";
import Home from "./pages/Home/HomePage";
import{Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
