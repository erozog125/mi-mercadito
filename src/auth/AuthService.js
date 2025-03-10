import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../firebaseConfig"

// Registro de usuario
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    return userCredential.user
  } catch (error) {
    console.error("Error al registrar:", error.message)
    throw error
  }
}
// Inicio de sesión
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential.user
  } catch (error) {
    console.error("Error al iniciar sesión:", error.message)
    throw error
  }
}

// Cerrar sesión
export const logoutUser = async () => {
  try {
    await signOut(auth)
    console.log("Sesión cerrada")
  } catch (error) {
    console.error("Error al cerrar sesión:", error.message)
    throw error
  }
}
