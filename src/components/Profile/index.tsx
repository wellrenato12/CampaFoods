import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { CircleHelp, Heart, LogOut } from 'lucide-react';
import { useContext, useRef } from 'react';
import notification from '../../assets/notificacao.png'
import { Login } from '../Login';
import { DeliveryContext } from '../../context/DeliveryContext';

interface ProfileProps {
  isOpen: boolean
  onClose: () => void
}

export function Profile({ isOpen, onClose }: ProfileProps) {
  const { hasUser, user, handleHasUser } = useContext(DeliveryContext)
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div>
      <>
        <Drawer
          isOpen={isOpen}
          placement='bottom'
          size='full'
          onClose={onClose}
          finalFocusRef={buttonRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader className='text-center'>
              {hasUser ? (
                <div className='flex items-center justify-center gap-4'>
                  <img className='rounded-full size-10' src={user?.profilePicture} alt="" />
                  {user?.name}
                </div>
              ) : (
                'Crie sua conta'
              )}
            </DrawerHeader>
            <hr className="border-t-[2px] border-gray-100" />
            <DrawerBody className='space-y-8'>
              <div className='flex items-center bg-gray-100 rounded-lg'>
                <img loading="lazy" className='w-[100px] object-cover' src={notification} alt="" />
                <div className='flex flex-col gap-1'>
                  <p className='font-medium'>Ative as notificações</p>
                  <p className='text-xs'>Acompanhe de perto o andamento dos seus pedidos, promoções e novidades.</p>
                  <a className='text-[#ffb30e] font-semibold' href="#">Ativar</a>
                </div>
              </div>
              <button>
                {hasUser ? (
                  <button 
                    onClick={handleHasUser}
                    className='flex items-center gap-2 text-xl hover:text-[#ffb30e] transition-all'>
                    <LogOut />
                    Sair
                  </button>

                ) : (
                  <Login />
                )}
              </button>
              <button className='flex items-center gap-2 text-xl hover:text-[#ffb30e] transition-all'>
                <Heart />
                Favoritos
              </button>
              <button className='flex items-center gap-2 text-xl hover:text-[#ffb30e] transition-all'>
                <CircleHelp />
                Ajuda
              </button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    </div>
  )
}