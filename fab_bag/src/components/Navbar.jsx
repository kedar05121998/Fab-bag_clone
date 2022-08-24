// import { Link } from 'react-router-dom';
import './Nav.css'
// import { IconName } from "react-icons/bs"
import { FaSistrix,FaHeart,FaUserCircle,FaShoppingCart } from "react-icons/fa";

import { Link } from 'react-router-dom';







function Navbar(){
return(
    <div className="nav_main" >
      <h1>Subscribe Now</h1>
        <div className='nav_img' >
            <Link to="/">
            <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO-Printing1_6350cdb4-8c03-49a8-bd2e-c8df50c83b37_2048x.png?v=1660282958" alt="img" />
            </Link>
           
        </div>
        <div className='nav_icon' >
        <Link to="./" > <FaSistrix style={{height:"50px",color:"#e5ba61"}}   /></Link>
      
       <FaHeart style={{height:"50px",color:"#e5ba61"}  } />
    <Link to="/signup" > <FaUserCircle style={{height:"50px",color:"#e5ba61"} } /></Link>
      
      <Link to="/cart" > <FaShoppingCart style={{height:"50px",color:"#e5ba61"} } /></Link>
      
    
        
         
         
        </div>
      

    </div>
 
)
}

export default Navbar;