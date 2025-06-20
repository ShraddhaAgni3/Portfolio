import React from 'react'
import { FaLinkedin, FaInstagramSquare, FaTelegramPlane, FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <><hr className='border-neutral-50 mt-12'/>
    <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
          <div className='flex flex-col items-center justify-center'>
                    <div className='flex space-x-4 mt-12'> 
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
                    </div>    <hr className="w-50 mx-auto mt-4" />
                    <div className='mt-1 border-gray-700 pt-8 flex flex-col item-center text-sm'>
                        <p>&copy; 2025 SDE. All rights reserved.</p></div></div></div></footer>
    </>
  )
}
