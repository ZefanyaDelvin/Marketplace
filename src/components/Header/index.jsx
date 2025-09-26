import { Icon } from "@iconify/react";
import Button from "../Button";
import Navbar from "../Navbar";

const Header = ({ cartItemCount }) => {
  return (
    <header className="border-b-gray-400 border ">
      {/* Announcement */}
      <div className="bg-black text-white text-sm flex justify-between px-6 py-2">
        <span></span>
        <span className="flex gap-1">
          <p className="mr-3">
            Summer Sale for Some Vegetables, Fruits and Meats - OFF 50%!{" "}
          </p>
          <a href="#" className="hover:underline">
            <b>Shop Now</b>
          </a>
        </span>
        <span className="inline-flex items-center gap-1">
          English
          <Icon icon="nrk:arrow-dropdown" width="24" height="24" />
        </span>
      </div>
      {/* Navbar */}
      <Navbar cartItemCount={cartItemCount} />
    </header>
  );
};

export default Header;
