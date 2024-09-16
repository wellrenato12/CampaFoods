import { House, ShoppingCart, User, Utensils } from 'lucide-react'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Profile } from '../Profile'
import { Cart } from '../Cart'

interface MenuMobileProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  closeCartDrawer: () => void
  openCartDrawer: () => void
  isCartOpen: boolean
}

interface NavLink {
  name: string
  link?: string
  icon: ReactNode
}

export function MenuMobile({ isOpen, onClose, isCartOpen, closeCartDrawer }: MenuMobileProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const [pageSize, setPageSize] = useState({
    width: window.innerWidth,
  })

  const [cartOpen, setCarOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

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

  useEffect(() => {
    if (isOpen && pageSize.width > 768) {
      onClose()
    }
  }, [pageSize.width, isOpen, onClose])

  useEffect(() => {
    if (isCartOpen && pageSize.width > 768) {
      closeCartDrawer()
    }
  }, [pageSize.width, isCartOpen, closeCartDrawer])

  const links: NavLink[] = [
    {
      name: 'Início',
      link: '/inicio',
      icon: <House />
    },
    {
      name: 'Restaurantes',
      link: '/restaurantes',
      icon: <Utensils />
    },
    {
      name: 'Carrinho',
      icon: <ShoppingCart />
    },
    {
      name: 'Perfil',
      icon: <User />,
    },
  ]

  return (
    <nav className="w-full fixed bottom-0 bg-white z-10 border-t-2">
      <ul className="z-10 flex justify-around px-4">
        {links.map((link) => (
          <li key={link.name} className="font-medium py-4 text-xs">
            {link.link ? (
              <Link to={link.link} className="flex flex-col items-center">
                {link.icon}
                {link.name}
              </Link>
            ) : (
              <>
                <button
                  ref={buttonRef}
                  onClick={() =>
                    link.name === 'Carrinho'
                      ? setCarOpen(true)
                      : setIsProfileOpen(true)
                  }
                  className="flex flex-col items-center"
                >
                  {link.icon}
                  {link.name}
                </button>

                {link.name === 'Perfil' && (
                  <Profile isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
                )}

                {link.name === 'Carrinho' && (
                  <Cart isOpen={cartOpen} onClose={() => setCarOpen(false)} />
                  // <Drawer
                  //   isOpen={cartOpen}
                  //   placement="bottom"
                  //   size="full"
                  //   onClose={() => setCarOpen(false)}
                  // >
                  //   <DrawerOverlay />
                  //   <DrawerContent>
                  //     <DrawerCloseButton />
                  //     <DrawerBody className="flex flex-col items-center justify-center">
                  //       <img loading="lazy" src={sacola} alt="Sacola vazia" />
                  //       <p className="font-semibold text-lg">Sua sacola está vazia</p>
                  //       <p className="text-gray-400 text-sm">Adicione itens</p>
                  //     </DrawerBody>
                  //   </DrawerContent>
                  // </Drawer>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
