import { createContext, useState, type ReactNode } from "react";

interface DeliveryContextProps {
  handleHasUser: () => void;
  hasUser: boolean;
}

interface DeliveryProviderProps {
  children: ReactNode
}

export const DeliveryContext = createContext({} as DeliveryContextProps)

export function DeliveryProvider({ children }: DeliveryProviderProps) {
  const [hasUser, setHasUser] = useState(false)

  function handleHasUser() {
    setHasUser(!hasUser)
  }

  return (
    <DeliveryContext.Provider value={{
      handleHasUser,
      hasUser,
    }}>
      {children}
    </DeliveryContext.Provider>
  )
}