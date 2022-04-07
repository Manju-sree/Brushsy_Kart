import {Home,Products,Cart,WishList,SignUp,Login,Logout} from "./pages/index";
import {Error404} from "./components";
import MockMan from "mockman-js";
import{Routes, Route} from "react-router-dom";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/WishList" element={<ProtectedRoutes authToPages={<WishList />}></ProtectedRoutes>}></Route>
        <Route path="/Cart" element={<ProtectedRoutes authToPages={<Cart />}></ProtectedRoutes>}></Route>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Logout" element={<Logout/>} />
        <Route path="*" element={<Error404 />} />
        <Route path="/mockman" element={<MockMan />} />
      </Routes>      
    </div>
  );
}

export default App;
