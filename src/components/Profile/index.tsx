import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { CircleHelp, Heart, LogOut } from 'lucide-react';
import { useRef } from 'react';
import notification from '../../assets/notificacao.png'

interface ProfileProps {
  isOpen: boolean
  onClose: () => void
}

export function Profile({ isOpen, onClose }: ProfileProps) {
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
            <DrawerHeader className='text-center'>Crie sua conta</DrawerHeader>
            <hr className="border-t-[2px] border-gray-100" />
            <DrawerBody className='flex flex-col gap-8'>
              <div className='flex items-center bg-gray-100 rounded-lg'>
                <img className='w-[100px] object-cover' src={notification} alt="" />
                <div className='flex flex-col gap-1'>
                  <p className='font-medium'>Ative as notificações</p>
                  <p className='text-xs'>Acompanhe de perto o andamento dos seus pedidos, promoções e novidades.</p>
                  <a className='text-[#ffb30e] font-semibold' href="#">Ativar</a>
                </div>
              </div>
              <div className='flex items-center gap-2 text-xl'>
                <LogOut />
                Entrar ou cadastrar
              </div>
              <div className='flex items-center gap-2 text-xl'>
                <Heart />
                Favoritos
              </div>
              <div className='flex items-center gap-2 text-xl'>
                <CircleHelp />
                Ajuda
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    </div>
  )
}