import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/footer/Footer";
import HeaderPage from "./component/header/HeaderPage";
import Login from "./component/login/Login";
import Cart from "./component/Cart/Cart";
import SingUp from "./component/SingUp/SingUp";
import Reset from "./component/Reset/Reset";
import Home from "./Home";
import Prectice from "./Prectice";
import PrecticeFile2 from "./PrecticeFile2";
import Sidemenu from "./component/header/Sidemenu";
import SearchPage from "./component/header/SearchPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={[<HeaderPage />, <Footer />]} />
          {/* <Route path="/" element={<HeaderPage />} />
          <Route path="/" element={<Footer />} /> */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SingUp" element={<SingUp />} />
          <Route path="/Reset" element={<Reset />} />
          <Route path="/Sidemenu" element={<Sidemenu />} />
          <Route path="/SearchPage" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
     
       {/* <Prectice /> */}
      {/* <PrecticeFile2 />  */}
    </>
  );
}

export default App;
