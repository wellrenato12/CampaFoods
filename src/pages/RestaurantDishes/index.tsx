import { useEffect, useState } from "react";
import { CardDishes } from "../../components/CardDishes";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

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
      console.log('Dados do restaurante:', response.data)
    } catch (error) {
      console.error("Erro ao buscar restaurante: ", error);
    }
  }

  useEffect(() => {
    fetchRestaurant();
  }, [id]);

  return (
    <div>
      <img className="size-9" src={restaurant?.image} alt="Restaurant" />
      <div>
        <img className="size-9" src={restaurant?.logo} alt="Restaurant Logo" />
        <h1>{restaurant?.name}</h1>
        <span>{restaurant?.rating}</span>
      </div>
      <div>
        {restaurant?.dishes.map((dish) => (
          <CardDishes
            key={dish.id}
            description={dish.description}
            image={dish.image}
            name={dish.name}
            price={dish.price}
            discount={dish.discount}
          />
        ))}
      </div>
    </div>
  );
}
