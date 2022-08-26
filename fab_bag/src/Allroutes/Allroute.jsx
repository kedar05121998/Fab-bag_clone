
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import FrontPage from "../components/FrontPage";

import Login from "../components/Login"
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import SignUp from "../components/Signup";



function AllRoutes(){
    return(
        <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<FrontPage/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<h1>cart</h1>} />
            <Route path="/Product" element={<Product/>} />

        </Routes>
    
    <Footer/>
        </div>
    ) 
}

export default AllRoutes;