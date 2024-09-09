import { House, Menu, ShoppingCart, User, Utensils, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false)
  const Links = [
    { 
      name: 'INÍCIO', 
      link: '/inicio', 
      icon: <House />
    },
    { 
      name: 'RESTAURANTES', 
      link: '/restaurantes' ,
      icon: <Utensils />
    },
    { 
      name: 'CARRINHO', 
      link: '/carrinho',
      icon: <ShoppingCart />
    },
    { 
      name: 'PERFIL', 
      link: '/perfil',
      icon: <User />
    },
  ]

  function handleIsOpen() {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className="w-full fixed top-0 left-0 bg-[#ffb30e] z-50"
    >
      <div className="items-center justify-between py-4 px-7">
        <div
          onClick={() => handleIsOpen()}
          className="absolute right-8 top-1 cursor-pointer w-7 h-7"
        >
          {isOpen ? <X className='text-black' /> : <Menu className='text-black' />}
        </div>

        <ul
          className={`pt-12 pb-4 absolute bg-[#ffb30e] z-[-1] left-0 w-full pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-0' : 'top-[-490px]'
            }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-7 font-semibold ">
              <Link
                to={link.link}
                className="text-black hover:text-red-700 transition-all flex gap-2"
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}