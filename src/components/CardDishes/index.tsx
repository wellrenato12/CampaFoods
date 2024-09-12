import teste from '../../assets/dishes/churrasco-costelinha.jpg'

export function CardDishes() {
  return (
    <div className="w-[350px] h-[380px] border-[1px] shadow-lg rounded flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <img className="object-cover h-[160px] w-full rounded-tl rounded-tr" src={teste} alt="" />
        <h3 className="text-xl px-4">Smash Burguer</h3>
        <p className='text-zinc-500/70 px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='flex gap-4 mb-4 px-4 text-xl'>
        <span className='text-emerald-500'>R$ 18,99</span>
        <span className='line-through'>R$ 28,99</span>
      </div>
    </div>
  )
}