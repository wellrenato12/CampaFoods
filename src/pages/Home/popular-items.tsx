import { CardPopularItems } from "../../components/CardPopularItems";

export function PopularItems() {
  return (
    <div className="my-20">
      <h2 className="text-[43px] font-bold text-center mb-[88px]">Populares</h2>
      <div className="grid grid-cols-5 justify-items-center">
        <CardPopularItems />
        <CardPopularItems />
        <CardPopularItems />
        <CardPopularItems />
        <CardPopularItems />
      </div>
    </div>
  )
}