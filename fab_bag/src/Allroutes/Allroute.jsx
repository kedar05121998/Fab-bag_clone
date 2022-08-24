
import { Route, Routes } from "react-router-dom";
import FrontPage from "../components/FrontPage";
import Navbar from "../components/Navbar";


function AllRoutes(){
    return(
        <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<FrontPage/>} />
            <Route path="/signup" element={<h1>Signup</h1>} />
            <Route path="/cart" element={<h1>cart</h1>} />

        </Routes>
      
    
        </div>
    ) 
}

export default AllRoutes;