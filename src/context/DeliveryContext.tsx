import { createContext, useState, type ReactNode } from "react";

interface DeliveryContextProps {
  handleHasUser: () => void;
  saveUser: (user: User) => void
  handleSearchCep: (cep: CEP) => void
  searchRestaurants: (restaurant: Restaurants[]) => void
  handleIncrement: () => void
  handleDecrement: () => void
  hasUser: boolean;
  user: User | null
  cep: CEP | null
  restaurants: Restaurants[] | null
  count: number
}

interface Restaurants {
  id: number;
  name: string;
  image: string;
  logo: string;
  rating: number;
  status: boolean;
  discount: number;
}

interface User {
  name: string
  email: string
  profilePicture: string
}

interface CEP {
  address: string
  number: number
}

interface DeliveryProviderProps {
  children: ReactNode
}

export const DeliveryContext = createContext({} as DeliveryContextProps)

export function DeliveryProvider({ children }: DeliveryProviderProps) {
  const [restaurants, setRestaurants] = useState<Restaurants[]>([])
  const [cep, setCep] = useState<CEP | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [hasUser, setHasUser] = useState(false)  
  const [count, setCount] = useState(1)

  function handleIncrement() {
    setCount((prevState) => prevState + 1)
  }

  function handleDecrement() {
    setCount((prevState) => prevState - 1)
  }

  function searchRestaurants(restaurant: Restaurants[]) {
    setRestaurants(restaurant)
  }

  function handleSearchCep(cep: CEP) {
    setCep(cep)
  }

  function handleHasUser() {
    if (hasUser) {
      setCep(null)
      alert('Usuário deslogado com sucesso!')
    }
    
    setHasUser(!hasUser)
  }

  function saveUser(user: User) {
    setUser(user)
  }

  return (
    <DeliveryContext.Provider value={{
      handleHasUser,
      hasUser,
      saveUser,
      user,
      handleSearchCep,
      cep,
      searchRestaurants,
      restaurants,
      handleIncrement,
      handleDecrement,
      count
    }}>
      {children}
    </DeliveryContext.Provider>
  )
}