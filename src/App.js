import {Home,Products,Cart,WishList,SignUp,Login,Logout} from "./pages/index";
import { NavBarTop } from "./components";
import MockMan from "mockman-js";
import{Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBarTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/WishList" element={<WishList />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Logout" element={<Logout/>} />
        <Route path="/mockman" element={<MockMan />} />
      </Routes>      
    </div>
  );
}

export default App;
