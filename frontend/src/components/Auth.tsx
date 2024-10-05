import { ChangeEvent, useState } from "react";
import { Link, useNavigate  } from "react-router-dom"
import Loader from './ui/Loader'
import {IoIosWarning} from 'react-icons/io' 
import { RxCross2 } from "react-icons/rx";
import { SignupType } from "@akshitlakhera/common-zod-app"; 
import axios from "axios";
import { BACKEND_URL } from "@/config";
import GoogleButton from "./ui/google_button";

const Auth = ({type} : { type:"signin"|"signup"}) => {
  const navigate = useNavigate();
  const [postInputs,setPostInputs] = useState<SignupType>({
    email:"",
    password:"",
    name:"",
  });
  const [loading, setloading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); 



  async function sendRequest() {
    setloading(true)
    try {  const response=  await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup" ? "signup" :"signin"}`,postInputs)
    // Sometimes this jwt format can give you lot of pain haha
    const jwt = "Bearer "+response.data.token
    const userName = response.data.name; // Access user's name from response data
    localStorage.setItem("token",jwt);
    localStorage.setItem("name",userName)
    console.log(userName)
    console.log(jwt)
    navigate("/blogs") }
    catch(e) {
      setErrorMessage("Invalid Details ")
    }finally{
      setloading(false)
    }
  }

  const handleClose = () => {
    setErrorMessage(''); 
  }
 
  return (
    <div className=" h-screen flex justify-center items-center flex-col ">
      
      <div className="flex justify-center ">
        <div>
        <div className="max-w-lg text-4xl font-bold px-10 text-center">
        {type=== "signin"  ? "Sign In" :"Create an Account"}
          <div className="text-gray-500 font-medium text-lg mt-1">
          {type==="signin"? "Don't have account" : "Already have account ?"}
           
            <Link className="ml-2 underline"to={type === "signin" ? "/signup" : "/signin"}>  {type === "signin" ? "Sign up" : "Sign in"}</Link>
          </div>
          
          </div>

        { errorMessage &&  (<div className="Error-div bg-red-300 mt-2 flex items-center justify-between rounded-xl py-4 px-3 ">
          <span className="text-red-500 flex items-center gap-2 "><IoIosWarning/>{errorMessage}</span>
          <button onClick={handleClose}><RxCross2/></button>
          </div>)}

          <div className="max-w-md mt-6">
            {type === "signup" ?  <InputBox label="Name" placeholder="Enter your Username"  type="text" 
            onChange={(e) => { 
              setPostInputs({
                ...postInputs, name:e.target.value
              })
            }} /> :null }
            
            <InputBox label="Email" placeholder="Enter your Email"  type="text"  onChange={(e) => { 
              setPostInputs({
                ...postInputs, email:e.target.value
              })
            }}/>
            <InputBox label="Password" placeholder="Enter your password" type="password"  onChange={(e) => { 
              setPostInputs({
                ...postInputs, password:e.target.value
              })
            }}/>
            <button onClick={sendRequest} type="button" className={`w-full mt-4   ${loading? "bg-gray-700 text-gray-500": "bg-gray-800 text-white"} hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`} disabled={loading}>
              {loading? (<div className="flex gap-3 justify-center items-center">
                <span>{type==="signin"? "Signin In": "Signin Up "}</span>      
                <Loader/></div>) : type === "signup" ? "Sign up" : "Sign in"}</button>
            <div className="flex gap-3 justify-center items-center"><GoogleButton/></div>
        </div>
        </div>
      </div>
    </div>
  );
};
// Defining type
interface InputBoxTypes {
  label :string,
  placeholder:string,
  onChange:(e:ChangeEvent<HTMLInputElement>) => void,
  type:string,
}
const InputBox = ({label,placeholder,onChange,type} : InputBoxTypes) => {
  return (
    <div className="mt-3" >
            <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">{label}</label>
            <input type={type}  onChange={onChange} id="first_name" className="bg-gray-50 border  mt-2 border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
        </div>
  )
}

export default Auth;
