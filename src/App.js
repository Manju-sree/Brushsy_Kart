import {Home,Products,Cart,WishList} from "./pages/index";
import{Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Products />} />
        <Route path="/" element={<WishList />} />
        <Route path="/" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
