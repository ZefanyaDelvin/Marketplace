import Footer from "../../components/Footer";
import Header from "../../components/Header";

const MainLayout = ({ children, cartItemCount, addToCart }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header cartItemCount={cartItemCount} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
