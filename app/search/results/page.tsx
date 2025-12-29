"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProtectedNavbar from "@/components/layout/ProtectedNavbar";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  // Products data
  const products = [
    {
      id: 1,
      name: "Crab Delights (2nd Edition)",
      image: "/crab.png",
      rating: 4.55,
      reviews: 1203,
      price: 189.0,
      originalPrice: 249.0,
      discount: 24,
      isWishlisted: true,
    },
    {
      id: 2,
      name: "OCTOPUS DELIGHT",
      image: "/octopus.png",
      rating: 4.6,
      reviews: 1023,
      price: 72.0,
      originalPrice: 95.0,
      discount: 20,
      isWishlisted: true,
    },
    {
      id: 3,
      name: "Snapper Seafood Delight 2025 - Fresh Catch",
      image: "/fish.png",
      rating: 4.7,
      reviews: 876,
      price: 399.0,
      originalPrice: 519.0,
      discount: 23,
      isWishlisted: false,
    },
    {
      id: 4,
      name: "Tuna Seafood",
      image: "/salmon&fish.png",
      rating: 4.55,
      reviews: 638,
      price: 189.0,
      originalPrice: 239.0,
      discount: 21,
      isWishlisted: false,
    },
  ];

  const categories = [
    { name: "Fish Fillets", count: 986 },
    { name: "Whole Fish", count: 420 },
    { name: "Shrimp & Prawns", count: 567 },
    { name: "Lobster & Crab", count: 345 },
    { name: "Squid & Octopus", count: 265 },
    { name: "Shellfish & Scallops", count: 200 },
    { name: "Premium Seafood", count: 156 },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [deliverySpeed, setDeliverySpeed] = useState([0, 100]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [deliveryOpen, setDeliveryOpen] = useState(true);
  const [ratingsOpen, setRatingsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      <ProtectedNavbar />

      <div className="flex">
        {/* Left Sidebar - Filters */}

        <div className="w-72 p-6 min-h-screen">
          <div className="space-y-2 mb-4">
            <h1 className="font-bold">Filter</h1>
            <div className="border-b-2 border-gray-200 border-dotted" />
          </div>

          {/* Categories */}
          <Collapsible open={categoriesOpen} onOpenChange={setCategoriesOpen}>
            <div className="mb-6">
              <CollapsibleTrigger className="flex items-center justify-between mb-3 w-full">
                <h3 className="font-semibold">Categories</h3>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    categoriesOpen ? "" : "rotate-180"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="relative mb-3">
                  <input
                    type="text"
                    placeholder="Find categories"
                    className="w-full pl-3 pr-8 py-2 border border-gray-200 rounded-lg text-sm"
                  />
                  <svg
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label
                      key={category.name}
                      className="flex items-center justify-between w-full py-1 text-sm cursor-pointer hover:text-gray-900"
                    >
                      <div className="flex items-center gap-2">
                        <Checkbox
                          checked={selectedCategory === category.name}
                          onCheckedChange={() =>
                            setSelectedCategory(category.name)
                          }
                        />
                        <span
                          className={
                            selectedCategory === category.name
                              ? "font-semibold"
                              : "text-gray-600"
                          }
                        >
                          {category.name}
                        </span>
                      </div>
                      <span className="text-gray-400">{category.count}</span>
                    </label>
                  ))}
                </div>
              </CollapsibleContent>
              <div className="border-b-2 border-gray-200 border-dotted py-2" />
            </div>
          </Collapsible>

          {/* Delivery Speed */}
          <Collapsible open={deliveryOpen} onOpenChange={setDeliveryOpen}>
            <div className="mb-6">
              <CollapsibleTrigger className="flex items-center justify-between mb-3 w-full">
                <h3 className="font-semibold">Delivery speed</h3>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    deliveryOpen ? "" : "rotate-180"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="space-y-4">
                  <div className="relative">
                    <Slider
                      defaultValue={[0, 2]}
                      min={0}
                      max={3}
                      step={1}
                      className="w-full"
                      onValueChange={(value) => setDeliverySpeed(value)}
                    />
                    {/* Checkpoint dots */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-0.5 pointer-events-none z-0">
                      {[0, 1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-[#203C8D] rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>Today</span>
                    <span>Tomorrow</span>
                    <span>Few days</span>
                    <span>Anytime</span>
                  </div>
                </div>
              </CollapsibleContent>
              <div className="border-b-2 border-gray-200 border-dotted mt-6" />
            </div>
          </Collapsible>

          {/* Ratings */}
          <Collapsible open={ratingsOpen} onOpenChange={setRatingsOpen}>
            <div className="mb-6">
              <CollapsibleTrigger className="flex items-center justify-between mb-3 w-full">
                <h3 className="font-semibold">Ratings</h3>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    ratingsOpen ? "" : "rotate-180"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <label
                      key={rating}
                      className="flex items-center justify-between w-full cursor-pointer"
                    >
                      <div className="flex items-center gap-2 text-sm">
                        <Checkbox
                          checked={selectedRating === rating}
                          onCheckedChange={() => setSelectedRating(rating)}
                        />
                        <div className="flex text-gray-900">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < rating ? "fill-current" : "fill-gray-200"
                              }`}
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <span className="text-gray-400 text-sm">
                        {rating === 5
                          ? 986
                          : rating === 4
                          ? 745
                          : rating === 3
                          ? 420
                          : rating === 2
                          ? 90
                          : 18}
                      </span>
                    </label>
                  ))}
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>
        </div>

        {/* Right Content - Products Grid */}
        <div className="flex-1 p-6">
          {/* Header Section */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-3xl font-bold">2,500+</h2>
              <span className="text-sm text-gray-400">
                Products for results of "{searchQuery}"
              </span>
            </div>

            {/* Filter Tags */}
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="px-4 py-2 cursor-pointer hover:bg-gray-50"
                >
                  <svg
                    className="w-4 h-4 text-red-500 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" />
                  </svg>
                  Flash sale
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 cursor-pointer hover:bg-gray-50"
                >
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
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  Trends
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 cursor-pointer hover:bg-gray-50"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  On brand
                </Badge>
              </div>

              {/* Right Side Controls */}
              <div className="flex items-center gap-4">
                <Badge
                  variant="outline"
                  className="px-4 py-2.5 cursor-pointer hover:bg-gray-50 font-medium"
                >
                  <div className="w-5 h-5 rounded-full bg-[#203C8D] flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  Ready in stores
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2.5 cursor-pointer hover:bg-gray-50 font-medium"
                >
                  Sort by : Recommended
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Badge>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-4 gap-6">
            {[...Array(16)].map((_, idx) => {
              const product = products[idx % products.length];
              return (
                <Card
                  key={idx}
                  className="overflow-hidden border-0 shadow-none bg-white p-0"
                >
                  <Link href={`/product/${product.id}`}>
                    <div className="relative bg-gray-50 rounded-3xl cursor-pointer">
                      <div className="absolute top-3 left-3 bg-[#C52129] text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                        {product.discount}% OFF
                      </div>
                      <button 
                        className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 z-10"
                        onClick={(e) => e.preventDefault()}
                      >
                        <svg
                          className={`w-5 h-5 ${
                            product.isWishlisted
                              ? "text-red-500 fill-current"
                              : "text-gray-400"
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                      </button>
                      <div className="aspect-square flex items-center justify-center p-6">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={200}
                          height={200}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </Link>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm line-clamp-2">
                      {product.name}
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
                      <span className="text-xs text-gray-600">
                        {product.rating} ({product.reviews} sold)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-black">
                          RM{product.price.toFixed(2)}
                        </span>
                        <span className="text-sm text-[#C52129] line-through">
                          RM{product.originalPrice.toFixed(2)}
                        </span>
                      </div>
                      <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                        <span className="text-lg">+</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between gap-2 mt-8">
            <Button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm hover:bg-gray-50 font-medium">
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Prev
            </Button>
            <div className="flex flex-row gap-x-2">
              <Button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full text-sm hover:bg-gray-50">
                1
              </Button>
              <Button className="w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium text-white" style={{ background: 'linear-gradient(to bottom, #23429B, #C52129)' }}>
                2
              </Button>
              <Button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full text-sm hover:bg-gray-50">
                3
              </Button>
              <span className="px-2 text-gray-400">...</span>
              <Button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full text-sm hover:bg-gray-50">
                8
              </Button>
            </div>
            <Button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm hover:bg-gray-50 font-medium">
              Next
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SearchResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50">
        <ProtectedNavbar />
        <div className="container mx-auto px-6 py-8">
          <p className="text-gray-600">Loading results...</p>
        </div>
      </div>
    }>
      <SearchResultsContent />
    </Suspense>
  );
}
