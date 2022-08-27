import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import  Styles from "./test.module.css";
import Product from './Product';

 export const Bagcomponent = () => {
 const navigate=useNavigate()
 
  const handlegotoProduct=()=>{
     navigate("/product")
  }
 
  return (
    <>
    <div className={Styles.heading}>
 <h3 className={Styles.title}>
 <span >WHAT'S IN THE BAG</span>
 </h3>
    </div>
 <div className={Styles.main}>
 <Carousel>
   <Carousel.Item interval={10000}>
   <div className={Styles.maindiv}>
   <div onClick={handlegotoProduct} className={Styles.img}>
   <img className={Styles.img}   src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-1_2_2048x.png?v=1659292954" alt="k"/>
   <p className={Styles.para} >SUGAR POP Lip Kit of your choice*</p>
   </div>
   <div  onClick={handlegotoProduct} className={Styles.img}>
   <img className={Styles.img} src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-2_9bedf574-c534-4874-91c5-e28b5c916023_2048x.png?v=1659500490" alt="k" />
   <p className={Styles.para}>Liquid Lipstick of your choice!*</p>
   </div>
   <div onClick={handlegotoProduct} className={Styles.img}>
   <img className={Styles.img}  src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-3_c51024ea-e8b5-49e6-a60f-7ebadf441433_2048x.png?v=1659674566" alt="k" />
   <p className={Styles.para}>SUGAR POP Vitamin C & Tea Tree Facewash</p>
   </div>
   <div onClick={handlegotoProduct} className={Styles.img}>
   <img  className={Styles.img}  src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-5_6626eab8-e174-491f-9b2e-ec771773381a_2048x.png?v=1659887286" alt="k" />
   <p className={Styles.para}>Plum Avocado Frizz-Control Cleanse & Nourish Duo</p>
   </div>
 
 
   </div> 
    
   </Carousel.Item>
   <Carousel.Item interval={50000}>
    
    <div className={Styles.maindiv} >
    <div onClick={handlegotoProduct} className={Styles.img}>
   <img className={Styles.img}  src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-4_194ea6fc-6a60-49cd-9f31-04cab8aa4296_2048x.png?v=1660019997" alt="k" />
   <p className={Styles.para}>Baiser India Skin Defence Masque or Palmer's Raw Shea Butter Body Lotion or Tvakh Whipped Fruit Body Butter*</p>
   </div>
   <div onClick={handlegotoProduct} className={Styles.img}>
   <img className={Styles.img}  src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-7_2048x.gif?v=1661148766" alt="k" />
   <p className={Styles.para}>Vriksha Veda Floral Fusion OR Keeva Naturals Scuba Dive Shower Gel</p>
   </div>
   <div onClick={handlegotoProduct} className={Styles.img}>
   <img  className={Styles.img}  src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-6_1_2048x.gif?v=1660802195" alt="k" />
   <p className={Styles.para}>Raas Strawberry Lip Balm OR Tejas Blends Lavender Foot Mist OR The Soap Company India Foot therapy</p>
   </div>
    <div onClick={handlegotoProduct}  className={Styles.img}>
     <img  className={Styles.img}  src="//cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-Bonus_2048x.gif?v=1651344727" alt="k" /> 
     <p className={Styles.para}>Bonus*</p>  
    </div> 
    </div>
   </Carousel.Item>
   
 </Carousel>
 
 
 
 
 </div>
 
 
    </>
   )
}

export default Bagcomponent
