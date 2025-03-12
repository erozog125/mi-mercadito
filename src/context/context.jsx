import { createContext, useState } from "react"

// Crear el contexto
export const MarketContext = createContext()

// Proveedor del contexto
export const MarketProvider = ({ children }) => {
  
  const [user, setUser] = useState({ email: '', password: '' })
  // const [items, setItems] = useState([])
  // const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1)

  const updateUser = (email, password) => setUser({ email, password })

  // const addItem = (item) => {
  //   setItems((prevItems) => [...prevItems, item])
  // }

  // const removeItem = (id) => {
  //   setItems((prevItems) => prevItems.filter(item => item.id !== id))
  // }

  // const clearItems = () => {
  //   setItems([])
  // }

  return (
    <MarketContext.Provider value={{ user, updateUser}}>
      {children}
    </MarketContext.Provider>
  )
}
