

export default function Home() {
  return (
    <main
    className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      {/* <div className="flex max-w-sm mx-auto my-0 p-6  rounded-lg bg-blue shadow-xl">
       hey ho
        </div>
    <div className={`flex space-y-4 flex-col `}>
      {/* Paleta de colores: https://tailwindcss.com/docs/customizing-colors */}
      {/* <div className={`bg-lime-800 p-4 rounded-lg w-80`}>Reason number 1</div>
      <div className={`bg-lime-600 p-4 rounded-lg`}>Reason number 2</div>
      <div className={`bg-lime-400 p-4 rounded-lg`}>Reason number 3</div>
      <div className={`bg-lime-200 p-4 rounded-lg`}>Reason number 3</div>
    </div> */} 

  <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4`}>
          
    <div className={`col-span-2 sm:col-span-3 md:col-span-4 bg-my-black h-16 `}>1</div>

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

    </main>
  );
}

