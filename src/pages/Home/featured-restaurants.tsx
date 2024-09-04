import { ChevronRight } from "lucide-react";
import { CardFeaturedRestaurants } from "../../components/CardFeaturedRestaurants";

export function FeaturedRestaurants() {
  return (
    <div className="max-w-[1920px] mx-auto my-20">
      <h2 className="text-[43px] font-bold text-center mb-[88px]">Restaurantes em destaque</h2>
      <div className="grid grid-cols-4 justify-items-center">
        <CardFeaturedRestaurants />
        <CardFeaturedRestaurants />
        <CardFeaturedRestaurants />
        <CardFeaturedRestaurants />
        <CardFeaturedRestaurants />
        <CardFeaturedRestaurants />
        <CardFeaturedRestaurants />
        <CardFeaturedRestaurants />
      </div>
      <button className="flex items-center gap-2.5 px-12 py-5 rounded-lg text-white font-bold mt-4 mx-auto" style={{ backgroundImage: 'linear-gradient(90deg, #FFBA26 0%, #FF9A0E 100%)' }}>
        Ver tudo
        <ChevronRight />
      </button>
    </div>
  )
}