import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeBottom = () => {

  return (
    <div className='font-[font2] flex items-center justify-center gap-2 text-white overflow-hidden'>
      <p className='absolute lg:w-[19vw] w-64 lg:right-1 right-0 bottom-28  lg:bottom-35 font-[font1] lg:text-sm text-xs lg:leading-relaxed leading-tight font-bold'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-22 flex items-center px-1 lg:px-7 border-white rounded-full uppercase mb-3 mr-3'>
        <Link className='text-[6vw] lg:mt-5' to='/projects'>Projets</Link>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  lg:h-22 flex items-center px-1 lg:px-7 border-white rounded-full uppercase mb-3'>
        <Link className='text-[6vw] lg:mt-5' to='/agence'>agence</Link>
      </div>
      <div className='font-[font1] text-black'>
        <p className='absolute lg:w-[19vw] w-64 lg:left-315 right-0 bottom-2  lg:bottom-6 lg:text-sm text-xs lg:leading-relaxed leading-tight font-bold'>MadeByPratham❤️</p>
      </div>
    </div>
  )
}

export default HomeBottom