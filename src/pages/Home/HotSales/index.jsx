import { useKeenSlider } from "keen-slider/react";
import ProductCard from "../../../components/Card/ProductCard";
import { Icon } from "@iconify/react";

const HotSales = ({ products, addToCart }) => {
  // For Card Slider
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      mode: "snap",
      slides: { perView: 4, spacing: 20 },
      breakpoints: {
        "(max-width: 768px)": {
          slides: { perView: 2, spacing: 10 },
        },
      },
    },
    []
  );

  return (
    <>
      <div className="relative">
        <div className="flex justify-between items-end mb-6">
          {/* Title Section */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-6 bg-red-500 rounded"></span>
              <span className="text-red-500 font-semibold">Today's</span>
            </div>
            <h2 className="text-4xl font-bold text-black">Hot Sales</h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="bg-gray-200 hover:bg-gray-300 border rounded-full shadow p-3 transition-colors"
            >
              <Icon
                icon="material-symbols:arrow-back-ios"
                width="20"
                height="20"
                className="text-black"
              />
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="bg-gray-200 hover:bg-gray-300 border rounded-full shadow p-3 transition-colors"
            >
              <Icon
                icon="material-symbols:arrow-forward-ios"
                width="20"
                height="20"
                className="text-black"
              />
            </button>
          </div>
        </div>

        {/* Product Slider */}
        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {products.length > 0 ? (
              products.slice(0, 8).map((p, index) => (
                <div className="keen-slider__slide" key={index}>
                  <ProductCard
                    image={p.image}
                    name={p.name}
                    price={p.price}
                    oldPrice={p.oldPrice}
                    discount={p.discount || 10}
                    rating={p.rating || 4.5}
                    reviewCount={
                      p.reviewCount || Math.floor(Math.random() * 100) + 10
                    }
                    onAddToCart={() => addToCart(1)}
                  />
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No Products Available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HotSales;
