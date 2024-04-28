import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';
import BackButton from "./BackButton"

function SignUpPage() {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered successfully:", user);
      
      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        fullName: fullName,
        gender: gender,
      });

      console.log("User data saved successfully");

      toast.success("User registered successfully!", { position: "top-center" });
      navigate('/profile');
    } catch (error) {
      console.error("Error signing up:", error.message);
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
    <>  
  
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
            <h4 className="mb-2 font-medium text-gray-700 xl:text-xl">Sign Up </h4>
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="mb-4">
                <label htmlFor="full-name" className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Full Name</label>
                <input type="text" value={fullName} onChange={handleFullNameChange} className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg-white py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow" id="full-name" placeholder="Enter your full name" required />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Password</label>
                <input type="password" value={password} onChange={handlePasswordChange} className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg-white py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow" id="password" placeholder="Enter your password" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Email Address</label>
                <input type="email" value={email} onChange={handleEmailChange} className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg-white py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow" id="email" placeholder="Enter your email address" required />
              </div>
              <div class="mb-4">
    <label class="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Gender</label>
    <div class="flex">
        <label for="male" class="flex items-center mr-4">
            <input type="radio" id="male" name="gender" value="boy" class="form-radio text-indigo-600 focus:border-indigo-500 focus:outline-none focus:shadow-outline" onChange={handleGenderChange}/>
            <span class="ml-2">Male</span>
        </label>
        <label for="female" class="flex items-center">
            <input type="radio" id="female" name="gender" value="girl" class="form-radio text-indigo-600 focus:border-indigo-500 focus:outline-none focus:shadow-outline" onChange={handleGenderChange}/>
            <span class="ml-2">Female</span>
        </label>
    </div>
</div>

              <div className="mb-4">
                <button className="w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none" type="submit">Sign Up</button>
              </div>
            </form>
            <p className="mb-4 text-center">
              Already have an account? 
             
              <Link to="/login" className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500">LogIn</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default SignUpPage;
