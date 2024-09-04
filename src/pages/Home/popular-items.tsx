import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardPopularItems } from "../../components/CardPopularItems";

export function PopularItems() {
  return (
    <div className="flex items-center justify-center gap-12">
      <button className="bg-[#faaa01] rounded-full text-white size-20 shadow-button-carousel">
        <ChevronLeft className="size-14 mx-auto" />
      </button>
      <div className="my-20">
        <h2 className="text-[43px] font-bold text-center mb-[88px]">Populares</h2>
        <div className="grid grid-cols-5 gap-4 justify-items-center">
          <CardPopularItems />
          <CardPopularItems />
          <CardPopularItems />
          <CardPopularItems />
          <CardPopularItems />
        </div>
      </div>
      <button className="bg-[#faaa01] rounded-full text-white size-20 shadow-button-carousel">
        <ChevronRight className="size-14 mx-auto" />
      </button>
    </div>
  )
}