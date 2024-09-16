import { FacebookLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react";
import { Heart, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#212121] text-white">
      <div className="max-w-[1440px] mx-auto pb-24 pt-16 md:py-16 flex flex-col px-4 xl:px-0">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-0 items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-12 md:gap-28 lg:gap-12 xl:gap-28">
            <ul className="flex flex-col items-start gap-1">
              <a className="font-bold text-[22px] mb-10" href="">
                <li>Empresa</li>
              </a>
              <a href="">
                <li className="hover:scale-105 transition-all text-gray-200">Sobre nós</li>
              </a>
              <a href="">
                <li className="hover:scale-105 transition-all text-gray-200">Equipe</li>
              </a>
              <a href="">
                <li className="hover:scale-105 transition-all text-gray-200">Carreiras</li>
              </a>
              <a href="">
                <li className="hover:scale-105 transition-all text-gray-200">Blog</li>
              </a>
            </ul>
            <ul className="flex flex-col items-start gap-1">
              <a className="font-bold text-[22px] mb-10" href="">
                <li>Contato</li>
              </a>
              <a href="">
                <li className="hover:scale-105 transition-all text-gray-200">Ajuda e Suporte</li>
              </a>
              <a href="">
                <li className="hover:scale-105 transition-all text-gray-200">Faça parceria conosco</li>
              </a>
            </ul>
            <ul className="flex flex-col items-start gap-1">
              <a className="font-bold text-[22px] mb-10" href="">
                <li>Legal</li>
              </a>
              <a href="">
                <li className="hover:scale-105 transition-all text-gray-200">Termos e condições</li>
              </a>
              <a href="">
                <li className="hover:scale-105 transition-all text-gray-200">Reembolso e cancelamento</li>
              </a>
              <a href="">
                <li className="hover:scale-105 transition-all text-gray-200">Política de privacidade</li>
              </a>
              <a href="">
                <li className="hover:scale-105 transition-all text-gray-200">Política de cookies</li>
              </a>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold text-[22px]">Nos siga</span>
            <div className="flex gap-4">
              <a className="hover:scale-110 transition-all text-gray-200" href="">
                <InstagramLogo size={32} />
              </a>
              <a className="hover:scale-110 transition-all text-gray-200" href="">
                <FacebookLogo size={32} />
              </a>
              <a className="hover:scale-110 transition-all text-gray-200" href="">
                <TwitterLogo size={32} />
              </a>
            </div>
            <p>Receba ofertas exclusivas em sua caixa de correio</p>
            <div className='flex flex-col sm:flex-row items-center gap-4 py-6'>
              <div className="relative flex items-center flex-1 w-full sm:w-auto">
                <label htmlFor="searchInputFooter" className="absolute left-[18px] cursor-text">
                  <Mail fill='#adadad' />
                </label>
                <input
                  id="searchInputFooter"
                  className='flex-1 py-3 bg-[#424242] pl-[50px] rounded-lg placeholder:text-lg placeholder:text-[#9e9e9e]'
                  type="text"
                  placeholder="Insira seu e-mail"
                />
              </div>
              <button
                className="w-full sm:w-auto py-3 px-6 rounded-lg text-white font-bold transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                style={{ backgroundImage: 'linear-gradient(90deg, #FFBA26 0%, #FF9A0E 100%)' }}
              >
                Inscrever-se
              </button>

            </div>
          </div>
        </div>

        <hr className="border-t-2 border-gray-300 my-10" />

        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between text-center md:text-start">
          <p>Todos os direitos reservados &copy; <strong className="font-bold">CampaFoods, 2024</strong></p>
          <p className="flex">Feito com carinho<Heart className="mx-1" fill="#FDBC30" color="#FDBC30" /> por<a className="ml-1 font-bold hover:scale-105 transition-all text-gray-200" href="https://www.figma.com/community/file/996012879169900959/foodwagon-food-delivery-landing-template-by-themewagon" target="_blank">Themewagon</a></p>
        </div>
      </div>
    </footer>
  )
}