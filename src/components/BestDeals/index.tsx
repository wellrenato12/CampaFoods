interface BestDealsProps {
  invert?: boolean;
  title: string;
  name: string;
  description: string;
  img: string;
}

export function BestDeals({ invert, title, name, description, img }: BestDealsProps) {
  return (
    <div className={`max-w-[1440px] mx-8 xl:mx-auto flex flex-col md:flex-row ${invert ? 'md:flex-row-reverse' : ''} items-center shadow-best-deals my-28 rounded-2xl`}>
      <div className='flex flex-col text-center md:text-start py-10 md:py-0 items-center gap-2 xl:gap-5 w-full md:w-1/2 xl:w-1/3 px-4 md:px-14'>
        <h2 className='text-[#353535] text-3xl md:text-4xl lg:text-[43px] font-bold leading-tight'>{title}{' '}<span className='text-[#ffb30e]'>{name}</span></h2>
        <p>{description}</p>
        <button className="py-3 xl:py-5 w-full rounded-lg text-white font-bold mx-auto mt-2 xl::mt-16 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#FF9A0E] hover:to-[#FFBA26] hover:scale-105 hover:shadow-lg" style={{ backgroundImage: 'linear-gradient(90deg, #FFBA26 0%, #FF9A0E 100%)' }}>
          Prossiga para o pedido
        </button>
      </div>
      <img loading="lazy" className={`flex-1 object-cover w-full md:w-1/2 md:h-[350px] xl:h-[512px] rounded-br-2xl rounded-bl-2xl ${invert ? 'md:rounded-tl-2xl rounded-bl-2xl md:rounded-br-none' : 'md:rounded-tr-2xl rounded-br-2xl md:rounded-bl-none'}`} src={img} alt={name} />
    </div>
  )
}