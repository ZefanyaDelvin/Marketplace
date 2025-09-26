import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import CategoryCarousel from "../../components/Carousel";
import BestSellingProduct from "./BestSellingProduct";
import Categories from "./Categories";
import HotSales from "./HotSales";
import CategoriesBanner from "./CategoriesBanner";
import OurProducts from "./OurProducts";
import NewArrival from "./NewArrival";
import Services from "./Services";

const Home = () => {
  const [products, setProducts] = useState([]);

  const [cartItemCount, setCartItemCount] = useState(0);

  const addToCart = (quantity = 1) => {
    setCartItemCount((prev) => prev + quantity);
  };

  // Fetch Product from random API (Later must be replaced with real API or using redux)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://jsonfakery.com/products/random/12");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <MainLayout cartItemCount={cartItemCount}>
        <div className="px-6 py-10">
          {/* Banner */}
          <div className="px-10 py-4">
            <CategoryCarousel />
          </div>

          {/* Hot Sales */}
          <div className="justify-center items-center px-10 py-4">
            {products.length > 0 && (
              <HotSales products={products} addToCart={addToCart} />
            )}
            <div className="flex justify-center">
              <button className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded mt-4">
                View All Products
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="justify-center items-center px-10 py-4">
            <Categories />
          </div>

          {/* Best Selling Products */}
          <div className="justify-center items-center mt-10 px-10 py-4">
            {products.length > 0 && <BestSellingProduct products={products} />}
          </div>

          {/* Categories Banner */}
          <div className="justify-center items-center mt-10 p-4 rounded-lg px-10 py-4">
            <CategoriesBanner />
          </div>

          {/* Our Products */}
          <div className="justify-center items-center mt-10 px-10 py-4">
            <OurProducts products={products} addToCart={addToCart} />
            <div className="flex justify-center">
              <button className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded mt-4">
                View All Products
              </button>
            </div>
          </div>

          {/* New Arrival */}
          <div className="justify-center items-center mt-10 px-10 py-4">
            <NewArrival products={products} />
          </div>

          {/* Services */}
          <div className="justify-center items-center mt-10 px-10 py-4">
            <Services />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
