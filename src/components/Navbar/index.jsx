import { useState } from "react";
import Button from "../Button";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router";

const Navbar = ({ cartItemCount }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const location = useLocation();

  const isActiveLink = (path) => {
    if (path === "/" && location.pathname === "/") {
      return true;
    }
    if (path !== "/" && location.pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  // Get Link ClassName (Styles)
  const getLinkClasses = (path) => {
    const baseClasses = "hover:underline transition-all duration-200";
    const activeClasses = "underline font-medium";

    return isActiveLink(path) ? `${baseClasses} ${activeClasses}` : baseClasses;
  };

  return (
    <nav className="flex justify-between items-center px-20 py-4 text-black">
      <h1 className="text-2xl font-bold text-black">Qonnectiq</h1>

      {/* Navigation */}
      <ul className="flex gap-6">
        <li>
          <Link to="/" className={getLinkClasses("/")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/category" className={getLinkClasses("/category")}>
            Category
          </Link>
        </li>
        <li>
          <Link to="/about" className={getLinkClasses("/about")}>
            About
          </Link>
        </li>
        {!isLoggedIn && (
          <li>
            <Link to="/order" className={getLinkClasses("/order")}>
              Order
            </Link>
          </li>
        )}
      </ul>

      {/* Search Bar and Icons */}
      <div className="flex gap-4 items-center">
        {/* Search Bar */}
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="border rounded px-4 py-2 w-64"
          />
          <button className="px-3 py-1 rounded hover:bg-gray-100 transition-colors">
            <Icon
              icon="material-symbols:search-rounded"
              width="24"
              height="24"
              className="text-black"
            />
          </button>
        </div>

        {/* User and Cart Icons (shown when logged in) */}
        {isLoggedIn && (
          <div className="flex gap-3 items-center">
            {/* Cart Icon with Badge */}
            <div className="relative">
              <button className="p-2 hover:bg-gray-100">
                <Icon
                  icon="mdi:cart-outline"
                  width="24"
                  height="24"
                  className="text-black"
                />
              </button>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>

            {/* User Icon */}
            <button className="p-2 hover:bg-gray-100">
              <Icon
                icon="mdi:account-circle-outline"
                width="24"
                height="24"
                className="text-black"
              />
            </button>
          </div>
        )}

        {/* Sign up link (shown when not logged in) */}
        {!isLoggedIn && (
          <a href="#" className="hover:underline">
            Sign up
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
