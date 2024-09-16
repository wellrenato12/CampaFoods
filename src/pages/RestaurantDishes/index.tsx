import { useEffect, useState } from "react";
import { CardDishes } from "../../components/CardDishes";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { Star } from "lucide-react";

interface Restaurant {
  image: string;
  logo: string;
  name: string;
  rating: number;
  dishes: Dishes[];
}

interface Dishes {
  id: number;
  description: string;
  image: string;
  name: string;
  price: number;
  discount?: number;
}

export function RestaurantDishes() {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const { id } = useParams();

  async function fetchRestaurant() {
    try {
      const response = await api.get<Restaurant>(`/restaurants/${id}`);
      setRestaurant(response.data);
    } catch (error) {
      console.error("Erro ao buscar restaurante: ", error);
    }
  }

  useEffect(() => {
    fetchRestaurant();
  }, [id]);

  return (
    <div className="max-w-[1440px] mx-auto mb-8 mt-[122px]">
      <img className="w-full h-[350px] object-cover rounded-lg" src={restaurant?.image} alt="Restaurant" />
      <div className="flex items-center gap-8 my-8 px-4 2xl:px-0">
        <img className="size-20 rounded-full object-cover" src={restaurant?.logo} alt="Restaurant Logo" />
        <h1 className="text-4xl font-medium">{restaurant?.name}</h1>
        <span className="flex gap-2 text-[#ffb30e] font-medium">
          <Star fill='#ffb30e' />
          {restaurant?.rating}
        </span>
      </div>
      <h3 className="font-medium text-3xl px-4 2xl:px-0 mb-8">Destaques</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 justify-items-center">
        {restaurant?.dishes.map((dish) => (
          <CardDishes
            key={dish.id}
            description={dish.description}
            image={dish.image}
            name={dish.name}
            price={dish.price}
            discount={dish.discount}
            restaurantName={restaurant?.name}
          />
        ))}
      </div>
    </div>
  );
}
