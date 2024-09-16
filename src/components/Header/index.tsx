import { LogOut, MapPin, ShoppingCart, User } from 'lucide-react'
import { useContext, useEffect, useState } from 'react'
import { MenuMobile } from '../MenuMobile'
import {
  useDisclosure,
} from '@chakra-ui/react'
import logo from '../../assets/logo.svg'
import { Profile } from '../Profile'
import { Cart } from '../Cart'
import { DeliveryContext } from '../../context/DeliveryContext'
import { Cep } from '../Cep'
import { Link } from 'react-router-dom'

export function Header() {
  const { hasUser, handleHasUser, cep, cart } = useContext(DeliveryContext)

  const totalValue = cart.reduce((total, item) => total + item.price * item.quantity, 0);

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
    <div className="border-b-2 fixed top-0 w-full bg-white z-10">
      <header className="max-w-[1440px] mx-auto flex flex-col gap-2 sm:gap-0 sm:flex-row items-center justify-between py-4 sm:px-5 2xl:px-0">
        <div className='flex items-center gap-1'>
          <img loading="lazy" className="size-7" src={logo} alt="Imagem da logo" />
          <Link to="/inicio" className="text-2xl md:text-3xl font-bold">
            <span className="text-[#f17228]">food</span>
            <span className="text-[#ffb30e]">wagon</span>
          </Link>
        </div>
        {cep?.address && cep?.number ? (
          <div className='flex items-center gap-1 lg:gap-2'>
            <MapPin fill='#ffb30e' className="text-white" />
            <p className='text-sm lg:text-lg'><strong>{cep.address}, {cep.number}</strong></p>
          </div>
        ) : (
          <Cep />
        )}
        {pageSize.width > 768 && (
          <div className='flex items-center gap-6'>
            {hasUser ? (
              <button onClick={handleHasUser} title='Sair'>
                <LogOut />
              </button>
            ) : (
              <button
                className="flex items-center gap-2.5 text-[#ffb30e] text-lg font-bold px-4 py-3.5 shadow-button-login rounded-lg transition duration-300 ease-in-out transform hover:bg-[#ffb30e] hover:text-white hover:scale-105 hover:shadow-lg"
                onClick={openProfileDrawer}
              >
                <User className="fill-current " />
                Login
              </button>
            )}
            <button
              onClick={openCartDrawer}
              className='flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-all'
            >
              <ShoppingCart color='#ffb30e' size={26} />
              <div className='flex flex-col text-xs text-zinc-500'>
                <span>R$ {totalValue === 0 ? '0,00' : totalValue.toFixed(2)}</span>
                <span>{cart.length} itens</span>
              </div>
            </button>
          </div>
        )}
      </header >
      {pageSize.width <= 768 && <MenuMobile closeCartDrawer={closeCartDrawer} openCartDrawer={openCartDrawer} isCartOpen={isCartOpen} isOpen={isProfileOpen} onOpen={openProfileDrawer} onClose={closeProfileDrawer} />}

      <Profile isOpen={isProfileOpen} onClose={closeProfileDrawer} />

      <Cart isOpen={isCartOpen} onClose={closeCartDrawer} />
    </div>
  )
}
