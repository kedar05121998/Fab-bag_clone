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


<Bagcomponent/>
<Subscription/>
<Testimonial/>
<TrendingCorner/>


</div>
       

    )
}
export default FrontPage;