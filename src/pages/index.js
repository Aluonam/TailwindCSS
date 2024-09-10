

export default function Home() {
  return (
    <main
    className={`flex min-h-screen flex-col bg-blue-100 items-center justify-between p-24`}>
      {/* <div className="flex max-w-sm mx-auto my-0 p-6  rounded-lg bg-blue shadow-xl">
       hey ho
        </div>
{/* EJEMPLO BOX */}
    {/*<div className={`flex space-y-4 flex-col `}>
      {/* Paleta de colores: https://tailwindcss.com/docs/customizing-colors */}
      {/* <div className={`bg-lime-800 p-4 rounded-lg w-80`}>Reason number 1</div>
      <div className={`bg-lime-600 p-4 rounded-lg`}>Reason number 2</div>
      <div className={`bg-lime-400 p-4 rounded-lg`}>Reason number 3</div>
      <div className={`bg-lime-200 p-4 rounded-lg`}>Reason number 3</div>
    </div> */} 

{/* EJEMPLO GRID */}
      {/* <div className={`grid  gap-4 m-4`}>
              
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
      </div> */}

{/* EJEMPLO FORMULARIO */}
      <form action="" class='bg-white w-80 mx-auto mt-8 rounded-lg p-6'>
        <input class='border border-gray-300 w-full px-3 py-2 mb-4 rounded-md' type="text" placeholder="Nombre"></input>
        <input class='border border-gray-300 w-full px-3 py-2 mb-4 rounded-md' type="email" placeholder="Email"></input>
        <input class='border border-gray-300 w-full px-3 py-2 mb-4 rounded-md' type="password" placeholder="Contraseña"></input>

        <input class='border border-gray-300 w-full px-3 py-2 mb-4 rounded-md disabled:bg-red-200' type="text" placeholder="No puedes escribir" disabled></input>
        <input class='border border-gray-300 w-full px-3 py-2 mb-4 rounded-md  invalid:focus:ring-red-400 peer' type="email" placeholder="Email incorrecto"></input>
        <p class='text-red-400 hidden peer-invalid:block'>El correo es incorrecto</p>

        <input class='bg-blue-500 w-full py-2 text-white rounded-md cursor-pointer hover:bg-blue-400' type="submit" value="Inicia sesión"></input>
      </form>


      
    </main>
  );
}

