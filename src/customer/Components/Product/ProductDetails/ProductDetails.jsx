import { useState, useEffect } from "react";
import { RadioGroup } from "@headlessui/react";
import { useNavigate, useParams } from "react-router-dom";
import ProductReviewCard from "./ProductReviewCard";
import { Box, Button, Grid, LinearProgress, Rating } from "@mui/material";
import HomeProductCard from "../../Home/HomeProductCard";
import { useDispatch, useSelector } from "react-redux";
import { findProductById } from "../../../../Redux/Customers/Product/Action";
import { addItemToCart } from "../../../../Redux/Customers/Cart/Action";
import { getAllReviews } from "../../../../Redux/Customers/Review/Action";

const productTemplateFallback = {
  name: "Basic Tee 6-Pack",
  price: "₹996",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
  ],
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details: "Standard premium retail specifications item overview.",
};

const reviewsFallback = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [, setActiveImage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const customersProduct = useSelector((state) => state.customersProduct);
  const { productId } = useParams();
  const jwt = localStorage.getItem("jwt");

  const handleSetActiveImage = (image) => {
    setActiveImage(image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Auth route interceptor check
    if (!jwt) {
      navigate("/login", { state: { openAuthModal: true } });
      return;
    }

    if (!selectedSize) {
      alert("Please select a size before adding to cart!");
      return;
    }

    const data = { productId, size: selectedSize.name };
    dispatch(addItemToCart({ data, jwt }));
    navigate("/cart");
  };

  useEffect(() => {
    const data = { productId: Number(productId), jwt };
    dispatch(findProductById(data));
    dispatch(getAllReviews(productId));

    // Auto reset scroll threshold window state on route activation
    window.scrollTo(0, 0);
  }, [productId, dispatch, jwt]);
  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {productTemplateFallback.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={"/"}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href="#"
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {customersProduct.product?.title || "Product Overview"}
              </a>
            </li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 px-4 pt-10">
          {/* Gallery Section */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem] border">
              <img
                src={customersProduct.product?.imageUrl}
                alt={customersProduct.product?.title || "Product Display"}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={`thumb-${index}`}
                  onClick={() =>
                    handleSetActiveImage(customersProduct.product?.imageUrl)
                  }
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4 border cursor-pointer hover:border-indigo-600"
                >
                  <img
                    src={customersProduct.product?.imageUrl}
                    alt="Product Thumbnail"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details Overview Block */}
          <div className="lg:col-span-1 mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div>
              <h1 className="text-lg lg:text-xl font-semibold tracking-tight text-gray-900">
                {customersProduct.product?.brand}
              </h1>
              <h1 className="text-lg lg:text-xl tracking-tight text-gray-900 opacity-60 pt-1">
                {customersProduct.product?.title}
              </h1>
            </div>

            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <div className="flex space-x-5 items-center text-lg lg:text-xl tracking-tight text-gray-900 mt-6">
                <p className="font-semibold">
                  ₹{customersProduct.product?.discountedPrice}
                </p>
                <p className="opacity-50 line-through">
                  ₹{customersProduct.product?.price}
                </p>
                <p className="text-green-600 font-semibold">
                  {customersProduct.product?.discountPersent}% Off
                </p>
              </div>

              <div className="mt-6">
                <div className="flex items-center space-x-3">
                  <Rating
                    name="read-only"
                    value={4.6}
                    precision={0.5}
                    readOnly
                  />
                  <p className="opacity-60">42807 Ratings</p>
                  <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {reviewsFallback.totalCount} reviews
                  </p>
                </div>
              </div>

              <form className="mt-10" onSubmit={handleSubmit}>
                <div className="mt-10">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-10">
                      {productTemplateFallback.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              active ? "ring-1 ring-indigo-500" : "",
                              "group relative flex items-center justify-center rounded-md border py-1 px-1 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6",
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md",
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <Button
                  variant="contained"
                  type="submit"
                  sx={{ padding: ".8rem 2rem", marginTop: "2rem" }}
                >
                  Add To Cart
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {customersProduct.product?.description}
                </p>
              </div>
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {productTemplateFallback.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    {customersProduct.product?.details ||
                      productTemplateFallback.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Reviews and Cross-Selling Grid Section */}
        <section className="px-4">
          <h1 className="font-semibold text-lg pb-4">
            Recent Review & Ratings
          </h1>
          <div className="border p-5 rounded-md">
            <Grid container spacing={7}>
              <Grid item xs={12} md={7}>
                <div className="space-y-5">
                  {customersProduct.product?.reviews?.map((item, i) => (
                    <ProductReviewCard key={item.id || i} item={item} />
                  ))}
                </div>
              </Grid>
              <Grid item xs={12} md={5}>
                <h1 className="text-xl font-semibold pb-1">Product Ratings</h1>
                <div className="flex items-center space-x-3 pb-10">
                  <Rating
                    name="read-only"
                    value={4.6}
                    precision={0.5}
                    readOnly
                  />
                  <p className="opacity-60">42807 Ratings</p>
                </div>
                {/* Visual Analytics Sliders */}
                {["Excellent", "Very Good", "Good", "Average", "Poor"].map(
                  (label, idx) => {
                    const barValues = [40, 30, 25, 21, 10];
                    const barColors = [
                      "success",
                      "success",
                      "warning",
                      "success",
                      "error",
                    ];
                    return (
                      <Box key={label} className="mb-2">
                        <Grid
                          container
                          justifyContent="center"
                          alignItems="center"
                          gap={2}
                        >
                          <Grid item xs={3}>
                            <p className="p-0 text-sm">{label}</p>
                          </Grid>
                          <Grid item xs={6}>
                            <LinearProgress
                              sx={{
                                bgcolor: "#d0d0d0",
                                borderRadius: 4,
                                height: 7,
                              }}
                              variant="determinate"
                              value={barValues[idx]}
                              color={barColors[idx]}
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <p className="opacity-50 text-sm p-1">19259</p>
                          </Grid>
                        </Grid>
                      </Box>
                    );
                  },
                )}
              </Grid>
            </Grid>
          </div>
        </section>

        {/* Recommendation Engine Grid Block */}
        <section className="pt-10 px-4 mb-10">
          <h1 className="py-5 text-xl font-bold">Similar Products</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {customersProduct?.products?.content
              ?.filter(
                (item) =>
                  item?.category?.name ===
                    customersProduct?.product?.category?.name &&
                  item?.id !== customersProduct?.product?.id,
              )
              ?.slice(0, 5)
              ?.map((item, index) => (
                <HomeProductCard key={item.id || index} product={item} />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
