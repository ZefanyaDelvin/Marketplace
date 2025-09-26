import { Icon } from "@iconify/react";

const ProductCard = ({
  image,
  name,
  price,
  oldPrice,
  discount,
  rating,
  reviewCount,
  onAddToCart,
}) => {
  return (
    <div className="group bg-gray-100 rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:cursor-pointer relative">
      {/* Product Image */}
      <div className="relative bg-gray-100 rounded-lg p-6 mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-contain mx-auto"
        />

        {/* Discount */}
        <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-xs rounded">
          -{discount}%
        </span>

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-50">
            <Icon
              icon="mdi:heart-outline"
              width="20"
              height="20"
              className="text-gray-600"
            />
          </button>
          <button className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-50">
            <Icon
              icon="mdi:eye-outline"
              width="20"
              height="20"
              className="text-gray-600"
            />
          </button>
        </div>

        {/* Add To Cart Button */}
        <button
          className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={onAddToCart}
        >
          Add To Cart
        </button>
      </div>

      {/* Product Details */}
      <div className="px-1">
        <h3 className="font-semibold text-black mb-2">{name}</h3>

        {/* Price */}
        <div className="flex gap-3 items-center mb-2">
          <span className="text-red-500 font-bold">{price} IDR</span>
          <span className="line-through text-gray-400 text-sm">
            {oldPrice} IDR
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <Icon
              key={index}
              icon="material-symbols:star"
              width="16"
              height="16"
              className={
                index < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"
              }
            />
          ))}
          <span className="text-gray-500 text-sm ml-1">({reviewCount})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
