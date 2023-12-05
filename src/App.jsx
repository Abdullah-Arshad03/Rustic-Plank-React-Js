import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/Main-page/MainPage";
import Collections from "./components/Collection-section/Collections";
import Products from "./components/Products-Section/Products";
import Deals from "./components/Deals-Section/Deals";
import Updates from "./components/Updates-section/Updates";
import Footer from "./components/Footer/Footer";
import './App.css'

const App = () =>{
  return(<>

 {/* <Navbar/> */}
 {/* <MainPage/> */}
 <Collections/>
 <Products/>
 <Deals/>
 <Updates/>
 <Footer/>
      
  </>)
}

export default App