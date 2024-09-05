interface BestDealsProps {
  invert?: boolean;
  title: string;
  name: string;
  description: string;
  img: string;
}

export function BestDeals({ invert, title, name, description, img }: BestDealsProps) {
  return (
    <div className={`max-w-[1440px] mx-auto flex ${invert ? 'flex-row-reverse' : ''} items-center shadow-best-deals my-28 rounded-2xl`}>
      <div className='flex flex-col items-center gap-5 w-1/3 px-14'>
        <h2 className='text-[#353535] text-[43px] font-bold leading-tight'>{title}{' '}<span className='text-[#ffb30e]'>{name}</span></h2>
        <p>{description}</p>
        <button className="py-5 w-full rounded-lg text-white font-bold mx-auto mt-16" style={{ backgroundImage: 'linear-gradient(90deg, #FFBA26 0%, #FF9A0E 100%)' }}>
          Prossiga para o pedido
        </button>
      </div>
      <img className={`flex-1 object-cover h-[512px] ${invert ? 'rounded-tl-2xl rounded-bl-2xl' : 'rounded-tr-2xl rounded-br-2xl'}`} src={img} alt={name} />
    </div>
  )
}