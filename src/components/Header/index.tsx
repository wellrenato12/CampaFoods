import { MapPin, Search, User } from 'lucide-react'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <header className="max-w-[1440px] mx-auto flex items-center justify-between py-5">
      <div className='flex items-center gap-1'>
        <img className="size-7" src={logo} alt="Imagem da logo" />
        <div className="text-3xl font-bold">
          <span className="text-[#f17228]">food</span>
          <span className="text-[#ffb30e]">wagon</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-lg text-[#424242] font-bold">Entregar em</span>
        <span className='flex gap-2'>
          <MapPin fill='#ffb30e' className="text-white" />
          <p className='text-lg'>Localização atual <strong>Parque da figueira</strong></p>
        </span>
      </div>

      {/* <div className='flex items-center gap-8'> */}
        {/* <div className='flex items-center gap-2'>
          <button>
            <Search className='text-[#ffb30e]' />
          </button>
          <input className='w-40 placeholder:font-bold placeholder:text-lg placeholder:text-[#424242]' type="text" placeholder="Procurar comida" />
        </div> */}
        <button className='flex items-center gap-2.5 text-[#ffb30e] text-lg font-bold px-6 py-3.5 shadow-button rounded-lg'>
          <User fill='#ffb30e' />
          Login
        </button>
      {/* </div> */}
    </header>
  )
}