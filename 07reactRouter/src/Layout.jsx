import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
function Layout(){
    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}
export default Layout

//Here the Navbar and Footer stay the same, while the page content inside <Outlet /> changes when the route changes.