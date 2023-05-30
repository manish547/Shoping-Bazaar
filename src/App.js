import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import HeaderPage from "./component/header/HeaderPage";
import Login from "./component/login/Login";
import Cart from "./component/Cart/Cart";
import SingUp from "./component/SingUp/SingUp";
import Reset from "./component/Reset/Reset";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={[<HeaderPage />, <Footer />]} /> */}
          <Route path="/" element={<HeaderPage /> } />
          {/* <Route path="/" element={<HeaderPage />} />
          <Route path="/" element={<Footer />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/singUp" element={<SingUp />} />
          <Route path="/reset" element={<Reset />} />
          {/* <Route path="/sidemenu" element={<Sidemenu />} /> */}
          {/* <Route path="/searchPage" element={<SearchPage />} /> */}
        </Routes>
      </BrowserRouter>
     
      
       {/* <Prectice /> */}
      {/* <PrecticeFile2 />  */}
    </>
  );
}

export default App;
