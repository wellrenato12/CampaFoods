import { MapPin } from 'lucide-react'
import { formatCurrencyBRL } from '../../utils/formatCurrencyBRL';

interface CardPopularItemsProps {
  name: string;
  restaurant: string;
  price: number;
  image: string;
}

export function CardPopularItems({ name, restaurant, price, image }: CardPopularItemsProps) {
  return (
    <div className="w-72 flex flex-col gap-2 text-[22px] my-8 sm:my-0">
      <img className='rounded-2xl size-[283px] object-cover' src={image} alt="" />
      <strong className='text-[#424242] font-bold'>{name}</strong>
      <span className='flex items-center gap-1'>
        <MapPin fill='#ffb30e' className="text-white" />
        {restaurant}
      </span>
      <span className='text-[#212121] font-bold'>{formatCurrencyBRL(price)}</span>
      <button className='py-3 bg-[#f17228] text-white rounded-lg'>
        Peça agora
      </button>
    </div>
  )
}