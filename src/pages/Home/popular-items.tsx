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
      console.log(response.data)
    } catch (error) {
      console.error('Erro ao buscar os itens populares: ', error)
    }
  }

  useEffect(() => {
    fetchPopularItems()
  }, [])

  useEffect(() => {
    console.log(popularItems)
  }, [popularItems])

  return (
    <div className="relative">
      <h2 className="text-[43px] font-bold text-center mb-[88px]">Populares</h2>
      <div className="flex items-center justify-center gap-12 max-w-[1920px] mx-auto px-4">
        <button
          className="absolute top-[86px] left-1/4 sm:static bg-[#faaa01] rounded-full text-white shadow-button-carousel"
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
          className="absolute top-[86px] right-1/4 sm:static bg-[#faaa01] rounded-full text-white shadow-button-carousel"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight className="size-14 mx-auto" />
        </button>
      </div>
    </div>
  );
}
