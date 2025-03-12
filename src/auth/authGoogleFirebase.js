import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

export const loginWithGoogle = async () => {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()

  try {
    const result = await signInWithPopup(auth, provider)
    const credential = GoogleAuthProvider.credentialFromResult(result)
    const token = credential.accessToken
    const user = result.user

    console.log("Usuario autenticado:", user)
    console.log("Token de acceso:", token)

    // Puedes retornar el usuario o el token si lo necesitas
    return { user, token }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    const email = error.customData?.email
    const credential = GoogleAuthProvider.credentialFromError(error)

    console.error("Error al iniciar sesión con Google:", errorMessage)
    console.error("Código de error:", errorCode)
    console.error("Correo electrónico asociado al error:", email)

    // Puedes manejar el error de manera personalizada
    throw new Error(errorMessage)
  }
}
