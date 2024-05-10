import React, { useState } from "react";
import loginSignupImage from "../assest/login-animation.gif";
//import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
//import { BsEmojiSmileUpsideDown } from "react-icons/bs";
//import {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice";
 
const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
 
    const handleSendLink = async (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
 
      try {
        // Send a request to your backend API to initiate the forgot password process
        const response = await fetch("http://localhost:8080/forgot-password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
 
        if (!response.ok) {
          // Handle non-successful response
          const errorData = await response.json();
          setMessage(errorData.message || "Internal Server Error");
          return;
        }
 
        const result = await response.json();
        setMessage(result.message);
      } catch (error) {
        console.error("Error:", error);
        setMessage("Internal Server Error");
      }
    };
 
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
        {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
          <img src={loginSignupImage} className="w-full" alt="" />
        </div>
        <br></br>
        <h2 className="font-bold">Forgot Password</h2>
        <form className="w-full py-3 flex flex-col" onClick={handleSendLink}>
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
 
          <button className="w-full max-w-[150px] m-auto  bg-red-500 hover:bg-red-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4"style={{backgroundColor: "#678e61"}}>
            Send
          </button>
          <h5 class="text-red-900">{message}</h5>
        </form>
        <p className="text-left text-sm mt-2">
          Don't have account ?{" "}
          <Link to={"/signup"} className="text-red-500 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
 
export default ForgotPassword;
 