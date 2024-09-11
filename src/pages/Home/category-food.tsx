import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardCategoryFood } from "../../components/CardCategoryFood";
import { useResizeHandler } from "../../utils/useResizeHandler";
import { SwiperSlide, Swiper } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { useEffect, useRef, useState } from "react";
import { api } from "../../lib/axios";

interface Categories {
  id: number;
  name: string;
  image: string;
}

export function CategoryFood() {
  const [categories, setCategories] = useState<Categories[]>([])
  const swiperRef = useRef<SwiperType | null>(null);
  const slidePerView = useResizeHandler()

  async function fetchCategories() {
    try {
      const response = await api.get('/categories')
      setCategories(response.data)
    } catch (error) {
      console.error('Erro ao buscar categorias: ', error)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div className="bg-[#fefaf1]">
      <div className="max-w-[1440px] mx-auto pt-20 pb-14">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 px-8 2xl:px-0">
          <h2 className="text-[43px] font-bold text-[#212121] text-center md:text-start">Escolha sua categoria</h2>
          <div className="flex items-center gap-4 pt-8 md:pt-0">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-[#faaa01] rounded-full text-white shadow-button-carousel transition-all duration-300 ease-in-out hover:bg-[#e89c00] hover:shadow-lg hover:scale-105"
            >
              <ChevronLeft className="size-14 mx-auto" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-[#faaa01] rounded-full text-white shadow-button-carousel transition-all duration-300 ease-in-out hover:bg-[#e89c00] hover:shadow-lg hover:scale-105"
            >
              <ChevronRight className="size-14 mx-auto" />
            </button>
          </div>
        </div>
        <Swiper
          slidesPerView={slidePerView}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {categories.map((item) => {
            return (
              <SwiperSlide key={item.id} className="flex justify-center">
                <CardCategoryFood
                  name={item.name}
                  image={item.image}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}