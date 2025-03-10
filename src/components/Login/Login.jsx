import { FaGoogle } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { Form } from "../../Layouts/Container/Form/Form"
import { InputForm } from '../InputForm/InputForm'

export const Login = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Formulario enviado.")
    navigate("/market")
  }

  return (
    <div className="flex min-h-screen justify-center bg-blue-900 px-4">
      <Form
        onSubmit={handleSubmit}
        className="w-full max-w-xs bg-white p-6 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mt-2 text-center text-gray-300 mb-4">
          Iniciar sesión
        </h2>
        <InputForm 
          txtLabel='Correo electrónico'
          id='email'
          placeholder='Ej:erozog125@gmail.com'
        />
        <InputForm 
          txtLabel='Contraseña'
          id='password'
          placeholder='********'
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
        >
          Iniciar sesión
        </button>

        <hr className="my-6 border-gray-300" />

        <button
          type="button"
          className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow-sm hover:bg-gray-100 transition-all"
        >
          <FaGoogle className="text-red-500 mr-2" />
          Conectar con Google
        </button>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-400">
            ¿No tienes cuenta?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Regístrate
            </a>
          </p>
        </div>
      </Form>
    </div>
  )
}
