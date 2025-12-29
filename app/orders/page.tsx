"use client";

import { Button } from "@/components/ui/button";
import ProfileSidebar from "@/components/layout/ProfileSidebar";

export default function OrderDetailPage() {
  return (
    <div className="mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <a href="/landing" className="hover:text-gray-900">
          Home
        </a>
        <span>›</span>
        <span className="text-gray-900 font-medium">Profile & settings</span>
      </div>

      {/* Main Layout */}
      <div className="flex gap-6">
        {/* Left Sidebar */}
        <ProfileSidebar activeMenu="My orders" />

        {/* Main Content */}
        <div className="flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Section - Order Details */}
            <div className="lg:col-span-2 space-y-0">
              {/* Order Status Stepper */}
              <div className="bg-white rounded-t-lg border border-gray-200 p-6">
                <div className="relative">
                  {/* Progress Bar */}
                  <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200">
                <div className="h-full bg-blue-600 w-1/4"></div>
              </div>

              {/* Steps */}
              <div className="relative flex justify-between">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow-sm flex items-center justify-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    Waiting confirmation
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 border-4 border-white shadow-sm mb-2"></div>
                  <span className="text-sm text-gray-500">Packing</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 border-4 border-white shadow-sm mb-2"></div>
                  <span className="text-sm text-gray-500">Delivering</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 border-4 border-white shadow-sm mb-2"></div>
                  <span className="text-sm text-gray-500">Completed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detail order */}
          <div className="bg-white border-l border-r border-b border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Detail order (3)
            </h2>

            <div className="space-y-4">
              {/* Order Item 1 */}
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                  <img
                    src="/api/placeholder/96/96"
                    alt="Crabs Delight"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="inline-block px-2 py-1 bg-gray-100 text-xs font-medium text-gray-700 rounded mb-2">
                    24kg
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Crabs Delight Premium Asian
                  </h3>
                  <p className="text-sm text-gray-900">
                    1 x <span className="font-semibold">RM849.99</span>
                  </p>
                </div>
              </div>

              {/* Order Item 2 */}
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                  <img
                    src="/api/placeholder/96/96"
                    alt="Octopus Large"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="inline-block px-2 py-1 bg-gray-100 text-xs font-medium text-gray-700 rounded mb-2">
                    Large
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Octopus Large
                  </h3>
                  <p className="text-sm text-gray-900">
                    1 x <span className="font-semibold">RM849.99</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-b-lg border-l border-r border-b border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Order summary
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal (2 items)</span>
                <span className="text-gray-900">RM1,844.25</span>
              </div>

              <div className="flex justify-between text-sm">
                <div className="flex items-center gap-1">
                  <span className="text-gray-600">Savings</span>
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
                <span className="text-green-600">-RM95.27</span>
              </div>

              <div className="border-t border-dashed border-gray-200 my-3"></div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="text-green-600">RM0 (Free)</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-600">
                  Taxes <span className="text-red-600">10%</span>
                </span>
                <span className="text-gray-900">+RM20.00</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-600">
                  Discount <span className="text-green-600">20%</span>
                </span>
                <span className="text-gray-900">-RM353.79</span>
              </div>

              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-medium">
                    Estimated total
                  </span>
                  <span className="text-2xl font-bold text-blue-600">
                    RM1,415.18
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - About Order & Payment */}
        <div className="space-y-6">
          {/* About Order */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              About order
            </h2>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    ID : #ORD-27102025HS
                  </p>
                  <p className="text-xs text-gray-500">
                    Est. Arrive at Mon, Oct 23 2025
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Current status</span>
                  <span className="font-medium text-gray-900">
                    Waiting confirmation
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Order at</span>
                  <span className="font-medium text-gray-900">
                    Fri, Oct 20, 2025 at 08:10 am
                  </span>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <Button className="w-full h-12 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Chat store
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-12 text-red-600 border-red-200 hover:bg-red-50"
                >
                  Cancel order
                </Button>

                <div className="flex items-start gap-2 pt-2">
                  <svg
                    className="w-4 h-4 text-gray-400 mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-xs text-gray-500">
                    Order can be canceled before seller confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Payment method
            </h2>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-linear-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center shrink-0">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  Credit card
                </p>
                <p className="text-xs text-gray-500">Hana Syafitri •••• 9980</p>
              </div>
              <span className="text-xs font-semibold text-blue-600 px-2 py-1 bg-blue-50 rounded">
                Mastercard
              </span>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}
