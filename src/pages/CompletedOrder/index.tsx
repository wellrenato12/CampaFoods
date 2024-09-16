import { useContext } from 'react'
import { DeliveryContext } from '../../context/DeliveryContext'
import { DollarSign, MapPin, Timer } from 'lucide-react'
import completedOrder from '/assets/completed-order.jpg'

export function CompletedOrder() {
  const { cep, paymentMethod } = useContext(DeliveryContext)

  return (
    <div className='max-w-6xl mx-auto flex flex-col items-center lg:items-start gap-20 my-32'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-bold text-[#ffb30e]'>Pedido Confirmado</h1>
        <p className='font-medium text-gray-500'>Agora é só aguardar que logo chegará até você</p>
      </div>
      <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8'>
        <div className='space-y-8 rounded-tl-lg rounded-tr-3xl rounded-br-lg rounded-bl-3xl py-8 px-8 sm:px-24 border-2'>
          <div className='flex items-center gap-4'>
            <span className='rounded-full bg-[#ffb30e] p-2'>
              <MapPin color='white' />
            </span>
            <div>
              <p>Entrega em</p>
              <strong>{cep?.address}, {cep?.number}</strong>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <span className='rounded-full bg-[#ffb30e] p-2'>
              <Timer color='white' />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <strong>40 min - 50 min</strong>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <span className='rounded-full bg-[#ffb30e] p-2'>
              <DollarSign color='white' />
            </span>
            <div>
              <p>Forma de pagamento</p>
              <strong>{paymentMethod}</strong>
            </div>
          </div>
        </div>
        <img className='w-[350px] sm:w-[450px] object-cover' src={completedOrder} alt="" />
      </div>
    </div>
  )
}