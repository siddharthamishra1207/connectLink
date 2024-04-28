import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';
import BackButton from "./BackButton"




function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const cl =  await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully" , cl);
      navigate('/profile');
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center text-gray-600 bg-gray-50">
      <div className="relative">
        <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
          <div className="flex-auto p-6">
          <BackButton/>
            <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
              <a href="#" className="flex cursor-pointer items-center gap-2 text-indigo-500 no-underline hover:text-indigo-500">
                <span className="flex-shrink-0 text-3xl font-black lowercase tracking-tight opacity-100">ConnectLink</span>
              </a>
            </div>
            <h4 className="mb-8 font-medium text-gray-700 xl:text-xl">LogIn </h4>
            <form onSubmit={handleSubmit} className="mb-4">
             
              
              <div className="mb-4">
                <label htmlFor="email" className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Email Address</label>
                <input type="email" value={email} onChange={handleEmailChange} className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg-white py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow" id="email" placeholder="Enter your email address" required />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Password</label>
                <input type="password" value={password} onChange={handlePasswordChange} className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg-white py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow" id="password" placeholder="Enter your password" required />
              </div>

              <div className="mb-4">
                <button className="w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none" type="submit">LogIn</button>
              </div>
            </form>
            <p className="mb-4 text-center">
            Don't have an account
               
              <Link to="/signup" className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
