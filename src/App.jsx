import React from 'react'
import { Container } from './Layouts/Container/Container'
import { FaStoreAlt } from "react-icons/fa"
import { Login } from './components/Login/Login'

export const App = () => {
  return (
    <>
      <Container>
          <div className='mt-2 w-0-full text-center flex justify-center items-center'>
            <h1 className='mr-4 text-4xl font-bold text-white'>Mi mercadito</h1><FaStoreAlt className='text-yellow-300 text-4xl shadow-blue-300' />
          </div>                    
          <hr className='w-full bg-white mt-2' />
          <Login />
      </Container>  
    </>
  )
}
