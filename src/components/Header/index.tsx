import { MapPin, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import { MenuMobile } from '../MenuMobile'
import { NavBar } from '../NavBar'
import logo from '../../assets/logo.svg'

export function Header() {
  const [pageSize, setPageSize] = useState({
    width: window.innerWidth,
  })
  const componentRender = pageSize.width > 640 ? <NavBar /> : <MenuMobile />

  useEffect(() => {
    const handleSize = () => {
      setPageSize({
        width: window.innerWidth,
      })
    }

    window.addEventListener('resize', handleSize)

    handleSize()

    return () => {
      window.removeEventListener('resize', handleSize)
    }
  }, [])

  return (
    <>
      <header className="max-w-[1440px] mx-auto flex items-center justify-between py-5 px-5 2xl:px-0">
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
            <p className='text-lg'>Localização atual <strong>Feira - Naftali Miranda, 81</strong></p>
          </span>
        </div>
        <button className='flex items-center gap-2.5 text-[#ffb30e] text-lg font-bold px-6 py-3.5 shadow-button-login rounded-lg'>
          <User fill='#ffb30e' />
          Login
        </button>
      </header>
      {componentRender}
    </>
  )
}