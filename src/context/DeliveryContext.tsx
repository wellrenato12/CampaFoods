import { createContext, useState, type ReactNode } from "react";

interface DeliveryContextProps {
  handleHasUser: () => void;
  saveUser: (user: User) => void
  handleSearchCep: (cep: CEP) => void
  searchRestaurants: (restaurant: Restaurants[]) => void
  handleAddToCart: (newDish: Cart, onClose: () => void) => void
  updateCart: (newArrayDishes: Cart[]) => void
  hasUser: boolean;
  user: User | null
  cep: CEP | null
  restaurants: Restaurants[] | null
  cart: Cart[]
}

interface Cart {
  id: string
  restaurantName: string
  nameDish: string
  quantity: number
  price: number
  description: string
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
  const [cart, setCart] = useState<Cart[]>([])
  const [restaurants, setRestaurants] = useState<Restaurants[]>([])
  const [cep, setCep] = useState<CEP | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [hasUser, setHasUser] = useState(false) 
  
  function updateCart(newArrayDishes: Cart[]) {
    setCart(newArrayDishes)
  }

  function handleAddToCart(newDish: Cart, onClose: () => void) {
    if (cart.length > 0) {
      const sameRestaurant = cart.every(item => item.restaurantName === newDish.restaurantName);
  
      if (!sameRestaurant) {
        alert('Você só pode adicionar produtos de um mesmo restaurante ao carrinho.');
        return;
      }
    }
  
    setCart(prevState => [...prevState, newDish]);
  
    alert('Pedido adicionado ao carrinho!');
    onClose()
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
      handleAddToCart,
      cart,
      updateCart,
    }}>
      {children}
    </DeliveryContext.Provider>
  )
}