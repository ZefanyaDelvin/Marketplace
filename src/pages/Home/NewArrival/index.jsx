import React from "react";

const NewArrival = ({ products }) => {
  const featuredProducts = products?.slice(0, 4) || [];

  // If no products, show placeholder message
  if (!products || products.length === 0) {
    return (
      <div className="">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-6 bg-red-500 rounded"></span>
            <span className="text-red-500 font-semibold">Featured</span>
          </div>
          <h2 className="text-4xl font-bold text-black">New Arrival</h2>
        </div>
        <div className="text-center py-12">
          <p className="text-gray-500">No new arrivals available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-6 bg-red-500 rounded"></span>
          <span className="text-red-500 font-semibold">Featured</span>
        </div>
        <h2 className="text-4xl font-bold text-black">New Arrival</h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px]">
        {featuredProducts[0] && (
          <div className="col-span-2 row-span-2 bg-black rounded-lg relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/30"></div>
            <img
              src={featuredProducts[0].image || "/api/placeholder/400/500"}
              alt={featuredProducts[0].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">
                {featuredProducts[0].name}
              </h3>
              <p className="text-sm mb-4 opacity-90 max-w-xs">
                {featuredProducts[0].description ||
                  "Premium quality product for your needs"}
              </p>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-bold">
                  ${featuredProducts[0].price}
                </span>
                {featuredProducts[0].oldPrice && (
                  <span className="text-sm line-through opacity-70">
                    ${featuredProducts[0].oldPrice}
                  </span>
                )}
              </div>
              <button className="text-white hover:underline transition-all">
                Shop Now
              </button>
            </div>
          </div>
        )}

        {featuredProducts[1] && (
          <div className="col-span-2 row-span-1 bg-black rounded-lg relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            <img
              src={featuredProducts[1].image || "/api/placeholder/400/200"}
              alt={featuredProducts[1].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-6 text-white">
              <h3 className="text-xl font-bold mb-2">
                {featuredProducts[1].name}
              </h3>
              <p className="text-sm mb-3 opacity-90">
                {featuredProducts[1].description ||
                  "Quality product at great value"}
              </p>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-base font-bold">
                  ${featuredProducts[1].price}
                </span>
                {featuredProducts[1].oldPrice && (
                  <span className="text-sm line-through opacity-70">
                    ${featuredProducts[1].oldPrice}
                  </span>
                )}
              </div>
              <button className="text-white hover:underline transition-all">
                Shop Now
              </button>
            </div>
          </div>
        )}

        {featuredProducts[2] && (
          <div className="col-span-1 row-span-1 bg-black rounded-lg relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <img
              src={featuredProducts[2].image || "/api/placeholder/200/200"}
              alt={featuredProducts[2].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold mb-1">
                {featuredProducts[2].name}
              </h3>
              <p className="text-xs mb-2 opacity-90 line-clamp-2">
                {featuredProducts[2].description || "Great choice for you"}
              </p>
              <div className="flex items-center gap-1 mb-2">
                <span className="text-sm font-bold">
                  ${featuredProducts[2].price}
                </span>
                {featuredProducts[2].oldPrice && (
                  <span className="text-xs line-through opacity-70">
                    ${featuredProducts[2].oldPrice}
                  </span>
                )}
              </div>
              <button className="text-white hover:underline transition-all text-sm">
                Shop Now
              </button>
            </div>
          </div>
        )}

        {featuredProducts[3] && (
          <div className="col-span-1 row-span-1 bg-black rounded-lg relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <img
              src={featuredProducts[3].image || "/api/placeholder/200/200"}
              alt={featuredProducts[3].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold mb-1">
                {featuredProducts[3].name}
              </h3>
              <p className="text-xs mb-2 opacity-90 line-clamp-2">
                {featuredProducts[3].description || "Perfect for your needs"}
              </p>
              <div className="flex items-center gap-1 mb-2">
                <span className="text-sm font-bold">
                  ${featuredProducts[3].price}
                </span>
                {featuredProducts[3].oldPrice && (
                  <span className="text-xs line-through opacity-70">
                    ${featuredProducts[3].oldPrice}
                  </span>
                )}
              </div>
              <button className="text-white hover:underline transition-all text-sm">
                Shop Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewArrival;
