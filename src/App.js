import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import CartItems from "./components/CartItems";
import Layout from "./components/Layout";

function App() {
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  const cartItems = useSelector((state) => state.cart.itemList);
  console.log(cartItems);

  return (
    <div className="App">
      {!isLoggedin && <Auth />}
      {isLoggedin && <Layout />}
    </div>
  );
}

export default App;
