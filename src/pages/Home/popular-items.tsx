import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardPopularItems } from "../../components/CardPopularItems";
import { SwiperSlide, Swiper } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { useEffect, useRef, useState } from "react";
import { useResizeHandler } from "../../utils/useResizeHandler";
import { api } from "../../lib/axios";

interface PopularItemsProps {
  id: number;
  name: string;
  restaurant: string;
  price: number;
  image: string;
}

export function PopularItems() {
  const [popularItems, setPopularItems] = useState<PopularItemsProps[]>([])
  const swiperRef = useRef<SwiperType | null>(null);
  const slidePerView = useResizeHandler()

  async function fetchPopularItems() {
    try {
      const response = await api.get('/popular')
      setPopularItems(response.data)
    } catch (error) {
      console.error('Erro ao buscar os itens populares: ', error)
    }
  }

  useEffect(() => {
    fetchPopularItems()
  }, [])

  return (
    <div className="relative">
      <h2 className="text-[43px] font-bold text-center mb-[88px]">Populares</h2>
      <div className="flex items-center justify-center gap-12 max-w-[1920px] mx-auto px-4">
        <button
          className="bg-[#faaa01] absolute top-24 left-1/3 sm:static rounded-full text-white shadow-button-carousel transition-all duration-300 ease-in-out hover:bg-[#e89c00] hover:shadow-lg hover:scale-105"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft className="size-14 mx-auto" />
        </button>

        <Swiper
          slidesPerView={slidePerView}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {popularItems.map((item) => {
            return (
              <SwiperSlide key={item.id} className="flex justify-center">
                <CardPopularItems
                  name={item.name}
                  image={item.image}
                  restaurant={item.restaurant}
                  price={item.price}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>

        <button
          className="bg-[#faaa01] absolute top-24 right-1/3 sm:static rounded-full text-white shadow-button-carousel transition-all duration-300 ease-in-out hover:bg-[#e89c00] hover:shadow-lg hover:scale-105"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight className="size-14 mx-auto" />
        </button>
      </div>
    </div>
  );
}
