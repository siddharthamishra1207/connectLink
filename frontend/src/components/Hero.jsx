import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div>
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="./cover.jpg"/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">ConnectLink</h1>
      <p class="mb-8 leading-relaxed">ConnectLink is a cutting-edge platform designed to effortlessly connect you with your loved ones across the globe through secure video calls and encrypted text messaging. Enjoy peace of mind knowing that your communications are safeguarded with top-notch security measures.</p>
      <div class="flex justify-center">
     <Link to="/login">    <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">LogIn</button> </Link>
     <Link to="/signup">    <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Sign Up</button> </Link>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero