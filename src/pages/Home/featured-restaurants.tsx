import { ChevronRight } from "lucide-react";
import { CardFeaturedRestaurants } from "../../components/CardFeaturedRestaurants";
import { useEffect, useState } from "react";
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

export function FeaturedRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurants[]>([])

  async function fetchRestaurants() {
    try {
      const response = await api.get('/featured_restaurants')
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
      <h2 className="text-[43px] font-bold text-center mb-[88px]">Restaurantes em destaque</h2>
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
      <button className="flex items-center gap-2.5 px-12 py-5 rounded-lg text-white font-bold mt-4 mx-auto transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-400" style={{ backgroundImage: 'linear-gradient(90deg, #FFBA26 0%, #FF9A0E 100%)' }}>
        Ver tudo
        <ChevronRight />
      </button>
    </div>
  )
}