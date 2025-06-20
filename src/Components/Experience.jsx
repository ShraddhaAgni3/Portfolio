import React from 'react'
import Mongodb from "/db.png";
import Nodejs from "/nodejs.png";
import Expressjs from "/express.png";
import Reacts from "/react.png";
import Js from "/js.jpeg";
import Html5 from "/html.png";
import Css3 from "/css3.png";
import Tailwind from "/tailwind.png";
import Git from "/git.png";
import Vercel from "/vercel.png";
import Render from "/render.png";
import Python from "/python.png";
import Cpp from "/cpp.jpeg";
import Bootstrap from "/bootsprap.png";
import Pandas from "/pandas.png";
import Psql from "/psql.png";
import Sql from "/sql.png";
export default function Experience() {
    const experItems=[
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
            },
            {id:6,
                logo:Html5,
                name:"HTML5"
            },
            {id:7,
                logo:Css3,
                name:"CSS3"
            },
            {id:8,
                logo:Tailwind,
                name:"Tailwind"
            },
            {id:9,
                logo:Bootstrap,
                name:"Bootstrap5"
            },
            {id:10,
                logo:Render,
                name:"Render"
            },
            {id:11,
                logo:Vercel,
                name:"Vercel"
            },
            {id:12,
                logo:Sql,
                name:"SQL"
            },
            {id:13,
                logo:Psql,
                name:"Postgresql"
            },
            {id:14,
                logo:Python,
                name:"Python"
            },
            {id:15,
                logo:Pandas,
                name:"Pandas"
            },
            {id:16,
                logo:Cpp,
                name:"C++"
            },
            {id:17,
                logo:Git,
                name:"Github"
            },
        ]
  return (
    <>
      <div name="Experience" className='max-w-screen-2xl container px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-5 text-justify'>Experience</h1>
        <p className=''>I have hands-on experience with a broad range of modern technologies, tools, and frameworks across various areas of development.</p>
        </div><div className='grid grid-cols-2 md:grid-cols-6 gap-7 my-3 mx-1'>{ experItems.map(({id,logo,name})=>(<div className='flex flex-col items-center justify-center rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 mt-5 cursor-pointer hover:scale-110 duration-300' key={id}>
            <img src={logo} className='w-[150px] items-center rounded-full' alt=""/>
            <div><div className=''>{name}</div></div>
        </div>))}</div> </>
  )
}
