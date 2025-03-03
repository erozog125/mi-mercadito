import React from "react"
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa"

export const Login = () => {
  return (
    <form className="mt-4 w-3/4 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Iniciar Sesión
      </h2>
      <hr className="border-gray-300" />

      {/* Nombre completo */}
      <div className="flex flex-col">
        <label htmlFor="txt-fullname" className="text-sm font-medium text-gray-700">
          Nombre completo
        </label>
        <input
          type="text"
          id="txt-fullname"
          placeholder="Ej: Edwin Rozo"
          className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Correo electrónico */}
      <div className="flex flex-col">
        <label htmlFor="txt-email" className="text-sm font-medium text-gray-700">
          Correo electrónico
        </label>
        <input
          type="email"
          id="txt-email"
          placeholder="Ej: erozog125@gmail.com"
          className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Contraseña */}
      <div className="flex flex-col">
        <label htmlFor="txt-password" className="text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <input
          type="password"
          id="txt-password"
          placeholder="********"
          className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Confirmar contraseña */}
      <div className="flex flex-col">
        <label htmlFor="txt-confirm-password" className="text-sm font-medium text-gray-700">
          Confirmar contraseña
        </label>
        <input
          type="password"
          id="txt-confirm-password"
          placeholder="********"
          className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="w-full h-10 text-3xl text-white bg-red-400 flex justify-center items-center p-2">
        <FaGoogle className="hover:cursor-pointer hover:shadow-lg hover:text-blue-400 transition-all duration-200" />
        <FaFacebook className="hover:cursor-pointer hover:shadow-lg hover:text-blue-400 transition-all duration-200 ml-4 mr-4" />
        <FaGithub className="hover:cursor-pointer hover:shadow-lg hover:text-blue-400 transition-all duration-200" />
      </div>
      {/* Botón de envío */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
      >
        Iniciar Sesión
      </button>
    </form>
  );
};

