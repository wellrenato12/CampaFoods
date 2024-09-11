interface CardFoodDescontProps {
  name: string;
  image: string;
  discount: number;
  daysRemaining: number;
}

export function CardFoodDescont({ name, image, discount, daysRemaining}: CardFoodDescontProps) {
  return (
    <div className='space-y-8 pt-20'>
      <div className='relative bg-no-repeat bg-cover bg-center w-[320px] h-[300px] rounded-2xl' style={{ backgroundImage: `url(${image})` }}>
        <div className='font-bold text-white bg-[#ffb30e] absolute bottom-0 flex items-center gap-1 px-[18px] py-2.5 rounded-tr-3xl rounded-bl-2xl'>
          <span className='text-6xl'>{discount}</span>
          <div className='flex flex-col'>
            <span className='text-3xl'>%</span>
            <span className='text-xl font-normal'>Off</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-3.5 text-2xl'>
        <h3 className='text-[#424242] font-bold'>{name}</h3>
        <span className="w-64 px-6 py-2.5 bg-[#f17228] bg-opacity-10 text-[#f17228] font-bold rounded-lg">
          {daysRemaining} Dias restantes
        </span>
      </div>
    </div>
  )
}