import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import { Minus, Plus } from 'lucide-react';
import { useContext } from 'react';
import { DeliveryContext } from '../../context/DeliveryContext';

interface CardDishesProps {
  description: string;
  image: string;
  name: string;
  price: number;
  discount?: number;
}

export function CardDishes({
  description, image, name, price, discount
}: CardDishesProps) {
  const { handleIncrement, handleDecrement, count } = useContext(DeliveryContext)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const discountedPrice = discount ? price - (price * discount / 100) : null;
  const totalValue = discountedPrice ? discountedPrice * count : price * count

  return (
    <>
      <div
        onClick={onOpen}
        className="cursor-pointer w-[350px] h-[380px] border-[1px] shadow-lg rounded flex flex-col justify-between mb-12"
      >
        <div className="flex flex-col gap-4">
          <img className="object-cover object-center h-[160px] w-full rounded-tl rounded-tr" src={image} alt={name} />
          <h3 className="text-xl px-4">{name}</h3>
          <p className="text-zinc-500/70 px-4">{description}</p>
        </div>
        <div className="flex gap-4 mb-4 px-4 text-xl">
          {discountedPrice !== null && (
            <span className="text-emerald-500">R$ {discountedPrice.toFixed(2)}</span>
          )}
          <span className={discount ? 'line-through text-red-500' : ''}>
            R$ {price.toFixed(2)}
          </span>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={800}>
          <ModalCloseButton />
          <ModalBody className='flex flex-col md:flex-row gap-8 m-8'>
            <img className='w-full h-[300px] object-cover rounded-lg' src={image} alt={name} />
            <div className='flex flex-col gap-12 md:gap-0 justify-between'>
              <div className='flex flex-col gap-2'>
                <h4 className='text-center text-xl font-medium'>{name}</h4>
                <p>{description}</p>

                <div className="flex gap-4 text-xl">
                  {discountedPrice !== null && (
                    <span className="text-emerald-500">R$ {discountedPrice.toFixed(2)}</span>
                  )}
                  <span className={discount ? 'line-through text-red-500' : ''}>
                    R$ {price.toFixed(2)}
                  </span>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='text-sm'>Total: <strong>R$ {totalValue.toFixed(2)}</strong></span>
                <div className="flex gap-4">
                  <Button as="span" className='flex items-center gap-5'>
                    <Minus
                      onClick={() => count > 1 && handleDecrement()} 
                      className='cursor-pointer' size={14} 
                    />
                    {count}
                    <Plus onClick={handleIncrement} className='cursor-pointer' size={14} />
                  </Button>
                  <Button
                    bgColor='#ffb30e'
                    _hover={{ bgColor: '#ff9900' }}
                    className='flex-1'
                  >
                    Adicionar
                  </Button>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
