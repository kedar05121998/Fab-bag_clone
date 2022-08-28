
import { Route, Routes } from "react-router-dom";
import Check from "../components/Check";
// import Checkout from "../components/Checkout";
// import Checkout from "../components/Checkout";
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
            <Route path="/Product" element={<Product />} />
            <Route path="/checkout" element={<Check />} />

        </Routes>
    
    <Footer/>
        </div>
    ) 
}

export default AllRoutes;