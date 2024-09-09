import { MapPin, ShoppingCart, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import { MenuMobile } from '../MenuMobile'
import {
  useDisclosure,
} from '@chakra-ui/react'
import logo from '../../assets/logo.svg'
import { Profile } from '../Profile'
import { Cart } from '../Cart'

export function Header() {
  const {
    isOpen: isProfileOpen,
    onOpen: openProfileDrawer,
    onClose: closeProfileDrawer,
  } = useDisclosure()

  const {
    isOpen: isCartOpen,
    onOpen: openCartDrawer,
    onClose: closeCartDrawer,
  } = useDisclosure()

  const [pageSize, setPageSize] = useState({
    width: window.innerWidth,
  })

  useEffect(() => {
    if (isProfileOpen && pageSize.width < 768) {
      closeProfileDrawer()
    }
  }, [pageSize.width, isProfileOpen, closeProfileDrawer])

  useEffect(() => {
    if (isCartOpen && pageSize.width < 768) {
      closeCartDrawer()
    }
  }, [pageSize.width, isCartOpen, closeCartDrawer])

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
      <header className="max-w-[1440px] mx-auto flex flex-col gap-2 sm:gap-0 sm:flex-row items-center justify-between py-5 sm:px-5 2xl:px-0">
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
          <div className='flex items-center gap-6'>
            <button
              className='flex items-center gap-2.5 text-[#ffb30e] text-lg font-bold px-4 py-3.5 shadow-button-login rounded-lg'
              onClick={openProfileDrawer}
            >
              <User fill='#ffb30e' />
              Login
            </button>
            <button
              onClick={openCartDrawer}
              className='flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-all'
            >
              <ShoppingCart color='#ffb30e' size={26} />
              <div className='flex flex-col text-xs text-zinc-500'>
                <span>R$ 0,00</span>
                <span>0 itens</span>
              </div>
            </button>
          </div>
        )}
      </header>
      {pageSize.width <= 768 && <MenuMobile isOpen={isProfileOpen} onOpen={openProfileDrawer} onClose={closeProfileDrawer} />}

      <Profile isOpen={isProfileOpen} onClose={closeProfileDrawer} />

      <Cart isOpen={isCartOpen} onClose={closeCartDrawer} />
    </>
  )
}
