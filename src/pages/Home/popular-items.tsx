import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardPopularItems } from "../../components/CardPopularItems";
import { SwiperSlide, Swiper } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { useRef } from "react";
import { useResizeHandler } from "../../utils/useResizeHandler";

export function PopularItems() {
  const swiperRef = useRef<SwiperType | null>(null);
  const slidePerView = useResizeHandler()
  // const [slidePerView, setSlidePerView] = useState(4)

  // function handleResize() {
  //   if (window.innerWidth >= 1536) {
  //     setSlidePerView(4)
  //   } else if (window.innerWidth >= 1280) {
  //     setSlidePerView(3)
  //   } else if (window.innerWidth >= 768) {
  //     setSlidePerView(2)
  //   } else {
  //     setSlidePerView(1)
  //   }
  // }

  // useEffect(() => {
  //   handleResize()

  //   window.addEventListener("resize", handleResize)

  //   return () => {
  //     window.removeEventListener("resize", handleResize)
  //   }
  // }, [])

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
