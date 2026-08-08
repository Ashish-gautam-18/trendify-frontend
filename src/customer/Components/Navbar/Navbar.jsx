import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Fragment>
      {/* Centralized minimalist navigation bar blueprint */}
      <nav className="bg-[#111827] text-white border-b border-gray-800 lg:px-20 px-2">
        <div className="mx-auto px-4">
          <div className="flex justify-between items-center">
            
            {/* Unified Trendyfy Brand Identity Marks */}
            <Link to="/" className="flex items-center py-6">
              <img
                src="/images/logos/logo.png"
                alt="Trendyfy Logo"
                className="h-8 w-auto mr-2 object-contain"
              />
              <span className="font-bold text-white text-lg tracking-tight">
                Trendyfy
              </span>
            </Link>

            {/* Standard Desktop Category Hub Links Loops */}
            <ul className="hidden md:flex items-center space-x-6">
              <li>
                <Link to="/men" className="font-medium text-gray-300 hover:text-white transition-colors">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/women" className="font-medium text-gray-300 hover:text-white transition-colors">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/kids" className="font-medium text-gray-300 hover:text-white transition-colors">
                  Kids
                </Link>
              </li>
              <li>
                <Link to="/home-living" className="font-medium text-gray-300 hover:text-white transition-colors">
                  Home & Living
                </Link>
              </li>
              <li>
                <Link to="/beauty" className="font-medium text-gray-300 hover:text-white transition-colors">
                  Beauty
                </Link>
              </li>
              <li>
                <Link to="/offers" className="font-medium text-amber-500 hover:text-amber-400 transition-colors">
                  Offers
                </Link>
              </li>
            </ul>

            {/* Central Product Search Gateway Bar */}
            <form className="hidden md:block flex-grow max-w-sm mx-4">
              <div className="relative w-full">
                <input
                  type="search"
                  className="block w-full bg-slate-900 border border-slate-700 rounded-md py-2 pl-10 pr-3 leading-5 placeholder-gray-500 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Search products..."
                />
                <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                  <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.716 14.966A7.25 7.25 0 1114.35 8.33a7.25 7.25 0 01-6.634 6.635zM15.5 9.75a5.75 5.75 0 10-11.5 0 5.75 5.75 0 0011.5 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </form>
            {/* Global Account and Cart Metadata Handlers */}
            <div className="flex items-center space-x-4 text-gray-300">
              <span className="cursor-pointer hover:text-white transition-colors">User</span>
              <span className="cursor-pointer hover:text-white transition-colors">Cart</span>
            </div>

            {/* Handheld Menu View Toggle Trigger */}
            <div className="md:hidden flex items-center">
              <button onClick={handleShowMenu} className="text-gray-400 hover:text-white p-2">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Responsive Overlay Mobile Navigation Links Drawer */}
      {showMenu && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <ul className="flex flex-col py-4 space-y-2 px-5">
            <li>
              <Link to="/men" className="block font-medium text-gray-300 hover:text-white py-2">
                Men
              </Link>
            </li>
            <li>
              <Link to="/women" className="block font-medium text-gray-300 hover:text-white py-2">
                Women
              </Link>
            </li>
            <li>
              <Link to="/kids" className="block font-medium text-gray-300 hover:text-white py-2">
                Kids
              </Link>
            </li>
            <li>
              <Link to="/home-living" className="block font-medium text-gray-300 hover:text-white py-2">
                Home & Living
              </Link>
            </li>
            <li>
              <Link to="/beauty" className="block font-medium text-gray-300 hover:text-white py-2">
                Beauty
              </Link>
            </li>
            <li>
              <Link to="/offers" className="block font-medium text-amber-500 hover:text-amber-400 py-2">
                Offers
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Fragment>
  );
}

export default Navbar;
