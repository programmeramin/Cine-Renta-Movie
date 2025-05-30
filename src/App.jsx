import React from "react";
import {useState} from "react"
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MovieList from "./cine/MovieList";
import Footer from "./Footer";
import { MovieContext } from "./context";

function App() {

  const [cartData, setCartData] = useState([]);

  return (
    <>
      <MovieContext.Provider value={{cartData, setCartData}}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
          </div>
        </main>
        <Footer />
      </MovieContext.Provider>
    </>
  );
}

export default App;
