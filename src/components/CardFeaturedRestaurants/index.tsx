import { Clock5, Star, Tag } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

interface CardFeaturedRestaurantsProps {
  id: number;
  name: string;
  image: string;
  logo: string;
  rating: number;
  status: boolean;
  discount: number;
}

export function CardFeaturedRestaurants({ id, name, image, logo, rating, status, discount }: CardFeaturedRestaurantsProps) {
  const navigate = useNavigate();

  function handleNavigateRestaurantDishes() {
    navigate(`/restaurantes/${id}`);
  }

  return (
    <div
      onClick={handleNavigateRestaurantDishes}
      className='cursor-pointer w-[327px] sm:w-[357px] mb-16'
    >
      <div className='relative mb-6'>
        <img 
          loading="lazy" 
          className='h-[300px] w-full object-cover rounded-2xl' 
          src={image} 
          alt={`${name} restaurant`} 
        />
        <div className='absolute text-white font-bold text-xl top-6 left-6 flex gap-2'>
          {discount > 0 && (
            <span className='flex items-center gap-2 bg-[#f17228] px-4 py-2 rounded-lg'>
              <Tag />
              {discount}% off
            </span>
          )}
          <span className='flex items-center gap-2 bg-[#ffb30e] px-4 py-2 rounded-lg'>
            <Clock5 />
            Rápido
          </span>
        </div>
      </div>
      <div className='flex items-center gap-6 mb-8'>
        <img 
          loading="lazy" 
          className='size-16 rounded-lg object-cover' 
          src={logo} 
          alt={`${name} logo`} 
        />
        <div>
          <h4 className='text-[424242] font-bold text-[22px]'>{name}</h4>
          <span className='flex items-center gap-2 text-[#ffb30e]'>
            <Star fill='#ffb30e' />
            {rating}
          </span>
        </div>
      </div>
      {status ? (
        <span className='text-[#79b93c] font-bold text-[22px] bg-[#79b93c] bg-opacity-20 px-4 py-2 rounded-2xl'>
          Aberto agora
        </span>
      ) : (
        <span className='text-[#f17228] font-bold text-[22px] bg-[#f17228] bg-opacity-20 px-4 py-2 rounded-2xl'>
          Fechado
        </span>
      )}
    </div>
  );
}
