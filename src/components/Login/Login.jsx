import { useContext, useState } from "react"
import { FaGoogle } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { Form } from "../../Layouts/Container/Form/Form"
import { InputForm } from "../InputForm/InputForm"
import { loginUser } from "../../auth/authEmailFirebase"
import { loginWithGoogle } from '../../auth/authGoogleFirebase'
import { MarketContext } from "../../context/context"

export const Login = () => {
  const { updateUser } = useContext(MarketContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false) // Estado de carga

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validación previa
    if (!email.trim() || !password.trim()) {
      alert("Por favor, completa ambos campos.")
      return
    }

    try {
      setIsLoading(true) // Desactivar botón
      const userData = await loginUser(email, password)  // Espera el login

      // Actualiza el contexto global solo si el inicio de sesión fue exitoso
      updateUser(userData.email, userData.password)

      alert("Inicio de sesión exitoso.")
      navigate("/market")
    } catch (error) {
      alert("Error al iniciar sesión: " + (error.message || "Inténtalo de nuevo."))
    } finally {
      setIsLoading(false) // Reactiva el botón
    }
  }

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true) // Desactivar botón
      const user = await loginWithGoogle()
      updateUser(user.email, "google-auth") // Actualiza el contexto global con el usuario de Google
      alert("Inicio de sesión con Google exitoso.")
      navigate("/market")
    } catch (error) {
      alert("Error al iniciar sesión con Google: " + (error.message || "Inténtalo de nuevo."))
    } finally {
      setIsLoading(false) // Reactiva el botón
    }
  }

  return (
    <div className="flex min-h-screen justify-center bg-blue-900 px-4">
      <Form
        handleEvent={handleSubmit}
        className="w-full max-w-xs bg-white p-6 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mt-2 text-center text-gray-300 mb-4">
          Iniciar sesión
        </h2>
        <InputForm
          txtLabel="Correo electrónico"
          id="email"
          placeholder="Ej: erozog125@gmail.com"
          value={email}
          handleEvent={(e) => setEmail(e.target.value)}
        />
        <InputForm
          type="password"
          txtLabel="Contraseña"
          id="password"
          placeholder="********"
          value={password}
          handleEvent={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          disabled={isLoading} // Deshabilitar mientras carga
          className={`w-full bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all cursor-pointer 
            ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-500"}`}
        >
          {isLoading ? "Cargando..." : "Iniciar sesión"}
        </button>

        <hr className="my-6 border-gray-300" />

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={isLoading} // Deshabilitar mientras carga
          className={`w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow-sm transition-all 
            ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
        >
          <FaGoogle className="text-red-500 mr-2" />
          {isLoading ? "Cargando..." : "Conectar con Google"}
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
