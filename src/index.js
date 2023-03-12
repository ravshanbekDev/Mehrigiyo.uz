import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import counterReducer from "./redux/Counter/Counter";
import modalReducer from "./redux/ModalSlice/ModalSlice";
import cartReducer from "./redux/cartSlice/cartSlice";
import favoriteReducer from "./redux/favoriteSlice/favoriteSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer,
    modal: modalReducer,
    counter: counterReducer,
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
