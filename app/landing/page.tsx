"use client";

import Image from "next/image";
import ProtectedNavbar from "@/components/layout/ProtectedNavbar";
import NewsletterFooter from "@/components/shared/NewsletterFooter";

export default function LandingPage() {
  const categories = [
    { name: "Fish Fillets", image: "/fish-fillets.png" },
    { name: "Whole Fish", image: "/whole-fish.png" },
    { name: "Shrimp & Prawns", image: "/shrimp-prawns.png" },
    { name: "Lobster & Crab", image: "/lobster-crab.png" },
    { name: "Squid & Octopus", image: "/squid-octopus.png" },
    { name: "Shellfish & Scallops", image: "/shellfish-scallops.png" },
    { name: "Premium Seafood", image: "/premium-seafood.png" },
  ];

  const seafoodTrends = [
    { name: "Salmon Fillets", image: "/salmon-fillets.png" },
    { name: "Tuna Fillets", image: "/tuna-fillets.png" },
    { name: "Barramundi Fillets", image: "/barramundi-fillets.png" },
    { name: "Cod Fillets", image: "/cod-fillets.png" },
    { name: "Snapper Fillets", image: "/snapper-fillets.png" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ProtectedNavbar />

      {/* Main Content */}
      <div className="mx-auto px-4 lg:px-6 py-4 lg:py-8 bg-white">
        {/* Hero Banner */}
        <div
          className="relative bg-linear-to-b from-[#23429B] to-[#C52129] rounded-3xl overflow-hidden mb-8 lg:mb-12"
          style={{ height: "480px" }}
        >
          <div className="absolute inset-0">
            {/* Left Content */}
            <div
              className="absolute left-6 lg:left-12 text-white z-10"
              style={{ width: "306px", top: "60px" }}
            >
              <h1
                className="font-semibold"
                style={{
                  fontSize: "48px",
                  lineHeight: "110%",
                  letterSpacing: "0%",
                  fontFamily: "Inter Tight, Inter, sans-serif",
                  marginBottom: "89px",
                }}
              >
                Seafood
                <br />
                shopping is
                <br />
                quicker than
                <br />
                ever!
              </h1>
              <p className="text-sm" style={{ marginBottom: "12px" }}>
                Check Information Now!
              </p>
              <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-5 py-2.5 rounded-full backdrop-blur-sm transition-all border border-white/30">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                Discover more
              </button>
            </div>

            {/* Smoky Effect */}
            <div
              className="absolute z-2"
              style={{
                width: "373px",
                height: "641px",
                top: "-77px",
                left: "680px",
                background:
                  "radial-gradient(ellipse at center, #BFC8FB 0%, transparent 70%)",
                opacity: 1,
              }}
            ></div>

            {/* Blue Background Under Bowl */}
            <div
              className="absolute z-3"
              style={{
                width: "1021px",
                height: "346.64px",
                top: "131px",
                left: "435px",
                background:
                  "radial-gradient(ellipse at center, #203C8D 30%, transparent 70%)",
                opacity: 0.8,
                borderRadius: "50%",
              }}
            ></div>

            {/* Right Image - Seafood Bowl */}
            <div
              className="absolute right-0 bottom-0 overflow-hidden z-5"
              style={{ left: "420px", height: "450px" }}
            >
              <Image
                src="/hero.png"
                alt="Seafood Bowl"
                width={924}
                height={537}
                priority
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            <button className="w-2.5 h-2.5 rounded-full bg-white"></button>
            <button className="w-2.5 h-2.5 rounded-full bg-white/50"></button>
            <button className="w-2.5 h-2.5 rounded-full bg-white/50"></button>
          </div>
        </div>

        {/* Browse Categories */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Browse categories
            </h2>
            <a
              href="#"
              className="hidden lg:flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              View all
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl p-4 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="aspect-square mb-3 flex items-center justify-center relative">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-sm font-medium text-gray-700">
                  {category.name}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile View All Button */}
          <div className="lg:hidden mt-4 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              View all
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Today's Flash Deals - Full Width Red Section */}
      <div className="bg-[#C52129] py-8">
        <div className="mx-auto px-4 lg:px-6">
          <div className="flex flex-col gap-4 mb-6 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Today's flash deals
            </h2>
            <div className="flex gap-2 overflow-x-auto">
              <div className="bg-white rounded-lg px-3 py-2 text-center min-w-12.5 lg:min-w-15 lg:px-4">
                <span className="text-xl lg:text-2xl font-bold text-gray-900">00</span>
              </div>
              <div className="bg-white rounded-lg px-3 py-2 text-center min-w-12.5 lg:min-w-15 lg:px-4">
                <span className="text-xl lg:text-2xl font-bold text-gray-900">02</span>
              </div>
              <div className="bg-white rounded-lg px-3 py-2 text-center min-w-12.5 lg:min-w-15 lg:px-4">
                <span className="text-xl lg:text-2xl font-bold text-gray-900">45</span>
              </div>
              <div className="bg-white rounded-lg px-3 py-2 text-center min-w-12.5 lg:min-w-15 lg:px-4">
                <span className="text-xl lg:text-2xl font-bold text-gray-900">16</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product 1 - Crab */}
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="relative">
                <div className="absolute top-3 left-3 bg-[#C52129] text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                  24% OFF
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 z-10">
                  <svg
                    className="w-5 h-5 text-red-500 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                  </svg>
                </button>
                <div className="bg-gray-100 aspect-square flex items-center justify-center p-6">
                  <Image
                    src="/crab.png"
                    alt="Crab"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  Crab Delights (2nd Edition)
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    4.55 (1,203 sold)
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-xs text-gray-500">VIP Price</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-gray-900">
                    RM189.00
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    RM249.00
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-xs text-gray-500">Retail Price</span>
                  <span className="text-sm text-gray-600">RM198.00</span>
                </div>
                <button className="w-full mt-3 bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 rounded-lg font-medium">
                  +
                </button>
              </div>
            </div>

            {/* Product 2 - Octopus */}
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="relative">
                <div className="absolute top-3 left-3 bg-[#C52129] text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                  20% OFF
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 z-10">
                  <svg
                    className="w-5 h-5 text-red-500 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                  </svg>
                </button>
                <div className="bg-gray-100 aspect-square flex items-center justify-center p-6">
                  <Image
                    src="/octopus.png"
                    alt="Octopus"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  OCTOPUS DELIGHT
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.6 (1,025)</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-gray-900">
                    RM72.00
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    RM95.00
                  </span>
                </div>
                <button className="w-full mt-3 bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 rounded-lg font-medium">
                  +
                </button>
              </div>
            </div>

            {/* Product 3 - Fish */}
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="relative">
                <div className="absolute top-3 left-3 bg-[#C52129] text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                  23% OFF
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 z-10">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <div className="bg-gray-100 aspect-square flex items-center justify-center p-6">
                  <Image
                    src="/fish.png"
                    alt="Fish"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Snapper Seafood Delight 2025 - Fresh Catch
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.7 (876)</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-gray-900">
                    RM399.00
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    RM519.00
                  </span>
                </div>
                <button className="w-full mt-3 bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 rounded-lg font-medium">
                  +
                </button>
              </div>
            </div>

            {/* Product 4 - Tuna */}
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="relative">
                <div className="absolute top-3 left-3 bg-[#C52129] text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                  21% OFF
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 z-10">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <div className="bg-gray-100 aspect-square flex items-center justify-center p-6">
                  <Image
                    src="/salmon&fish.png"
                    alt="Tuna"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Tuna Seafood
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.55 (659)</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-gray-900">
                    RM189.00
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    RM239.00
                  </span>
                </div>
                <button className="w-full mt-3 bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 rounded-lg font-medium">
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-end gap-2 mt-6">
            <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Products on Trend This Month - Blue Section */}
      <div className="bg-[#23429B] py-8 lg:py-12">
        <div className="mx-auto px-4 lg:px-6">
          <div className="flex flex-col gap-4 mb-6 lg:flex-row lg:items-center lg:justify-between lg:mb-8">
            <h2 className="text-2xl lg:text-4xl font-bold text-white">
              Products on trend this month
            </h2>
            <div className="hidden lg:flex gap-2">
              <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Product 1 */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="relative">
                <button className="absolute top-3 left-3 w-10 h-10 bg-[#C52129] rounded-full flex items-center justify-center z-10">
                  <svg
                    className="w-6 h-6 text-white fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                  </svg>
                </button>
                <button className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 z-10">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <div className="bg-gray-100 aspect-square flex items-center justify-center p-8">
                  <Image
                    src="/crab.png"
                    alt="Crab"
                    width={250}
                    height={250}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-4">
                <div className="flex gap-2 mb-3">
                  <span className="bg-[#23429B] text-white text-xs px-3 py-1 rounded-full">
                    Trends
                  </span>
                  <span className="text-xs text-gray-600">#crab</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Crab Delights (2nd Edition)
                </h3>
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.5 (171 sold)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#23429B]">
                    RM209.00
                  </span>
                  <button className="w-10 h-10 bg-[#23429B] rounded-full flex items-center justify-center hover:bg-[#1a3278]">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="relative">
                <div className="absolute top-3 left-3 bg-[#C52129] text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                  18% OFF
                </div>
                <button className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 z-10">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <div className="bg-gray-100 aspect-square flex items-center justify-center p-8">
                  <Image
                    src="/octopus.png"
                    alt="Octopus"
                    width={250}
                    height={250}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-4">
                <div className="flex gap-2 mb-3">
                  <span className="bg-[#23429B] text-white text-xs px-3 py-1 rounded-full">
                    Trends
                  </span>
                  <span className="text-xs text-gray-600">#premium</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  OCTOPUS DELIGHT
                </h3>
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    4.3 (2,463 sold)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#23429B]">
                    RM174.99
                  </span>
                  <button className="w-10 h-10 bg-[#23429B] rounded-full flex items-center justify-center hover:bg-[#1a3278]">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="relative">
                <button className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 z-10">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <div className="bg-gray-100 aspect-square flex items-center justify-center p-8">
                  <Image
                    src="/fish.png"
                    alt="Snapper"
                    width={250}
                    height={250}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-4">
                <div className="flex gap-2 mb-3">
                  <span className="bg-[#23429B] text-white text-xs px-3 py-1 rounded-full">
                    Trends
                  </span>
                  <span className="text-xs text-gray-600">#wholefish</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Snapper Seafood Delight 2025 - Fresh Catch
                </h3>
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.2 (121 sold)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-[#23429B]">
                      RM450.00
                    </span>
                    <span className="text-sm text-gray-400 line-through ml-2">
                      RM549.00
                    </span>
                  </div>
                  <button className="w-10 h-10 bg-[#23429B] rounded-full flex items-center justify-center hover:bg-[#1a3278]">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="relative">
                <button className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 z-10">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <div className="bg-gray-100 aspect-square flex items-center justify-center p-8">
                  <Image
                    src="/salmon&fish.png"
                    alt="Tuna"
                    width={250}
                    height={250}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-4">
                <div className="flex gap-2 mb-3">
                  <span className="bg-[#23429B] text-white text-xs px-3 py-1 rounded-full">
                    Trends
                  </span>
                  <span className="text-xs text-gray-600">#wholefish</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Tuna Seafood
                </h3>
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    4.7 (1,146 sold)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#23429B]">
                    RM8.88
                  </span>
                  <button className="w-10 h-10 bg-[#23429B] rounded-full flex items-center justify-center hover:bg-[#1a3278]">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Product 5 */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="relative">
                <div className="absolute top-3 left-3 bg-[#C52129] text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                  85% OFF
                </div>
                <button className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 z-10">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <div className="bg-gray-100 aspect-square flex items-center justify-center p-8">
                  <Image
                    src="/shrimp.png"
                    alt="Shrimp"
                    width={250}
                    height={250}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-4">
                <div className="flex gap-2 mb-3">
                  <span className="bg-[#23429B] text-white text-xs px-3 py-1 rounded-full">
                    Trends
                  </span>
                  <span className="text-xs text-gray-600">#shrimp</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Shrimp</h3>
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.8 (892 sold)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-[#23429B]">
                      RM23.99
                    </span>
                    <span className="text-sm text-gray-400 line-through ml-2">
                      RM159.93
                    </span>
                  </div>
                  <button className="w-10 h-10 bg-[#23429B] rounded-full flex items-center justify-center hover:bg-[#1a3278]">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation - Bottom */}
          <div className="flex lg:hidden justify-end gap-2 mt-6">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Top Products by Categories */}
      <div className="bg-gray-50 py-8 lg:py-12">
        <div className="mx-auto px-4 lg:px-6">
          <div className="flex flex-col gap-3 mb-6 lg:flex-row lg:items-center lg:justify-between lg:mb-8">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
              Top products by categories
            </h2>
            <a
              href="#"
              className="hidden lg:flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              View all
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Side - Promo Card */}
            <div className="bg-linear-to-b from-[#C52129] to-[#203C8D] rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-white relative overflow-hidden min-h-75 lg:min-h-0">
              <div className="relative z-10">
                <div className="inline-block bg-[#23429B] px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg text-[10px] lg:text-xs font-medium mb-3 lg:mb-4">
                  FRESH SEAFOOD, EXCLUSIVE OFFERS
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-2 lg:mb-3 leading-tight">
                  Enjoy up to 40%
                  <br />
                  OFF on our
                  <br />
                  selection of fresh
                  <br />
                  seafood!
                </h3>
                <p className="text-xs lg:text-sm mb-3 lg:mb-4 opacity-90">
                  Explore the flavors that catch attention
                  <br />
                  before the deal disappears!
                </p>
                <button className="bg-white text-[#23429B] px-4 lg:px-5 py-2 lg:py-2.5 rounded-full text-xs lg:text-sm font-semibold hover:bg-gray-100 flex items-center gap-2">
                  View all
                  <svg
                    className="w-3 h-3 lg:w-4 lg:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Blue Elliptical Rings Behind Lobster - Desktop */}
              <div
                className="hidden lg:block absolute rounded-full"
                style={{
                  width: "600px",
                  height: "600px",
                  bottom: "-400px",
                  right: "-200px",
                  border: "60px solid #192F6E",
                  zIndex: 1,
                }}
              ></div>
              <div
                className="hidden lg:block absolute rounded-full"
                style={{
                  width: "420px",
                  height: "420px",
                  bottom: "-315px",
                  right: "-120px",
                  border: "50px solid #192F6E",
                  zIndex: 1,
                }}
              ></div>

              {/* Blue Elliptical Rings Behind Lobster - Mobile */}
              <div
                className="lg:hidden absolute rounded-full"
                style={{
                  width: "300px",
                  height: "300px",
                  bottom: "-200px",
                  right: "-100px",
                  border: "30px solid #192F6E",
                  zIndex: 1,
                }}
              ></div>
              <div
                className="lg:hidden absolute rounded-full"
                style={{
                  width: "210px",
                  height: "210px",
                  bottom: "-157px",
                  right: "-60px",
                  border: "25px solid #192F6E",
                  zIndex: 1,
                }}
              ></div>

              {/* Lobster Image - Desktop */}
              <div
                className="hidden lg:block absolute"
                style={{
                  width: "400px",
                  height: "400px",
                  bottom: "-100px",
                  right: "-60px",
                  zIndex: 2,
                }}
              >
                <Image
                  src="/lobster-bg-removed.png"
                  alt="Lobster"
                  width={400}
                  height={400}
                  className="object-contain"
                  style={{ transform: "rotate(45deg)", opacity: 1 }}
                />
              </div>

              {/* Lobster Image - Mobile */}
              <div
                className="lg:hidden absolute"
                style={{
                  width: "200px",
                  height: "200px",
                  bottom: "-50px",
                  right: "-30px",
                  zIndex: 2,
                }}
              >
                <Image
                  src="/lobster-bg-removed.png"
                  alt="Lobster"
                  width={200}
                  height={200}
                  className="object-contain"
                  style={{ transform: "rotate(45deg)", opacity: 1 }}
                />
              </div>
            </div>

            {/* Right Side - Product Grid */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  10 tops seafood
                </h3>
                <div className="flex gap-2">
                  <button className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-100">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-100">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Product 1 - Crab */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <div className="absolute top-3 left-3 bg-[#C52129] text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                      24% OFF
                    </div>
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 z-10">
                      <svg
                        className="w-5 h-5 text-red-500 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                    </button>
                    <div className="bg-gray-50 aspect-square flex items-center justify-center p-6">
                      <Image
                        src="/crab.png"
                        alt="Crab"
                        width={150}
                        height={150}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">
                      Crab Delights (2nd Edition)
                    </h4>
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-3 h-3 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-600">
                        4.55 (1,203 sold)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-gray-900">
                          RM189.00
                        </span>
                        <span className="text-xs text-gray-400 line-through ml-1">
                          RM249.00
                        </span>
                      </div>
                      <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product 2 - Fish */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <div className="absolute top-3 left-3 bg-[#C52129] text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                      18% OFF
                    </div>
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 z-10">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                    <div className="bg-gray-50 aspect-square flex items-center justify-center p-6">
                      <Image
                        src="/fish.png"
                        alt="Snapper"
                        width={150}
                        height={150}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">
                      Snapper Seafood Delight 2025 - Fresh Catch
                    </h4>
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-3 h-3 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-600">
                        4.2 (121 sold)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-gray-900">
                          RM450.00
                        </span>
                        <span className="text-xs text-gray-400 line-through ml-1">
                          RM549.00
                        </span>
                      </div>
                      <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product 3 - Octopus */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <div className="absolute top-3 left-3 bg-[#C52129] text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                      20% OFF
                    </div>
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 z-10">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                    <div className="bg-gray-50 aspect-square flex items-center justify-center p-6">
                      <Image
                        src="/octopus.png"
                        alt="Octopus"
                        width={150}
                        height={150}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">
                      OCTOPUS DELIGHT
                    </h4>
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-3 h-3 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-600">
                        4.6 (1,025 sold)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-gray-900">
                          RM72.00
                        </span>
                        <span className="text-xs text-gray-400 line-through ml-1">
                          RM90.00
                        </span>
                      </div>
                      <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Check out the seafood buyer Section */}
      <div className="mx-auto px-4 lg:px-6 py-8 lg:py-12">
        <div className="flex flex-col gap-3 mb-6 lg:flex-row lg:items-center lg:justify-between lg:mb-6 bg-[#F9F9F9]">
          <h2 className="text-xl lg:text-3xl font-bold text-gray-900">
            Check out the seafood buyer, then dive into purchasing online.
          </h2>
          <div className="hidden lg:flex gap-2">
            <button className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-100">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-100">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Video Card 1 - Crab */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div className="relative aspect-4/3 bg-gray-900 group cursor-pointer">
              <Image
                src="/crab-video-thumbnail.jpg"
                alt="Crab Delights"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-gray-900 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span className="text-white text-sm font-medium">
                  03:45 / 07:40
                </span>
              </div>
              <div className="absolute bottom-3 right-3 flex gap-2">
                <button className="w-8 h-8 bg-white bg-opacity-80 rounded-lg flex items-center justify-center hover:bg-opacity-100">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                    />
                  </svg>
                </button>
                <button className="w-8 h-8 bg-white bg-opacity-80 rounded-lg flex items-center justify-center hover:bg-opacity-100">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
              <div className="absolute top-3 left-3 text-white text-sm">
                @selina.sabrine
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Crab Delights (2nd Edition)
              </h4>
              <div className="flex items-center gap-1 mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg
                    className="w-4 h-4 fill-current text-gray-300"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600">4.55 (148 sxd)</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/crab.png"
                  alt="Crab"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="text-xl font-bold text-gray-900">
                  RM199.99
                </span>
              </div>
            </div>
          </div>

          {/* Video Card 2 - Squid */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div className="relative aspect-4/3 bg-gray-900 group cursor-pointer">
              <Image
                src="/squid-video-thumbnail.jpg"
                alt="Squid Premium"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-gray-900 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span className="text-white text-sm font-medium">
                  00:00 / 05:40
                </span>
              </div>
              <div className="absolute bottom-3 right-3 flex gap-2">
                <button className="w-8 h-8 bg-white bg-opacity-80 rounded-lg flex items-center justify-center hover:bg-opacity-100">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                    />
                  </svg>
                </button>
                <button className="w-8 h-8 bg-white bg-opacity-80 rounded-lg flex items-center justify-center hover:bg-opacity-100">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
              <div className="absolute top-3 left-3 text-white text-sm">
                @john_henry123
              </div>
              <button className="absolute top-3 right-3 w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100">
                <svg
                  className="w-5 h-5 text-red-500 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Squid Premium 12,3kg
              </h4>
              <div className="flex items-center gap-1 mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg className="w-4 h-4" viewBox="0 0 20 20">
                    <defs>
                      <linearGradient id="half-star">
                        <stop offset="50%" stopColor="#FBBF24" />
                        <stop offset="50%" stopColor="#D1D5DB" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#half-star)"
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-600">4.5 (171)</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/squid.png"
                  alt="Squid"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="text-xl font-bold text-gray-900">
                  RM910.00
                </span>
              </div>
            </div>
          </div>

          {/* Video Card 3 - Tuna */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div className="relative aspect-4/3 bg-gray-900 group cursor-pointer">
              <Image
                src="/tuna-video-thumbnail.jpg"
                alt="Tuna Sear"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-gray-900 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span className="text-white text-sm font-medium">
                  00:00 / 06:00
                </span>
              </div>
              <div className="absolute bottom-3 right-3 flex gap-2">
                <button className="w-8 h-8 bg-white bg-opacity-80 rounded-lg flex items-center justify-center hover:bg-opacity-100">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                    />
                  </svg>
                </button>
                <button className="w-8 h-8 bg-white bg-opacity-80 rounded-lg flex items-center justify-center hover:bg-opacity-100">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
              <div className="absolute top-3 left-3 text-white text-sm">
                @henry_joe
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Tuna Sear</h4>
              <div className="flex items-center gap-1 mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg
                    className="w-4 h-4 fill-current text-gray-300"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600">4.2 (183)</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/tuna.png"
                  alt="Tuna"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="text-xl font-bold text-gray-900">RM112.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Bottom */}
        <div className="flex lg:hidden justify-end gap-2 mt-6">
          <button className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-100">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-100">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <NewsletterFooter />
    </div>
  );
}
