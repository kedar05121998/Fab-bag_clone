import React from 'react'
import  Styles from "./test.module.css";
import {datas }from "./trendingData" 
const TrendingCorner = () => {
  return (
   <>
<h2 className={Styles.instafeed}>#TRENDINGNOW AT THE GOSSIP CORNER</h2>
<div className={Styles.instadiv}>
{datas.map((item)=>{
  return <div key={item.id} className={Styles.instaimage} >
  <img src={item.image} className={Styles.instaimage}/>
</div>
})}



</div>





   </>
  )
}

export default TrendingCorner