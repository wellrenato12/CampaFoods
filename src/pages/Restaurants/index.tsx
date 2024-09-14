import { useContext, useEffect } from "react";
import { CardFeaturedRestaurants } from "../../components/CardFeaturedRestaurants";
import { api } from "../../lib/axios";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'
import { ChevronDownIcon } from "lucide-react";
import { DeliveryContext } from "../../context/DeliveryContext";

export function Restaurants() {
  const { restaurants, searchRestaurants } = useContext(DeliveryContext)

  async function fetchRestaurants() {
    try {
      const response = await api.get('/restaurants')
      searchRestaurants(response.data)
    } catch (error) {
      console.error('Erro ao buscar restaurantes: ', error)
    }
  }

  useEffect(() => {
    fetchRestaurants()
  }, [])

  return (
    <div className="max-w-[1920px] mx-auto mb-20 mt-[120px] md:mt-[160px]">
      <div className="flex justify-center gap-12 mb-16">
        <h2 className="text-2xl font-bold">Lojas</h2>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Filtros
          </MenuButton>
          <MenuList>
            <MenuItem>Entrega Grátis</MenuItem>
            <MenuItem>Vale-refeição</MenuItem>
            <MenuItem>Distância</MenuItem>
            <MenuItem>Descontos</MenuItem>
            <MenuItem>Pra retirar</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center">
        {restaurants?.map((restaurant) => {
          return (
            <div
              key={restaurant.id}
            >
              <CardFeaturedRestaurants
                id={restaurant.id}
                name={restaurant.name}
                image={restaurant.image}
                logo={restaurant.logo}
                rating={restaurant.rating}
                status={restaurant.status}
                discount={restaurant.discount}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}