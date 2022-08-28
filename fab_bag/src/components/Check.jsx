import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./Checkout.module.css"

export default function Check() {

    const navigate=useNavigate()
 
   

    const handlesubmit=(e)=>{
     e.preventDefault();
     alert("Thank you for Reaching us")
     navigate("/")
    }
  
  
  
    
    return  (
      <div className={styles.checkoutparent}>
       
          <div className={styles.left}>
         <div className={styles.contactinformation}>
       
              <form
               onSubmit={handlesubmit} 
               >
                  <div className={styles.headlogo}>
                     
                      <img className={styles.headlogoimg} src='https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO-FINAL.png?10432' alt="kp"/>
                  </div>
                  <div className={styles.upperdiv}>
                      <h4>Contact inforamtion</h4>
                      
                  </div>
                  <div className={styles.emailbox}>
                      <p style={{color:"red"}}></p>
                  <input name="email"   type="email" placeholder='Email'></input>
                  <div >
                  <p style={{color:"red"}}></p>
                  <input name="checkbox"    type="checkbox"></input>
                  <label>Email me with news and offers</label>
                  </div>
                  </div>
                  <br/>
                  <h4>Shiping address</h4>
                  
                  <div>
                  <p style={{color:"red"}}></p>
                      <select name="select"   className={styles.selectcountry}>
                          <option>Country</option>
                          <option>
                           India
                          </option>
                      </select>
                  </div>
                  <div className={styles.personname}>
                   
                      <div>
                      <input name="name"   type="text" placeholder='First name'></input>
                      <p style={{color:"red"}}></p>
                      </div>
                      <div>
                      <input name="last"   type="text" placeholder='Last name'></input>
                      <p style={{color:"red"}}></p>
                      </div>
  
                  </div>
                  <div className={styles.company}>
  
                      <input type="text"  placeholder="Company(optional)"></input>
                  </div>
                  <div className={styles.address}>
                  
                      <input type="text"  name="address"  placeholder="Address"></input>
                      <p style={{color:"red"}}></p>
                  </div>
                  <div className={styles.apartment}>
                      <input type="text"   placeholder='Apartment suite, etc.(optional)'></input>
                  </div>
                  <div className={styles.citystatepin}>
                 <div>
               <input type="text" name="city"   placeholder='City'></input>
                      <p style={{color:"red"}}></p>
                 </div>
                      
                      
                      <div>
                         <select className={styles.state} name="selectstate"  >
                             <option>State</option>
                         <option value="Andhra Pradesh">Andhra Pradesh</option>
  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
  <option value="Assam">Assam</option>
  <option value="Bihar">Bihar</option>
  <option value="Chandigarh">Chandigarh</option>
  <option value="Chhattisgarh">Chhattisgarh</option>
  <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
  <option value="Daman and Diu">Daman and Diu</option>
  <option value="Delhi">Delhi</option>
  <option value="Lakshadweep">Lakshadweep</option>
  <option value="Puducherry">Puducherry</option>
  <option value="Goa">Goa</option>
  <option value="Gujarat">Gujarat</option>
  <option value="Haryana">Haryana</option>
  <option value="Himachal Pradesh">Himachal Pradesh</option>
  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
  <option value="Jharkhand">Jharkhand</option>
  <option value="Karnataka">Karnataka</option>
  <option value="Kerala">Kerala</option>
  <option value="Madhya Pradesh">Madhya Pradesh</option>
  <option value="Maharashtra">Maharashtra</option>
  <option value="Manipur">Manipur</option>
  <option value="Meghalaya">Meghalaya</option>
  <option value="Mizoram">Mizoram</option>
  <option value="Nagaland">Nagaland</option>
  <option value="Odisha">Odisha</option>
  <option value="Punjab">Punjab</option>
  <option value="Rajasthan">Rajasthan</option>
  <option value="Sikkim">Sikkim</option>
  <option value="Tamil Nadu">Tamil Nadu</option>
  <option value="Telangana">Telangana</option>
  <option value="Tripura">Tripura</option>
  <option value="Uttar Pradesh">Uttar Pradesh</option>
  <option value="Uttarakhand">Uttarakhand</option>
  <option value="West Bengal">West Bengal</option>
                         </select>
                  <p style={{color:"red"}}></p>
                    </div>  
                    <div>
                    <input name="pin"   type="number" placeholder='PIN code'></input> 
                         <p style={{color:"red"}}></p>
                         </div>    
          
      
    
                      
  </div>
  
  <div className={styles.phonenum}>
  <p style={{color:"red"}}></p>
      <input name="phone"   type="number" placeholder='Phone'></input>
      <div>
          <input type="checkbox"></input>
          <label>Save this information for the next time</label>
      </div>
  </div>
  <div className={styles.allbutton}>
      <button  className={styles.returncart} >Return to cart</button>
      <button  
    //   onClick={handlesubmit} 
        className={styles.shippingbtn}>Continue to shipping</button>
  </div>
  <hr className={styles.uppermarginline}/>
  <div className={styles.refund}>
      <h6>Refund policy</h6>
      <h6>Privacy policy</h6>
      <h6>Terms of Service</h6>
  </div>
  
  </form>
              
  
          </div>
          </div>
      
          </div>
     
    
    )
 
}

  


