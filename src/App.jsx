import React, { useState, useReducer } from "react";
import "./App.css";
import { MovieContext, ThemeContext } from "./context";
import Page from "./Page";
import { initialState, cartReducer } from "./Reducer/CartReducer";

function App() {
 // const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
