import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { useContext, useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { DeliveryContext } from '../../context/DeliveryContext'
import { toast } from 'react-toastify';

interface CEPFormData {
  cep: string;
  address: string;
  number: number;
}

export function Cep() {
  const { handleSearchCep, hasUser } = useContext(DeliveryContext)
  const { register, handleSubmit, setValue, watch } = useForm<CEPFormData>()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [isNumberDisabled, setIsNumberDisabled] = useState(true)
  const [isAddressVisible, setIsAddressVisible] = useState(false)
  const [isCepLoaded, setIsCepLoaded] = useState(false)

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  async function checkCEP(data: { cep: string }) {
    const cepValue = data.cep.replace(/\D/g, '')
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepValue}/json`)
      const addressData = await response.json()

      if (!addressData.erro) {
        setValue('address', addressData.logradouro)

        setIsNumberDisabled(false)
        setIsAddressVisible(true)

        setIsCepLoaded(true)

        handleSearchCep({
          address: addressData.logradouro,
          number: 0,
        })
      } else {
        console.error('CEP não encontrado')
      }
    } catch (error) {
      console.error('Erro ao buscar CEP: ', error)
    }
  }

  function onSubmit(data: CEPFormData) {
    handleSearchCep({
      address: watch('address'),
      number: data.number,
    })
    onClose()
  }

  return (
    <>
      <div
        className="bg-[#faaa01] cursor-pointer px-4 py-2 rounded-full text-white font-bold shadow-button-carousel transition-all duration-300 ease-in-out hover:bg-[#e89c00] hover:shadow-lg hover:scale-105"
        onClick={() => hasUser ? onOpen() : toast.info('Por favor, efetue login primeiro', {
          autoClose: 1000,
          theme: "colored",
        })}
      >
        Buscar Cep
      </div>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>CEP</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody className='flex flex-col gap-8'>
              <input
                {...register("cep")}
                className='bg-zinc-100 py-2 px-4 rounded-lg'
                type="text"
                placeholder='CEP'
                required
              />

              {isAddressVisible && (
                <>
                  <input
                    {...register("address")}
                    className='bg-zinc-100 py-2 px-4 rounded-lg'
                    type="text"
                    placeholder='Endereço'
                    readOnly
                  />

                  <input
                    {...register("number")}
                    className='bg-zinc-100 py-2 px-4 rounded-lg'
                    type="number"
                    placeholder='Número'
                    required
                    disabled={isNumberDisabled}
                  />
                </>
              )}
            </ModalBody>

            <ModalFooter className='flex gap-8'>
              {!isCepLoaded ? (
                <button
                  type='button'
                  className='bg-[#faaa01] py-1 px-4 rounded-lg font-medium hover:scale-105 transition-all'
                  onClick={handleSubmit(checkCEP)}
                >
                  Carregar CEP
                </button>
              ) : (
                <button
                  type='submit'
                  className='bg-[#faaa01] py-1 px-4 rounded-lg font-medium hover:scale-105 transition-all'
                >
                  Salvar
                </button>
              )}
              <button
                type='button'
                className='bg-zinc-100 py-1 px-4 rounded-lg font-medium hover:scale-105 transition-all'
                onClick={onClose}
              >
                Cancelar
              </button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}
