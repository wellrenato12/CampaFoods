import { MapPin } from 'lucide-react'
import hamburguer from '../../assets/popular-items/hamburguer.jpg'

export function CardPopularItems() {
  return (
    <div className="w-72 flex flex-col gap-2 text-[22px]">
      <img className='rounded-2xl object-cover' src={hamburguer} alt="" />
      <strong className='text-[#424242] font-bold'>Hambúrguer Picanha na Brasa</strong>
      <span className='flex items-center gap-1'>
        <MapPin fill='#ffb30e' className="text-white" />
        Brasa Burger & Grill
      </span>
      <span className='text-[#212121] font-bold'>R$ 28,90</span>
      <button className='py-3 bg-[#f17228] text-white rounded-lg shadow-button-popular'>
        Peça agora
      </button>
    </div>
  )
}