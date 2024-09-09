import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="max-w-[1440px] mx-auto">
      <ul className="flex flex-col sm:flex-row items-center justify-between py-3 sm:px-5 2xl:px-0">
        <Link to="/home">
          <li className="text-[18px] font-bold hover:underline hover:scale-110 transition-all">Início</li>
        </Link>
        <Link to="/about">
          <li className="text-[18px] font-bold hover:underline hover:scale-110 transition-all">Restaurantes</li>
        </Link>
        <Link to="/info">
          <li className="text-[18px] font-bold hover:underline hover:scale-110 transition-all">Carrinho</li>
        </Link>
        <Link to="/listdonates">
          <li className="text-[18px] font-bold hover:underline hover:scale-110 transition-all">Perfil</li>
        </Link>
      </ul>
    </nav>
  )
}