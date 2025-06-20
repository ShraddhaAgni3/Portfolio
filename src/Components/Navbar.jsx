import React, { useState } from 'react'
import pic from "/shraddhaagnihotrisv.jpg"
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import {Link} from "react-scroll"

export default function Navbar() {
    const[menu,setMenu]=useState(false);
    const navItems=[
        {id:1,
            text:"Home"
        },
         {id:2,
            text:"About"
        },
         {id:3,
            text:"Portfolio"
        },
         {id:4,
            text:"Experience"
        },
         {id:5,
            text:"Contact"
        }
    ]

  return (
    <div className='max-w-screen-2xl container px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
        <div className='flex justify-between items-center h-22'>
            <div className='flex gap-1 p-1'>
                <img src={pic} className='w-20 h-20 rounded-full m-auto' alt=''/>
                <h1 className='p-3 font-semibold text-xl cursor-pointer'>Shraddha Agnihotri
                     <p className='font-normal'>Software Developer</p>
                </h1>
                
               
            </div>
            {/* desktop */}
            <div className=''>
                <ul className='hidden md:flex gap-8'>
                  { navItems.map(({id,text})=>(<li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                    <Link
        to={text}
        smooth={true}
        duration={500}
        offset={-70}
        spy={true}
        activeClass="active"
      >
        {text}
      </Link></li>))}
                </ul><div onClick={()=>setMenu(!menu)}className='md:hidden'>{!menu?<AiOutlineMenu size={24} />:<IoCloseSharp size={24} />}</div>
            </div>
        </div>
        {/* mobile */}
        {menu &&(
            <div className='bg-white'>
             <ul className='md:hidden flex flex-col items-center h-screen justify-center space-y-3 text-xl'>
                     { navItems.map(({id,text})=>(<li className='hover:scale-105 duration-200 cursor-pointer font-semibold' key={id}><Link onClick={()=>setMenu(!menu)}
        to={text}
        smooth={true}
        duration={500}
        offset={-70}
        spy={true}
        activeClass="active"
      >
        {text}
      </Link></li>))}</ul>
        </div>
        )
        }
        
      
    </div>
  )
}
