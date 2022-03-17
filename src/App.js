import {Home,Products,Cart,WishList} from "./pages/index";
import MockMan from "mockman-js";
import{Routes, Route} from "react-router-dom";
import { NavBarBottom } from "./components/NavBarBottom/NavBarBottom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/WishList" element={<WishList />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/mockman" element={<MockMan />} />
      </Routes>
      <NavBarBottom/>
    </div>
  );
}

export default App;
