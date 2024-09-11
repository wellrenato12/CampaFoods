import { useEffect, useState } from "react";
import { CardFeaturedRestaurants } from "../../components/CardFeaturedRestaurants";
import { api } from "../../lib/axios";

interface Restaurants {
  id: number;
  name: string;
  image: string;
  logo: string;
  rating: number;
  status: boolean;
  discount: number;
}

export function Restaurants() {
  const [restaurants, setRestaurants] = useState<Restaurants[]>([])

  async function fetchRestaurants() {
    try {
      const response = await api.get('/restaurants')
      setRestaurants(response.data)
    } catch (error) {
      console.error('Erro ao buscar restaurantes: ', error)
    }
  }

  useEffect(() => {
    fetchRestaurants()
  }, [])

  return (
    <div className="max-w-[1920px] mx-auto my-20">
      <h2 className="text-2xl font-bold mb-16">Lojas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center">
        {restaurants.map((restaurant) => {
          return (
            <CardFeaturedRestaurants
              key={restaurant.id}
              name={restaurant.name}
              image={restaurant.image}
              logo={restaurant.logo}
              rating={restaurant.rating}
              status={restaurant.status}
              discount={restaurant.discount}
            />
          )
        })}
      </div>
    </div>
  )
}