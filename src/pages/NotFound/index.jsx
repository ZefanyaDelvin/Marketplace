import { Link } from "react-router";
import MainLayout from "../../layouts/MainLayout";

const NotFound = () => {
  <MainLayout>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-black mb-8">404 Not Found</h1>

        <p className="text-lg text-gray-700 mb-12 max-w-md mx-auto">
          Your visited page not found. You may go home page.
        </p>

        <Link
          to="/"
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded transition-colors duration-200"
        >
          Back to home page
        </Link>
      </div>
    </div>
  </MainLayout>;
};

export default NotFound;
