import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerFooter,
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from '@chakra-ui/react'
import sacola from '../../assets/sacola.png'
import { useContext, useRef, useState } from 'react'
import { DeliveryContext, type PaymentMethod } from '../../context/DeliveryContext'
import { useBreakpointValue } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

export function Cart({ isOpen, onClose }: CartProps) {
  const navigate = useNavigate()
  const { isOpen: isOpenDialog, onOpen, onClose: onCloseDialog } = useDisclosure()
  const cancelRef = useRef(null)
  const { cart, updateCart, selectPaymentMethod } = useContext(DeliveryContext)
  const [showPaymentOptions, setShowPaymentOptions] = useState(false)

  const drawerSize = useBreakpointValue({
    base: 'full',
    md: 'md',
  })

  const totalValue = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  function handleDeleteDish(id: string) {
    const newArrayDishes = cart.filter((dish) => dish.id !== id)
    updateCart(newArrayDishes)
  }

  function handlePayment(paymentMethod: PaymentMethod) {
    selectPaymentMethod(paymentMethod)

    onOpen()
  }

  function handleConfirmOrder() {
    updateCart([])

    onCloseDialog()
    onClose()

    navigate('/pedido-finalizado')
  }

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" size={drawerSize} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          {cart.length > 0 ? (
            <>
              <DrawerBody>
                <p className="text-zinc-500 text-sm">Seu pedido em</p>
                <h2 className="font-bold text-lg">{cart[0].restaurantName}</h2>
                {cart.map((dish, index) => (
                  <div key={index} className="my-4">
                    <h4 className="font-semibold text-sm">{dish.nameDish}</h4>
                    <hr className="border-t-[1px] border-gray-300 my-2" />
                    <div className="mt-4 flex justify-between font-medium text-sm sm:text-lg">
                      <p>
                        {dish.quantity}x {dish.nameDish}
                      </p>
                      <p>R$ {dish.price.toFixed(2)}</p>
                    </div>
                    <p className="text-zinc-500 text-sm mt-2">{dish.description}</p>
                    <div className="space-x-8 mt-2">
                      <button className="text-[#ffb30e] font-medium">Editar</button>
                      <button
                        onClick={() => handleDeleteDish(dish.id)}
                        className="text-gray-400 font-medium"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                ))}
              </DrawerBody>

              <DrawerFooter className="flex flex-col gap-2">
                <div className="flex items-center justify-between w-full">
                  <p className="text-sm font-bold">Total</p>
                  <p className="font-bold text-lg">R$ {totalValue.toFixed(2)}</p>
                </div>

                {showPaymentOptions ? (
                  <div className="w-full flex gap-4">
                    <Button
                      colorScheme="blue"
                      flex={1}
                      onClick={() => handlePayment('Cartão de crédito')}
                    >
                      Cartão de Crédito
                    </Button>
                    <Button
                      colorScheme="green"
                      flex={1}
                      onClick={() => handlePayment('Pix')}
                    >
                      Pix
                    </Button>
                  </div>
                ) : (
                  <Button
                    className="w-full"
                    bg="#ffb30e"
                    _hover={{ bg: '#ff9900' }}
                    textColor="white"
                    onClick={() => setShowPaymentOptions(true)}
                  >
                    Escolher forma de pagamento
                  </Button>
                )}
              </DrawerFooter>
            </>
          ) : (
            <DrawerBody className="flex flex-col items-center justify-center">
              <img src={sacola} alt="Sacola vazia" className="mb-4" />
              <p className="font-semibold text-lg">Sua sacola está vazia</p>
              <p className="text-gray-400 text-sm">Adicione itens</p>
            </DrawerBody>
          )}
        </DrawerContent>
      </Drawer>
      <>
        <AlertDialog
          isOpen={isOpenDialog}
          leastDestructiveRef={cancelRef}
          onClose={onCloseDialog}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Confirmar pedido
              </AlertDialogHeader>

              <AlertDialogBody>
                Você tem certeza? Não é possível desfazer esta ação depois.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onCloseDialog}>
                  Cancelar
                </Button>
                <Button colorScheme='red' onClick={handleConfirmOrder} ml={3}>
                  Confirmar
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    </>
  )
}
