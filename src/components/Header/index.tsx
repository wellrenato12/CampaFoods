import { MapPin, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import { MenuMobile } from '../MenuMobile'
import { NavBar } from '../NavBar'
import logo from '../../assets/logo.svg'

export function Header() {
  const [pageSize, setPageSize] = useState({
    width: window.innerWidth,
  })
  const componentRender = pageSize.width > 768 ? <NavBar /> : <MenuMobile />

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
      <header className="max-w-[1440px] mx-auto mt-6 md:mt-0 flex flex-col gap-2 sm:gap-0 sm:flex-row items-center justify-between py-5 sm:px-5 2xl:px-0">
        <div className='flex items-center gap-1'>
          <img className="size-7" src={logo} alt="Imagem da logo" />
          <div className="text-2xl md:text-3xl font-bold">
            <span className="text-[#f17228]">food</span>
            <span className="text-[#ffb30e]">wagon</span>
          </div>
        </div>

        <div className='flex items-center gap-1 lg:gap-2'>
          <MapPin fill='#ffb30e' className="text-white" />
          <p className='text-sm lg:text-lg'>Localização atual <strong>Feira - Naftali Miranda, 81</strong></p>
        </div>
        {pageSize.width > 768 && (
          <button className='flex items-center gap-2.5 text-[#ffb30e] text-lg font-bold px-6 py-3.5 shadow-button-login rounded-lg'>
            <User fill='#ffb30e' />
            Login
          </button>
        )}
      </header>
      {componentRender}
    </>
  )
}