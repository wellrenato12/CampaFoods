import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardPopularItems } from "../../components/CardPopularItems";
import { SwiperSlide, Swiper } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { useEffect, useRef, useState } from "react";

export function PopularItems() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [slidePerView, setSlidePerView] = useState(4)

  function handleResize() {
    if (window.innerWidth >= 1536) {
      setSlidePerView(4)
    } else if (window.innerWidth >= 1280) {
      setSlidePerView(3)
    } else if (window.innerWidth >= 768) {
      setSlidePerView(2)
    } else {
      setSlidePerView(1)
    }
  }

  useEffect(() => {
    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <h2 className="text-[43px] font-bold text-center mb-[88px]">Populares</h2>
      <div className="flex items-center justify-center gap-12 max-w-[1920px] mx-auto px-4">
        <button
          className="bg-[#faaa01] rounded-full text-white shadow-button-carousel"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft className="size-14 mx-auto" />
        </button>

        {/* <div className="my-20 max-w-[1440px]"> */}

        <Swiper
          slidesPerView={slidePerView}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <SwiperSlide className="flex justify-center">
            <CardPopularItems />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <CardPopularItems />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <CardPopularItems />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <CardPopularItems />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <CardPopularItems />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <CardPopularItems />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <CardPopularItems />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <CardPopularItems />
          </SwiperSlide>
        </Swiper>
        {/* </div> */}

        <button
          className="bg-[#faaa01] rounded-full text-white shadow-button-carousel"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight className="size-14 mx-auto" />
        </button>
      </div>
    </>
  );
}
