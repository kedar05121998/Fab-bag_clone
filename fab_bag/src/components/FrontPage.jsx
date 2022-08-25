import UncontrolledExample from "./slider";
import "./frontend.css"
import { Link } from "react-router-dom";
import TrendingCorner from "./trending";
import Testimonial from "./test";
import Footer from "./Footer";
import Subscription from "./subscribe";
import Bagcomponent from "./commonProduct";

function FrontPage(){

    return(
        <div>
<UncontrolledExample/>

{/* <div className="kp" >
  <h1 style={{color:"black"}} > <u style={{color:"#e5ba61"}} > WHAT'S IN THE BAG   </u> </h1>
</div> */}
{/* <b></b> */}

{/* <div className="product_data" >
    <div className="sub_product" >
<Link to="/Product" >
    <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-3_c51024ea-e8b5-49e6-a60f-7ebadf441433_2048x.png?v=1659674566" alt="img1" />

    </Link>
    </div>
</div> */}
<Bagcomponent/>
<Subscription/>
<Testimonial/>
<TrendingCorner/>


</div>
       

    )
}
export default FrontPage;