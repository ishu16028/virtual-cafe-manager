
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-30 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-semibold text-cafe-800">
                Virtual Café
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link
              to="/staff"
              className="text-cafe-600 hover:text-cafe-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Staff Portal
            </Link>
            <Link
              to="/admin"
              className="text-cafe-600 hover:text-cafe-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
