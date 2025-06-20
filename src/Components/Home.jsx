import React from 'react';
import { FaLinkedin, FaInstagramSquare, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { ReactTyped } from "react-typed";
import pic from "/flip.png";

export default function Home() {
  return (
  <>
    <div name="Home" className='max-w-screen-2xl container px-4 md:px-20 my-22'>
      <div className='flex flex-col md:flex-row'>
        
        {/* Image first on mobile, second on desktop */}
        <div className='order-1 md:order-2 md:w-1/2 md:ml-20 md:mt-20 mt-8 md:mb-0 flex justify-center'>
          <img src={pic} className='rounded-full w-90 h-90 md:w-100 md:h-100' alt='Profile' />
        </div>

        {/* Text content second on mobile, first on desktop */}
        <div className='order-2 md:order-1 md:w-1/2 mt-10 md:mt-24 space-y-4'>
          <span className='text-xl'>Welcome In My Feed</span>
          
          <div className='flex flex-wrap items-center gap-2 text-2xl md:text-4xl my-1 mt-1'>
            <h1>Hello, I'm a </h1>
            <ReactTyped
              className='text-red-700 font-bold'
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>

          <p className='text-sm md:text-md text-justify mt-10'>
            I'm a software developer who enjoys building web applications and learning new technologies.
            I focus on writing clean, efficient code and creating projects that solve real-world problems.
            Welcome to my portfolio — feel free to explore my work and get in touch!
          </p>

          {/* Social and tech icons */}
          
            <div className='flex flex-col md:flex-row justify-between font-bold mt-10 space-y-6 md:space-y-0 items-center'>
              <div className='flex-row'><div><h1 className='text-center md:text-start'>Available on</h1></div>
              <div className='flex gap-5 mt-2'>
                <a href="http://www.linkedin.com/in/shraddha-agnihotri-72546825a" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className='text-2xl cursor-pointer hover:text-blue-600' />
  </a>
                 <a href="https://www.instagram.com/shraddha_agni._._/" target="_blank" rel="noopener noreferrer">
    <FaInstagramSquare className='text-2xl cursor-pointer hover:text-pink-500' />
  </a>
                <a href="https://t.me/Agnihotri_shraddha" target="_blank" rel="noopener noreferrer">
    <FaTelegramPlane className='text-2xl cursor-pointer hover:text-blue-400' />
  </a>
                <a href="https://www.youtube.com/@shraddhaagnihotri3117" target="_blank" rel="noopener noreferrer">
    <FaYoutube className='text-2xl cursor-pointer hover:text-red-600' />
  </a>
              </div></div>
              <div className='flex-row'>
              <div><h1>Currently working on</h1></div>
              <div className='flex gap-5 mt-2'><SiMongodb className='text-2xl md:text-3xl hover:scale-110 duration-200 border-[2px] rounded-full' />
                <SiExpress className='text-2xl md:text-3xl hover:scale-110 duration-200 border-[2px] rounded-full' />
                <RiReactjsLine className='text-2xl md:text-3xl hover:scale-110 duration-200 border-[2px] rounded-full' />
                <DiJavascript className='text-2xl md:text-3xl hover:scale-110 duration-200 border-[2px] rounded-full' />
              </div></div>
            </div>

           
          
        </div>

      </div>
    </div><hr></hr>
  </>
  );
}
