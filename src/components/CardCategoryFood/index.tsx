import hamburguerCategory from '../../assets/category-food/hambuguer-category.jpg'

export function CardCategoryFood() {
  return (
    <button className="flex flex-col items-center gap-6">
      <img className="size-52 object-cover rounded-full" src={hamburguerCategory} alt="" />
      <h3 className="text-[#424242] text-[22px] font-bold">Hambúrguer</h3>
    </button>
  )
}