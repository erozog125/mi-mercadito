import { useEffect } from "react"
import { auth } from "./assets/firebaseConfig"
import { Container } from "./Layouts/Container/Container"
import { FaStoreAlt } from "react-icons/fa"
import { Routes as Router, Route } from "react-router-dom"
import { Home } from "./Pages/Home/Home"
import {Market} from './Pages/Market/Market'


export const App = () => {
  useEffect(() => {
    console.log("Firebase Auth:", auth)
  }, [])

  return (
    <>
      <Container>
        <div className="mt-2 w-0-full text-center flex justify-center items-center">
          <h1 className="mr-4 text-4xl font-bold text-white">Mi mercadito</h1>
          <FaStoreAlt className="text-yellow-300 text-4xl shadow-blue-300" />
        </div>
        <hr className="w-full bg-white mt-2" />
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
        </Router>
      </Container>
    </>
  )
}
