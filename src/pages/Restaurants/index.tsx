import { CardFeaturedRestaurants } from "../../components/CardFeaturedRestaurants";

export function Restaurants() {
  return (
    <div className="max-w-[1920px] mx-auto my-20">
      <h2 className="text-2xl font-bold mb-16">Lojas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center">
        <CardFeaturedRestaurants />
        <CardFeaturedRestaurants />
        <CardFeaturedRestaurants />
        <CardFeaturedRestaurants />
        <CardFeaturedRestaurants />
        <CardFeaturedRestaurants />
        <CardFeaturedRestaurants />
        <CardFeaturedRestaurants />
        <CardFeaturedRestaurants />
        <CardFeaturedRestaurants />
        <CardFeaturedRestaurants />
        <CardFeaturedRestaurants />
        <CardFeaturedRestaurants />
        <CardFeaturedRestaurants />
        <CardFeaturedRestaurants />
        <CardFeaturedRestaurants />
      </div>
    </div>
  )
}