// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { AppContext, fetchAppData, withProvider } from "./App.state";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Checkout from "./pages/Checkout/Checkout";
import Address from "./pages/Address/Address";
import Products from "./pages/Products/Products";
import Payment from "./pages/Payment/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useContext, useEffect } from "react";

const promise = loadStripe(
  "pk_test_51NjGl6SGgdxE467MnjeT1lxrcwqbLeYTrnlhnQ8iI50OPRN5YyD4n11saSUQFnVRpTgx0eJyrCTcTnlTITKeoENM005J3o77gk"
);
const App = () => {
  const context = useContext(AppContext);
  if (!context) return <></>;
  const { dispatch } = context;
  useEffect(() => {
    fetchAppData(dispatch);
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/address" element={<Address />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default withProvider(App);
