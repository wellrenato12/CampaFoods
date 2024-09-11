interface CardCategoryFoodProps {
  name: string;
  image: string;
}

export function CardCategoryFood({ name, image }: CardCategoryFoodProps) {
  return (
    <button className="flex flex-col items-center gap-6">
      <img loading="lazy" className="size-52 object-cover rounded-full" src={image} alt="" />
      <h3 className="text-[#424242] text-[22px] font-bold">{name}</h3>
    </button>
  )
}