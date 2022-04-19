import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import Blog from "./Components/Blog/Blog";
import Book_now from "./Components/Booknow/Book_now";
import Error from "./Components/Error/Error";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Signup from "./Components/Signup/Signup";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>      
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/book" element={
          <RequireAuth>
            <Book_now></Book_now>
          </RequireAuth>}>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;

