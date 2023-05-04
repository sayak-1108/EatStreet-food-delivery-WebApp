import './App.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from "c:/Users/dassa/Desktop/EatStreet/my-app/src/screens/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Navbar from './components/Navbar';
import Login from "c:/Users/dassa/Desktop/EatStreet/my-app/src/Screens/Login";
import Signup from "c:/Users/dassa/Desktop/EatStreet/my-app/src/Screens/Signup";
import { CartProvider } from "c:/Users/dassa/Desktop/EatStreet/my-app/src/components/ContextReducer";
import MyOrder from "c:/Users/dassa/Desktop/EatStreet/my-app/src/Screens/MyOrder";


function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/myorder" element={<MyOrder />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
