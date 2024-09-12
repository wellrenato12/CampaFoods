import { createContext, useState, type ReactNode } from "react";

interface DeliveryContextProps {
  handleHasUser: () => void;
  saveUser: (user: User) => void
  handleSearchCep: (cep: CEP) => void
  hasUser: boolean;
  user: User | null
  cep: CEP | null
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
  const [cep, setCep] = useState<CEP | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [hasUser, setHasUser] = useState(false)

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
      cep
    }}>
      {children}
    </DeliveryContext.Provider>
  )
}