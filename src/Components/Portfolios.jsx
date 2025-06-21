import React from 'react'
import Cognify from "/Screenshot (74).png";
import WeatherApp from "/Screenshot (81).png";
import Netflix from "/Screenshot (80).png";
import Chatgpt from "/Screenshot (78).png";
import WhatsApp from "/Screenshot (79).png";


export default function Portfolios() {
   const techItems = [
  {
    id: 1,
    logo: Cognify,
    name: "Cognify",
    explain:
      "An full-stack web app that helps users practice and improve skills through Interview question generation, speech-to-text answer recording, and AI-driven feedback.",
    live: "https://cognify-mu.vercel.app/",
  },
  {
    id: 2,
    logo: WeatherApp,
    name: "Weather App",
    explain:
      "Retrieves real-time weather data via the OpenWeather API. Displays temperature, humidity, wind speed, and weather conditions. This is React project.",
    live: "https://weatherapp-ten-ashen.vercel.app/",
  },
  {
    id: 3,
    logo: Netflix,
    name: "Movie Recommend App",
    explain:
      "This is a simple web application that allows users to search for movies and view detailed information using the OMDb (Open Movie Database) API.",
    live: "https://movierecomendapp.netlify.app/",
  },
  {
    id: 4,
    logo: Chatgpt,
    name: "ChatGPT Clone",
    explain: "This project is a UI/UX prototype of ChatGPT. Designed using HTML5 & Tailwind CSS.",
    github: "https://github.com/ShraddhaAgni3/chatgptclone",
    
  },
  {
    id: 5,
    logo: WhatsApp,
    name: "WhatsApp Clone",
    explain: "This project is a UI/UX prototype of WhatsApp Web. Designed using HTML5 & Tailwind CSS.",
    github: "https://github.com/ShraddhaAgni3/whatsappclone",
   
  },
];

  return (
    <>
    <div name="Portfolio" className='max-w-screen-2xl container px-4 md:px-20 my-16'>
       <div> <h1 className='text-3xl font-bold mb-5 text-justify'>Portfolio</h1>
        <p className='font-semibold'><u>Featured Projects</u></p>
        </div><div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-4'>{ techItems.map(({id,logo,name,explain,github,live})=>(<div className='md:w-[340px] md:h-[340px] rounded-lg shadow-lg p-1 bg-n mt-5 cursor-pointer hover:scale-110 duration-300' key={id}>
            <img src={logo} className='w-full h-[130px] p-1 border-[1px]' alt=""/>
            <div><div className='px-2 font-bold text-xl mb-2'>{name}</div><p className='px-2 text-justify'>{explain}

                </p>
<div className='px-2 mt-4 flex gap-3'>
  {github && (
    <a
      href={github}
      target='_blank'
      rel='noopener noreferrer'
      className='bg-gray-800 text-white px-4 py-1 rounded hover:bg-gray-700 transition duration-200 text-sm font-medium'
    >
      GitHub
    </a>
  )}
  {live && (
    <a
      href={live}
      target='_blank'
      rel='noopener noreferrer'
      className='bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-500 transition duration-200 text-sm font-medium'
    >
      Live Demo
    </a>
  )}
</div>

</div>
        </div>))}</div></div>
      
    </>
  )
}
