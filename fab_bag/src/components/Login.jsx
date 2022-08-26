import { useState,useContext } from "react";
import {Navigate} from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@chakra-ui/react";



export default function SignUp(){

    const { state } = useContext(AuthContext) ;
    const [name,setName]= useState("");
    const [password,setPassword]= useState("");
    const navigate= useNavigate();
    function login(){
            if(state.name==name && state.password==password){
            alert("Signed Up successfully");
            navigate(`/`) ;
           }
           else{
            alert("Incorrect name and password")
           }
       }
    console.log(state)

    return(
        <div>
            <Input style={{width:"50%"}} onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Enter your email"/> <br />
            <Input style={{width:"50%"}} onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="Enter your password"/>
            <Button onClick={login}>Login Up</Button>
        </div>
    )
}