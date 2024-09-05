import { FacebookLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react";
import { Heart, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#212121] text-white">
      <div className="max-w-[1440px] mx-auto py-16">
        <div className="flex items-center justify-between">
          <div className="flex gap-28">
            <ul className="flex flex-col gap-1">
              <a href="">
                <li className="font-bold text-[22px] mb-10">Empresa</li>
              </a>
              <a href="">
                <li>Sobre nós</li>
              </a>
              <a href="">
                <li>Equipe</li>
              </a>
              <a href="">
                <li>Carreiras</li>
              </a>
              <a href="">
                <li>Blog</li>
              </a>
            </ul>
            <ul className="flex flex-col gap-1">
              <a href="">
                <li className="font-bold text-[22px] mb-10">Contato</li>
              </a>
              <a href="">
                <li>Ajuda e Suporte</li>
              </a>
              <a href="">
                <li>Faça parceria conosco</li>
              </a>
            </ul>
            <ul className="flex flex-col gap-1">
              <a href="">
                <li className="font-bold text-[22px] mb-10">Legal</li>
              </a>
              <a href="">
                <li>Termos e condições</li>
              </a>
              <a href="">
                <li>Reembolso e cancelamento</li>
              </a>
              <a href="">
                <li>Política de privacidade</li>
              </a>
              <a href="">
                <li>Política de cookies</li>
              </a>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold text-[22px]">Nos siga</span>
            <div className="flex gap-4">
              <a href="">
                <InstagramLogo size={32} />
              </a>
              <a href="">
                <FacebookLogo size={32} />
              </a>
              <a href="">
                <TwitterLogo size={32} />
              </a>
            </div>
            <p>Receba ofertas exclusivas em sua caixa de correio</p>
            <div className='flex items-center gap-4 py-6'>
              <div className="relative flex items-center flex-1">
                <label htmlFor="searchInput" className="absolute left-[18px] cursor-text">
                  <Mail fill='#ff7474' className="text-white" />
                </label>
                <input
                  id="searchInput"
                  className='flex-1 py-3 bg-[#f5f5f5] pl-[50px] rounded-lg placeholder:text-lg placeholder:text-[#9e9e9e]'
                  type="text"
                  placeholder="Insira seu e-mail"
                />
              </div>
              <button className="py-3 px-6 rounded-lg text-white font-bold" style={{ backgroundImage: 'linear-gradient(90deg, #FFBA26 0%, #FF9A0E 100%)' }}>
                Inscrever-se
              </button>
            </div>
          </div>
        </div>

        <hr className="border-t-2 border-gray-300 my-10" />

        <div className="flex items-center justify-between">
          <p>Todos os direitos reservados &copy; <strong className="font-bold">FoodWagon, 2024</strong></p>
          <p className="flex">Feito com carinho<Heart className="mx-1" fill="#FDBC30" color="#FDBC30" /> por<a className="ml-1 font-bold" href="https://www.figma.com/community/file/996012879169900959/foodwagon-food-delivery-landing-template-by-themewagon" target="_blank">Themewagon</a></p>
        </div>
      </div>
    </footer>
  )
}