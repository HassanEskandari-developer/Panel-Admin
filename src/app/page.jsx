'use client'
import React, { useState } from 'react';
import useUserStore from './store';
import Link from 'next/link';
import LoginLeft from './loginLeft';
import LoginRight from './loginRight';
// import Homedashboard from '../homedashboard/page';

export default function Login() {
  const [formData, setFormData] = useState({ email: 'admin@gmail.com', password: 'admin123' });
  const setUser = useUserStore((state) => state.setUser);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch('https://670ba62a7e5a228ec1ce29c2.mockapi.io/user');
        const users = await response.json();
        const existingUser = users.find(user => user.email === formData.email);

        if (existingUser) {
            if (existingUser.password === formData.password) {
              setUser({ name: existingUser.name, email: existingUser.email });
                alert(`Hello ${existingUser.name}, welcome back!`);
                window.location.href = '/componets/homedashboard';
            } else {
                alert('Your password is incorrect. Please try again.');
            }
        } else {
            alert('You don\'t have an account. Please sign up first.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while checking your account');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="font-[sans-serif] bg-gray-900 md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4">
          <img src="https://readymadeui.com/signin-image.webp" className="lg:max-w-[80%] w-full h-full object-contain block mx-auto" alt="login-image" />
        </div>

        <div className="flex items-center md:p-8 p-6 bg-white md:rounded-tl-[55px] md:rounded-bl-[55px] h-full">
          <form onSubmit={handleSubmit} className="max-w-lg w-full mx-auto">
            <div className="mb-12">
              <h3 className="text-gray-800 text-xl font-extrabold">Sign in</h3>
              <p className="text-gray-800 text-sm mt-4">
                Don't have an account
                
                  <Link href="/SinUp" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link>
                
              </p>
            </div>

            <div>
              <label className="text-gray-800 text-xs block mb-2">Email</label>
              <div className="relative flex items-center">
                <input 
                  name="email" 
                  type="text" 
                  value={formData.email}
                  onChange={handleChange} 
                  required 
                  className="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none" 
                  placeholder="Enter email" 
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                  {/* SVG content */}
                </svg>
              </div>
            </div>

            <div className="mt-8">
              <label className="text-gray-800 text-xs block mb-2">Password</label>
              <div className="relative flex items-center">
                <input 
                  name="password" 
                  type="password" 
                  value={formData.password}
                  onChange={handleChange} 
                  required 
                  className="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none" 
                  placeholder="Enter password" 
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                  {/* SVG content */}
                </svg>
                
              </div>
            </div>
            
            <div class="flex flex-wrap items-center justify-between gap-4 mt-6">
              
              <div>
                <a href="jajvascript:void(0);" class="text-blue-600 font-semibold text-sm hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="mt-12">
              <button type="submit" className="w-full py-3 px-6 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 hover:bg-[#222] focus:outline-none">
                Sign in
              </button>
            </div>
            <div class="my-6 flex items-center gap-4">
              <hr class="w-full border-gray-300" />
              <p class="text-sm text-gray-800 text-center">or</p>
              <hr class="w-full border-gray-300" />
            </div>
            <button type="button" class="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm font-semibold tracking-wider text-gray-800 border border-gray-300 rounded-full bg-gray-50 hover:bg-gray-100 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="inline" viewBox="0 0 512 512">
                <path fill="#fbbd00"
                  d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                  data-original="#fbbd00" />
                <path fill="#0f9d58"
                  d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                  data-original="#0f9d58" />
                <path fill="#31aa52"
                  d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                  data-original="#31aa52" />
                <path fill="#3c79e6"
                  d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                  data-original="#3c79e6" />
                <path fill="#cf2d48"
                  d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                  data-original="#cf2d48" />
                <path fill="#eb4132"
                  d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                  data-original="#eb4132" />
              </svg>
              Continue with google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}