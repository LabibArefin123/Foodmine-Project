// // No import needed since React is not used in this file

// import Navbar from "./components/Navbar/Navbar";
// import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
// import Cart from "./pages/Cart/Cart";
// import Home from "./pages/Home/Home";
// import { Route, Routes, useState } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
// import LoginPopUp from "./components/LoginPopUp/LoginPopUp";

// const App = () => {
//   const [showLogin, setShowLogin] = useState(false);
  
//   return (
//     <>
//     {showLogin?<LoginPopUp/>:<></>}
//       <div className="app">
//         <Navbar setShowLogin={setShowLogin} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/order" element={<PlaceOrder />} />
//           <Route path="/cart" element={<Cart />} />
//         </Routes>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default App;

// No import needed since React is not used in this file

import Navbar from "./components/Navbar/Navbar";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import { Route, Routes} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Service from "./components/Service/Service";
// import LoginPopUp from "./components/LoginPopUp/LoginPopUp";

const App = () => {

  
  return (
    <>
    
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ourservice" element={<Service />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
