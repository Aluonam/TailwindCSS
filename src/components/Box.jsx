
import React from 'react'

const Box = () => {
  return (
    <>
      {/* EJEMPLO BOX */}
      <div className={`flex space-y-4 flex-col `}>
        {/* Paleta de colores: https://tailwindcss.com/docs/customizing-colors */}
          <div className={`bg-lime-800 p-4 rounded-lg w-80`}>Reason number 1</div>
          <div className={`bg-lime-600 p-4 rounded-lg`}>Reason number 2</div>
          <div className={`bg-lime-400 p-4 rounded-lg`}>Reason number 3</div>
          <div className={`bg-lime-200 p-4 rounded-lg`}>Reason number 3</div>
      </div>

    {/* Ancho personalizado */}
    <div className={`bg-cyan-400 w-[500px]`}><p>Hey!</p></div>
    </>
  )
}

export default Box