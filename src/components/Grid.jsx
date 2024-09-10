import React from 'react'

const Grid = () => {
  return (
    <div>
        {/* EJEMPLO GRID */}
    <div className={`grid  gap-4 m-4`}>
              
        <div className={` bg-my-black h-16`}>1</div>

        <div className={`col-span-1 bg-indigo-100 h-40 p-20`}>2</div>
        <div className={`col-span-1 bg-indigo-100 h-40 p-20`}>3</div>
        <div className={`col-span-1 bg-indigo-100 h-24 p-20`}>4</div>
        <div className={`col-span-1 bg-indigo-100 h-24 p-20`}>5</div>

        <div className={`col-span-1 bg-indigo-100 h-40 p-20`}>6</div>
        <div className={`col-span-2 bg-indigo-100 h-40 p-20`}>7</div>
        <div className={`col-span-1 bg-indigo-100 h-40 p-20`}>8</div>

        <div className={`col-span-2 bg-indigo-100 h-24 p-20`}>9</div>
        <div className={`col-span-2 bg-indigo-100 h-24 p-20`}>10</div>
      </div>
    </div>
  )
}

export default Grid