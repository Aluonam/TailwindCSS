import React from 'react'

const Form = () => {
  return (
    <div>
        {/* EJEMPLO FORMULARIO */}
      <form action="" class='bg-white w-80 mx-auto mt-8 rounded-lg p-6'>
        <input class='border border-gray-300 w-full px-3 py-2 mb-4 rounded-md' type="text" placeholder="Nombre"></input>
        <input class='border border-gray-300 w-full px-3 py-2 mb-4 rounded-md' type="email" placeholder="Email"></input>
        <input class='border border-gray-300 w-full px-3 py-2 mb-4 rounded-md' type="password" placeholder="Contraseña"></input>

        <input class='border border-gray-300 w-full px-3 py-2 mb-4 rounded-md disabled:bg-red-200' type="text" placeholder="No puedes escribir" disabled></input>
        <input class='border border-gray-300 w-full px-3 py-2 mb-4 rounded-md focus:outline-none focus:ring-1 invalid:focus:ring-purple-600 peer' type="email" placeholder="Email incorrecto"></input>
        <p class='text-red-400 hidden peer-invalid:block'>El correo es incorrecto</p>

        <input class='bg-blue-500 w-full py-2 text-white rounded-md cursor-pointer hover:bg-blue-400' type="submit" value="Inicia sesión"></input>
      </form>
    </div>
  )
}

export default Form