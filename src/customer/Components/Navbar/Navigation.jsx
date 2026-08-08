

import { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { navigation } from "../../../config/navigationMenu";
import AuthModal from "../Auth/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { deepPurple } from "@mui/material/colors";
import { getUser, logout } from "../../../Redux/Auth/Action";
import { getCart } from "../../../Redux/Customers/Cart/Action";

// Utility function to merge conditional Tailwind CSS classes
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Dynamic Redux state selectors
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  const jwt = localStorage.getItem("jwt");
  const location = useLocation();

  // Promotional announcement lines displayed inside the top text slider banner
  const topOffers = [
    "⚡ END OF SEASON SALE: UPTO 80% OFF ON PREMIUM COLLECTIONS",
    "🎉 USE CODE: TREND50 FOR FLAT EXTRA 10% OFF ON YOUR FIRST ORDER",
    "🚀 FREE EXPRESS DELIVERY ON ALL ORDERS ABOVE ₹499"
  ];

  // Bootstrap hook validating user authentication identity and tracking shopping bag count
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
      dispatch(getCart(jwt));
    }
  }, [jwt, dispatch]);

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpenAuthModal(true);
  };
  
  const handleClose = () => {
    setOpenAuthModal(false);
  };

  // Trigger dynamic programmatic routing queries matching categories
  const handleCategoryClick = (category, section, item, close) => {
    navigate(`/${category.id}/${section.id}/${item.id}`);
    close();
  };

  // Synchronize modal state managers with URL transitions
  useEffect(() => {
    if (auth.user) {
      handleClose();
    }
    
    if (location.pathname === "/login" || location.pathname === "/register") {
      setOpenAuthModal(true);
    } else {
      setOpenAuthModal(false);
    }
  }, [auth.user, location.pathname]);

  const handleLogout = () => {
    handleCloseUserMenu();
    dispatch(logout());
  };
  
  const handleMyOrderClick = () => {
    handleCloseUserMenu();
    auth.user?.role === "ROLE_ADMIN" ? navigate("/admin") : navigate("/account/order");
  };
  return (
    <div className="bg-white pb-10">
      {/* Handheld Device Responsive Sidebar Overlay Menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Categories Tab Processing Navigation Tree Loops */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium border-none"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>

                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative text-sm">
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">Shop now</p>
                            </div>
                          ))}
                        </div>
                        
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                              {section.name}
                            </p>
                            <ul role="list" aria-labelledby={`${category.id}-${section.id}-heading-mobile`} className="mt-6 flex flex-col space-y-6">
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  {/* Evaluated dynamic mapping variables without string wrapper quotes */}
                                  <p className="-m-2 block p-2 text-gray-500">
                                    {item.name}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                {/* Company Information Static Links mapping */}
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a href="/" className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </a>
                  </div>
                </div>

                {/* Brand Localization Settings */}
                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="/" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com"
                      alt="India Flag"
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">INR (₹)</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <header className="relative bg-white">
        {/* Dynamic Promotional Announcement Banner Slider Interface Hook */}
        {(() => {
          const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
          const [fade, setFade] = useState(true);

          useEffect(() => {
            const interval = setInterval(() => {
              setFade(false); 
              
              setTimeout(() => {
                setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % topOffers.length);
                setFade(true); 
              }, 500); 
              
            }, 4000); 

            return () => clearInterval(interval);
          }, []);

          return (
            <div className="flex h-10 items-center justify-center bg-[#0f172a] text-xs font-semibold text-white tracking-wider border-b border-slate-800 select-none">
              <p 
                className={`transition-all duration-500 ease-in-out ${
                  fade ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-1"
                }`}
              >
                {topOffers[currentOfferIndex]}
              </p>
            </div>
          );
        })()}

        <nav aria-label="Top" className="mx-auto">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center px-11">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Centralized Brand Trademark Identity Metadata Display */}
              <div className="ml-4 flex lg:ml-0 items-center">
                <Link to="/" className="flex items-center">
                  <span className="sr-only">Trendyfy Clothing</span>
                  <img
                    src="/images/logos/logo.png" 
                    alt="Trendyfy Store Logo"
                    className="h-9 w-auto mr-2 object-contain" 
                  />
                  <span className="font-bold text-xl text-gray-900 tracking-tight hidden sm:block">
                    Trendyfy
                  </span>
                </Link>
              </div>

              {/* Multi-tier Dropdown Desktop Flyout Megamenu Groups */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="flex h-full space-x-8 items-center">
                  
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex h-full items-center">
                      {({ open, close }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open ? "text-indigo-600 underline underline-offset-[8px] decoration-[2px] decoration-indigo-600" : "text-gray-700 hover:text-gray-800",
                                "relative z-10 flex items-center text-sm font-bold uppercase tracking-wider hover:underline hover:underline-offset-[8px] hover:decoration-[2px] hover:decoration-indigo-600 transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div key={item.name} className="group relative text-base sm:text-sm">
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                            {item.name}
                                          </a>
                                          <p aria-hidden="true" className="mt-1">Shop now</p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                            {section.name}
                                          </p>
                                          <ul role="list" aria-labelledby={`${section.name}-heading`} className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flex">
                                                <p
                                                  onClick={() => handleCategoryClick(category, section, item, close)}
                                                  className="cursor-pointer hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </p>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}
                  {/* Standard Static Navigation Links Map with Context Redirections and Alert Interceptors */}
                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.name === "Company" ? "/about" : page.href}
                      onClick={(e) => {
                        if (page.name === "Stores") {
                          e.preventDefault();
                          alert("Trendyfy Info: Trendyfy operates exclusively as a premium online-only e-commerce platform. We deliver globally directly to your doorstep, ensuring a seamless digital shopping experience without physical retail storefronts.");
                        }
                      }}
                      className="flex items-center text-sm font-bold text-gray-700 hover:text-indigo-600 tracking-wider uppercase hover:underline hover:underline-offset-[8px] hover:decoration-[2px] hover:decoration-indigo-600 transition-colors"
                    >
                      {page.name}
                    </Link>
                  ))}

                  {/* Placeholder Trigger Displaying the Incoming Seasonal Assortments Info */}
                  <button 
                    onClick={() => alert("Trendyfy Info: Our Kids Collection is coming soon! Currently, we are launching with our premium Men's and Women's wear. Stay tuned!")}
                    className="flex items-center text-sm font-bold text-gray-700 hover:text-indigo-600 tracking-wider uppercase hover:underline hover:underline-offset-[8px] hover:decoration-[2px] hover:decoration-indigo-600 transition-colors cursor-pointer"
                  >
                    Kids
                  </button>
                </div>
              </Popover.Group>

              {/* Utility Right Scaffold Bars (Authentication Profile, Search Gateway, Cart Tracking) */}
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {auth.user ? (
                    <div>
                      <Avatar
                        className="text-white"
                        onClick={handleUserClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        sx={{
                          bgcolor: deepPurple[500],
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {/* {auth.user?.firstName[0].toUpperCase()} */}
                        {auth.user?.firstName?.[0]?.toUpperCase() || "U"}
                      </Avatar>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleMyOrderClick}>
                          {auth.user?.role === "ROLE_ADMIN" ? "Admin Dashboard" : "My Orders"}
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <Button
                      onClick={handleOpen}
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Signin
                    </Button>
                  )}
                </div>

                {/* Product Discovery Search Anchor Trigger */}
                <div className="flex items-center lg:ml-6">
                  <p onClick={() => navigate("/products/search")} className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </p>
                </div>

                {/* Current Orders Pipeline Shopping Bag Meter */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Button
                    onClick={() => navigate("/cart")}
                    className="group -m-2 flex items-center p-2"
                  >
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {cart.cart?.totalItem}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <AuthModal handleClose={handleClose} open={openAuthModal} />
    </div>
  );
}
