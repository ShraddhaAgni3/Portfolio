import React from 'react'
import Mongodb from "/db.png";
import Nodejs from "/nodejs.png";
import Expressjs from "/express.png";
import Reacts from "/react.png";
import Js from "/js.jpeg";


export default function Portfolios() {
    const techItems=[
        {id:1,
            logo:Mongodb,
            name:"MongoDB"
        },
         {id:2,
            logo:Expressjs,
            name:"Expressjs"
        },
         {id:3,
            logo:Reacts,
            name:"React"
        },
         {id:4,
            logo:Nodejs,
            name:"Nodejs"
        },
         {id:5,
            logo:Js,
            name:"Javascript"
        }
    ]
  return (
    <>
    <div name="Portfolio" className='max-w-screen-2xl container px-4 md:px-20 my-16'>
       <div> <h1 className='text-3xl font-bold mb-5 text-justify'>Portfolio</h1>
        <p className='font-semibold'><u>Featured Projects</u></p>
        </div><div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>{ techItems.map(({id,logo,name})=>(<div className='md:w-[300px] md:h-[300px] rounded-lg shadow-lg p-1 mt-5 cursor-pointer hover:scale-110 duration-300' key={id}>
            <img src={logo} className='w-[100px] h-[100px] p-1 rounded-full border-[2px]' alt=""/>
            <div><div className='px-2 font-bold text-xl mb-2'>{name}</div><p className='px-2'>The MERN stack is a popular web development stack used to build full-stack applications.

                </p></div><div className='space-x-4 px-6 py-4 justify-around'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                     <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
                </div>
        </div>))}</div></div>
      
    </>
  )
}
