"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";

export default function CartPage() {
  const router = useRouter();
  const [isShippingOpen, setIsShippingOpen] = useState(false);

  // Sample cart items
  const cartItems = [
    {
      id: 1,
      name: "Frozen Beef Striploin",
      price: 45.99,
      originalPrice: 55.99,
      image: "/product-1.jpg",
      weight: "500g",
      weightOptions: ["500g", "1kg", "2kg"],
      quantity: 1,
      selected: true,
    },
    {
      id: 2,
      name: "Frozen Chicken Breast",
      price: 12.99,
      originalPrice: 15.99,
      image: "/product-2.jpg",
      weight: "1kg",
      weightOptions: ["500g", "1kg", "2kg"],
      quantity: 2,
      selected: true,
    },
    {
      id: 3,
      name: "Frozen Salmon Fillet",
      price: 28.50,
      originalPrice: 32.50,
      image: "/product-3.jpg",
      weight: "500g",
      weightOptions: ["250g", "500g", "1kg"],
      quantity: 1,
      selected: false,
    },
  ];

  const selectedItems = cartItems.filter((item) => item.selected);
  const subtotal = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const savings = selectedItems.reduce((sum, item) => sum + (item.originalPrice - item.price) * item.quantity, 0);
  const shipping = 0;
  const estimatedTotal = subtotal - savings + shipping;

  return (
    <div className="relative">
      {/* Border vertical yang nyambung dari navbar */}
      <div className="hidden lg:block absolute left-0 right-0 top-0 bottom-0 mx-auto pr-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
          <div className="lg:col-span-2 border-r border-gray-200" />
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto px-4 lg:px-0 lg:pr-6 pt-4">
        <div className="flex items-center align-middle justify-between mb-6 lg:mb-8 lg:ml-10 lg:mr-8">
          <h1 className="text-xl lg:text-3xl font-bold text-gray-900">
            Your carts ({cartItems.length} items)
          </h1>
          <button className="text-sm lg:text-base text-red-600 font-medium hover:text-red-700 transition-colors">
            Clear all
          </button>
          <div className=""></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Cart Items */}
          <div className="lg:col-span-2 lg:border lg:border-gray-200">
            <div className="space-y-6 px-4 py-4 lg:px-6 lg:py-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start lg:items-center gap-3 lg:gap-6 bg-white lg:bg-transparent p-4 lg:p-0 rounded-2xl lg:rounded-none border lg:border-0 border-gray-200"
                >
                  {/* Checkbox */}
                  <Checkbox
                    checked={item.selected}
                    className="mt-2"
                  />

                  {/* Product Image */}
                  <div className="w-20 h-20 lg:w-65 lg:h-50 bg-gray-100 rounded-2xl lg:rounded-3xl flex items-center justify-center shrink-0">
                    <div className="text-gray-400 text-xs lg:text-sm">Image</div>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between min-h-20 lg:min-h-50">
                    <div>
                      <h3 className="text-base lg:text-xl font-semibold text-gray-900 mb-2 lg:mb-4">
                        {item.name}
                      </h3>
                      
                      {/* Weight Dropdown */}
                      <select className="px-3 lg:px-4 py-2 lg:py-2.5 border border-gray-300 rounded-full text-xs lg:text-sm bg-white min-w-24 lg:min-w-30">
                        {item.weightOptions.map((weight) => (
                          <option key={weight} value={weight}>
                            {weight}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Price and Quantity Row */}
                    <div className="flex items-center justify-between mt-auto">
                      {/* Price */}
                      <div>
                        <div className="text-lg lg:text-2xl font-bold text-gray-900 mb-0.5 lg:mb-1">
                          RM{item.price.toFixed(2)}
                        </div>
                        <div className="text-xs lg:text-sm text-red-500 line-through">
                          RM{item.originalPrice.toFixed(2)}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 lg:gap-4">
                        <button className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-100 rounded-lg lg:rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <span className="text-lg lg:text-xl text-gray-600">−</span>
                        </button>
                        <span className="text-sm lg:text-lg font-medium w-6 lg:w-8 text-center">{item.quantity}</span>
                        <button className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-100 rounded-lg lg:rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <span className="text-lg lg:text-xl text-gray-600">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-3 lg:p-4 mb-4">
              {/* Shipping Address */}
              <div className="bg-white rounded-2xl p-4 mb-4">
                <button
                  onClick={() => setIsShippingOpen(!isShippingOpen)}
                  className="w-full flex items-start gap-3 text-left"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">
                        Shipping to
                      </h3>
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          isShippingOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Jakarta, Indonesia, Kebayoran Baru, South Jakarta
                    </p>
                  </div>
                </button>
              </div>

              {/* Order Summary */}
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-6">
                  Order summary
                </h3>

                <div className="space-y-4 mb-4">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span className="font-medium">RM{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-700">
                    <div className="flex items-center gap-1">
                      <span>Savings</span>
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
                    </div>
                    <span className="font-medium text-green-600">
                      -RM{savings.toFixed(2)}
                    </span>
                  </div>

                  <div className="border-t border-dotted border-gray-300 my-4"></div>

                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="font-medium text-green-600">
                      RM{shipping}
                    </span>
                  </div>
                </div>

                <div className="border-t border-dotted border-gray-300 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">
                      Estimated total
                    </span>
                    <span className="text-2xl font-bold text-[#23429B]">
                      RM{estimatedTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={() => {
                    router.push("/checkout");
                  }}
                  className="w-full py-3.5 rounded-full font-semibold text-white mb-3"
                  style={{
                    background: "linear-gradient(to bottom, #23429B, #C52129)",
                  }}
                >
                  Proceed to Checkout
                </button>

                <div className="flex items-start gap-2 text-xs text-gray-500">
                  <svg
                    className="w-4 h-4 shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    You can apply promo code and coin on the next step
                  </span>
                </div>
              </div>
            </div>

            {/* Premium Banner */}
            <div
              className="mt-4 rounded-2xl p-6 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #23429B 0%, #8B3A8F 50%, #C52129 100%)",
              }}
            >
              <div className="relative z-10">
                <div className="inline-block bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  Premium member
                </div>
                <h4 className="text-white font-bold text-lg mb-1">
                  Save more with LB Frozen Premium
                </h4>
                <p className="text-white/80 text-sm mb-4">
                  More discount, more benefits, just for you
                </p>
                <button className="bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                  Learn more
                </button>
              </div>

              {/* Decorative circles */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full"></div>
              <div className="absolute -right-4 top-4 w-20 h-20 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
