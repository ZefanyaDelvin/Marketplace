import { useKeenSlider } from "keen-slider/react";
import ProductCard from "../../../components/Card/ProductCard";
import { Icon } from "@iconify/react";

const OurProducts = (products) => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      mode: "snap",
      slides: { perView: 1, spacing: 0 },
      breakpoints: {
        "(max-width: 768px)": {
          slides: { perView: 1, spacing: 0 },
        },
      },
    },
    []
  );

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const productChunks = chunkArray(products.products || [], 6);
  const showSlider = products.products && products.products.length > 6;

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
      </div>

      <div className="relative">
        {showSlider ? (
          <>
            <div ref={sliderRef} className="keen-slider">
              {productChunks.map((chunk, chunkIndex) => (
                <div className="keen-slider__slide" key={chunkIndex}>
                  <div className="grid grid-cols-3 grid-rows-2 gap-4 md:gap-6">
                    {chunk.map((p, index) => (
                      <div key={index}>
                        <ProductCard
                          image={p.image}
                          name={p.name}
                          price={p.price}
                          oldPrice={p.oldPrice || p.price + 10000}
                          discount={p.discount || 10}
                          rating={p.rating || 4.5}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows Button For Navigate Slider */}
            <button
              onClick={() => instanceRef.current?.prev()}
              className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-gray-200 border rounded-full shadow p-2"
            >
              <Icon
                icon="material-symbols:arrow-back-ios"
                className="text-black"
              />
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-gray-200 border rounded-full shadow p-2"
            >
              <Icon
                icon="material-symbols:arrow-forward-ios"
                className="text-black"
              />
            </button>
          </>
        ) : (
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {products.products && products.products.length > 0 ? (
              products.products.slice(0, 6).map((p, index) => (
                <div key={index} className={index >= 3 ? "mt-4" : ""}>
                  <ProductCard
                    image={p.image}
                    name={p.name}
                    price={p.price}
                    oldPrice={p.oldPrice || p.price + 10000}
                    discount={p.discount || 10}
                    rating={p.rating || 4.5}
                  />
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center">
                <p>No Products</p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default OurProducts;
