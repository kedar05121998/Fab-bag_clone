import { useState,useContext } from "react";
import {Navigate} from "react-router-dom";
import { AuthContext } from "../Context/AuthContext"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, HStack, Input } from "@chakra-ui/react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import "./LoginSignup.css"

export default function SignUp(){

    const [name,setName]= useState("");
    const [password,setPassword]= useState("");
    const { handleSignUp } = useContext(AuthContext) ;
    const navigate= useNavigate();
    function signup(){
    alert("Please Login ")
    handleSignUp(name,password) ;
    navigate(`/login`) ;
           
        
    }

    return(
        <div className="sigup_main" >
          <HStack>
  <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
   Sign in with Facebook
  </Button>

  <br />
  <Button colorScheme='twitter' leftIcon={<FaGoogle />}>
  Sign in with Google
  </Button>
  <br />
</HStack>
            <Input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Enter your email"/> <br />
            <br />
            <Input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="Enter your password"/>
           <br />
            <Button onClick={signup}>Sign Up</Button>
        </div>
    )
}