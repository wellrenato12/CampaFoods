import { Header } from "../../components/Header";
import { Bike, BriefcaseBusiness, CircleDollarSign, ConciergeBell, Donut, MapPin, MapPinHouse, Search } from "lucide-react";
import { CardFoodDescont } from "../../components/CardFoodDescont";
import backgroundImage from '../../assets/background-home.svg'
import pizzaHome from '../../assets/pizza-home.svg'
import { PopularItems } from "./popular-items";

export function Home() {
  return (
    <div>
      <Header />
      <div className="bg-no-repeat bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="relative max-w-[1440px] h-auto xl:h-[620px] px-4 xl:px-0 pt-3 sm:pt-12 xl:pt-0 mx-auto flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-0">
          <div className="md:w-[750px] space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl sm:text-5xl font-bold text-white">Você está com fome?</h2>
              <p className="text-[#504f4f]">com apenas alguns cliques, encontre refeições acessíveis perto de você</p>
            </div>
            <div className="bg-white rounded-2xl">
              <div className="p-6 flex gap-2">
                <button className="flex gap-2.5 px-6 py-2.5 bg-[#f17228] bg-opacity-10 text-[#f17228] font-bold rounded-lg">
                  <Bike />
                  Entrega
                </button>
                <button className="flex gap-2.5 px-6 py-2.5 text-[#757575] font-bold">
                  <BriefcaseBusiness />
                  Retirada
                </button>
              </div>

              <hr className="border-t-2 border-gray-300" />

              <div className='flex flex-col sm:flex-row gap-4 p-6'>
                <div className="relative flex items-center flex-1">
                  <label htmlFor="searchInput" className="absolute left-[18px] cursor-text">
                    <MapPin fill='#ff7474' className="text-white" />
                  </label>
                  <input
                    id="searchInput"
                    className='flex-1 py-2 bg-[#f5f5f5] pl-[50px] rounded-lg placeholder:text-lg placeholder:text-[#9e9e9e]'
                    type="text"
                    placeholder="Digite sua comida"
                  />
                </div>
                <button className="flex justify-center sm:justify-start px-6 py-4 rounded-lg gap-2.5 text-white font-bold" style={{ backgroundImage: 'linear-gradient(90deg, #FF7A7A 0%, #F65900 100%)' }}>
                  <Search />
                  Encontrar comida
                </button>
              </div>
            </div>
          </div>
          <img
            className="xl:object-cover xl:absolute xl:right-0 xl:bottom-0 size-[250px] sm:size-[350px] xl:size-auto"
            src={pizzaHome}
            alt="Imagem de um pizza"
          />
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20">
        <CardFoodDescont />
        <CardFoodDescont />
        <CardFoodDescont />
        <CardFoodDescont />
      </div>
      <div
        className="h-[518px]"
        style={{ backgroundImage: 'linear-gradient(180deg, rgba(255, 206, 103, 0.22) 0%, rgba(253, 237, 202, 0) 100%)' }}
      >
        <div className="max-w-[1440px] mx-auto py-20">
          <h2 className="text-center text-[#F17228] text-5xl font-bold mb-20">Como funciona</h2>
          <div className="flex justify-center gap-8">
            <div className="w-[307px] flex flex-col items-center">
              <MapPinHouse className="size-28 mb-10" fill='#ffb30e' />
              <strong className="font-bold text-2xl text-[#434343] mb-2.5">Selecione o local</strong>
              <p className="text-[#9e9e9e] text-center">Escolha o local onde sua comida será entregue.</p>
            </div>
            <div className="w-[307px] flex flex-col items-center">
              <ConciergeBell className="size-28 mb-10" fill='#ffb30e' />
              <strong className="font-bold text-2xl text-[#434343] mb-2.5">Escolha o pedido</strong>
              <p className="text-[#9e9e9e] text-center">Confira centenas de menus para escolher sua comida favorita.</p>
            </div>
            <div className="w-[307px] flex flex-col items-center">
              <CircleDollarSign className="size-28 mb-10" fill='#ffb30e' />
              <strong className="font-bold text-2xl text-[#434343] mb-2.5">Pagamento adiantado</strong>
              <p className="text-[#9e9e9e] text-center">É rápido, seguro e simples. Selecione vários métodos de pagamento.</p>
            </div>
            <div className="w-[307px] flex flex-col items-center">
              <Donut className="size-28 mb-10" fill='#ffb30e' />
              <strong className="font-bold text-2xl text-[#434343] mb-2.5">Aproveite as refeições</strong>
              <p className="text-[#9e9e9e] text-center">A comida é preparada e entregue diretamente em sua casa.</p>
            </div>
          </div>
        </div>
      </div>
      <PopularItems />
    </div>
  )
}