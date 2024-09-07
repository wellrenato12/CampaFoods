import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardCategoryFood } from "../../components/CardCategoryFood";
import { useResizeHandler } from "../../utils/useResizeHandler";
import { SwiperSlide, Swiper } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { useRef } from "react";

export function CategoryFood() {
  const swiperRef = useRef<SwiperType | null>(null);
  const slidePerView = useResizeHandler()

  return (
    <div className="bg-[#fefaf1]">
      <div className="max-w-[1440px] mx-auto pt-20 pb-14">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 px-8 2xl:px-0">
          <h2 className="text-[43px] font-bold text-[#212121] text-center md:text-start">Escolha sua categoria</h2>
          <div className="flex items-center gap-4 pt-8 md:pt-0">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-[#faaa01] rounded-full text-white shadow-button-carousel"
            >
              <ChevronLeft className="size-14 mx-auto" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-[#faaa01] rounded-full text-white shadow-button-carousel"
            >
              <ChevronRight className="size-14 mx-auto" />
            </button>
          </div>
        </div>
        <Swiper
          slidesPerView={slidePerView}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <SwiperSlide className="flex justify-center">
            <CardCategoryFood />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <CardCategoryFood />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <CardCategoryFood />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <CardCategoryFood />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <CardCategoryFood />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <CardCategoryFood />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <CardCategoryFood />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <CardCategoryFood />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}