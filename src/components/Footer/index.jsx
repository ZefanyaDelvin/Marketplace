import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {/* Exclusive */}
        <div>
          <h3 className="font-semibold mb-2">Exclusive</h3>
          <p>Subscribe</p>
          <p className="text-sm text-white">Get 10% off your first order</p>
          <div className="mt-2 flex border-white">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-2 py-1 text-white border-white"
            />
            <button className="bg-green-600 px-3 py-1 rounded-r">
              <Icon icon="ic:twotone-send" width="20" height="20" />
            </button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <p>Madison Park, Kiosk E-06, Jakarta Barat, Indonesia</p>
          <p>admin@groupjas.com</p>
          <p>+62 813 8808 4088</p>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold mb-2">Account</h3>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h3 className="font-semibold mb-2">Quick Link</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-2">Connect with us</h3>
          <div className="flex gap-3">
            <span>
              <Icon icon="basil:facebook-solid" width="20" height="20" />
            </span>
            <span>
              <Icon icon="mdi:twitter" width="20" height="20" />
            </span>
            <span>
              <Icon icon="mdi:instagram" width="20" height="20" />
            </span>
            <span>
              <Icon icon="mdi:linkedin" width="20" height="20" />
            </span>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-8 text-sm">
        © Copyright Rimel 2022. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
