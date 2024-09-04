import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardCategoryFood } from "../../components/CardCategoryFood";

export function CategoryFood() {
  return (
    <div className="bg-[#fefaf1]">
      <div className="max-w-[1440px] mx-auto pt-20 pb-14">
        <div className="flex justify-between items-center mb-20">
          <h2 className="text-[43px] font-bold text-[#212121]">Escolha sua categoria</h2>
          <div className="flex items-center gap-4">
            <button className="bg-[#faaa01] rounded-full text-white size-20 shadow-button-carousel">
              <ChevronLeft className="size-14 mx-auto" />
            </button>
            <button className="bg-[#faaa01] rounded-full text-white size-20 shadow-button-carousel">
              <ChevronRight className="size-14 mx-auto" />
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <CardCategoryFood />
          <CardCategoryFood />
          <CardCategoryFood />
          <CardCategoryFood />
          <CardCategoryFood />
        </div>
      </div>
    </div>
  )
}