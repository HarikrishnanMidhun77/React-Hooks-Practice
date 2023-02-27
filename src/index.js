import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createContext, useContext } from "react";

//export const FruitsContext = createContext();
const FruitsContext = createContext();
export const useFruits = () => useContext(FruitsContext);

const fruits = [
  { id: 1, name: "Orange" },
  { id: 2, name: "Mango" },
  { id: 3, name: "Grapes" },
  { id: 4, name: "Banana" },
  { id: 5, name: "Peach" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FruitsContext.Provider value={{ fruits }}>
    <App />
  </FruitsContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
