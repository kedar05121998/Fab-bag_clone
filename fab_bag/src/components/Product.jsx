import React from "react";
import "./Product.css"
import {Button, Heading} from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom";





function Product() {
  // const navigate=useNavigate()
  // function goToCheck(){
  //    navigate("/Checkout")
  // }
  return (
  
    <div className="p_main" style={{display:"flex",width:"90%"}} >
         <div className="p_main_img">
           <img /*style={{width:"70%"}}*/ src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-3opt.gif?v=1661148586" alt="product" />
         </div>

         <div className="p_main_data" style={{width:"50%"}} >
{/* <p style={{padding:"10px"}} >HOME</p> */}

<Heading  >The Own 8 All August Fab Bag</Heading>

<Heading noOfLines={1} style={{marginTop:"100px",marginLeft:"-200px"}} >
Rs. 599.00
</Heading>
<p>We appreci-EIGHT your love and hence we've decided to treat you with 8 unbeatable...</p>

<Link to="/Checkout">
<Button
  size='md'
  height='48px'
  marginTop="20px"
  width='400px'
  // border='2px'
  borderColor='green.500'
  bgColor="black"
  color="white"
  marginBottom="10px"
  // onClick={goToCheck}

>
Proceed to Checkout
</Button>
</Link>
<br />

              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-google"></i>
         </div>
      
     
    </div>
  )
}

export default Product;