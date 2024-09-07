import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false)
  const Links = [
    { name: 'INÍCIO', link: '/home' },
    { name: 'QUEM SOMOS', link: '/about' },
    { name: 'O QUE FAZEMOS', link: '/info' },
    { name: 'LISTA DE DOACOES', link: '/listdonates' },
    { name: 'CONTATO', link: '/contact' },
  ]

  function handleIsOpen() {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className="w-full fixed top-0 left-0 bg-rose-500 z-50"
    >
      <div className="items-center justify-between py-4 px-7">
        <div
          onClick={() => handleIsOpen()}
          className="absolute right-8 top-0.5 cursor-pointer w-7 h-7"
        >
          {isOpen ? <X className='text-rose-500' /> : <Menu className='text-rose-50' />}
        </div>

        <ul
          className={`pt-12 pb-4 absolute bg-white z-[-1] left-0 w-full pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-0' : 'top-[-490px]'
            }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-7 font-semibold ">
              <Link
                to={link.link}
                className="text-red-500 hover:text-red-700 transition-all"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}