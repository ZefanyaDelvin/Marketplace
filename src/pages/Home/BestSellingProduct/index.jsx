import ProductCard from "../../../components/Card/ProductCard";

const BestSellingProduct = (products) => {
  return (
    <>
      <div className="items-center gap-3 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-6 bg-red-500 rounded"></span>
          <span className="text-red-500 font-semibold">This Month</span>
        </div>
        <h2 className="text-4xl font-bold text-black">Best Selling Products</h2>
      </div>

      <div className="flex justify-end">
        <button className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded mt-4">
          View All
        </button>
      </div>

      {products.products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.products.slice(0, 4).map((p, index) => (
            <ProductCard
              key={index}
              image={p.image}
              name={p.name}
              price={p.price}
              oldPrice={p.oldPrice || p.price + 10000}
              discount={p.discount || 10}
              rating={p.rating || 4.5}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No Products</p>
      )}
    </>
  );
};

export default BestSellingProduct;
