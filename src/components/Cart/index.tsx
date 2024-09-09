import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import sacola from '../../assets/sacola.png'

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

export function Cart({ isOpen, onClose }: CartProps) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='right'
        size='md'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody className='flex flex-col items-center justify-center'>
            <img src={sacola} alt="Sacola vazia" />
            <p className='font-semibold text-lg'>Sua sacola está vazia</p>
            <p className='text-gray-400 text-sm'>Adicione itens</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}