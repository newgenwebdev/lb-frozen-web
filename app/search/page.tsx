"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProtectedNavbar from "@/components/layout/ProtectedNavbar";

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  return (
    <div className="min-h-screen bg-white">
      <ProtectedNavbar />

      {/* Main Search Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          Find what you want...
        </h1>

        {/* Search Bar */}
        <div className="flex gap-3 mb-8">
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && searchQuery.trim()) {
                  router.push(`/search/results?q=${encodeURIComponent(searchQuery)}`);
                }
              }}
              placeholder="Search your seafood here"
              className="w-full pl-6 pr-4 py-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <div className="relative">
            <select className="appearance-none pl-4 pr-10 py-4 border border-gray-300 rounded-lg text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none cursor-pointer">
              <option>All categories</option>
              <option>Fish Fillets</option>
              <option>Whole Fish</option>
              <option>Shrimp & Prawns</option>
              <option>Lobster & Crab</option>
              <option>Squid & Octopus</option>
              <option>Shellfish & Scallops</option>
              <option>Premium Seafood</option>
            </select>
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
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

          <button
            onClick={() => {
              if (searchQuery.trim()) {
                router.push(`/search/results?q=${encodeURIComponent(searchQuery)}`);
              }
            }}
            className="px-8 py-4 bg-[#23429B] text-white rounded-lg font-medium hover:bg-[#1a3278] transition-colors"
          >
            Search
          </button>
        </div>

        {/* Popular Searches */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Popular searches</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "cod fillets",
              "large crabs",
              "Squid Premium",
              "lobster tail",
              "Tuna",
              "Salmon",
              "Snapper Fish",
            ].map((search, index) => (
              <button
                key={index}
                onClick={() => {
                  setSearchQuery(search);
                  router.push(`/search/results?q=${encodeURIComponent(search)}`);
                }}
                className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
              >
                {search}
              </button>
            ))}
          </div>
        </div>

        {/* Recent Searches */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent searches</h2>
            <button className="text-sm text-blue-600 hover:text-blue-700">
              Clear all
            </button>
          </div>
          <div className="space-y-3">
            {[
              "Crabs Package",
              "Crabs 4kg",
              "Crabs & Lobster",
              "Red Crabs",
              "Tuna Fillets",
            ].map((search, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-gray-200"
              >
                <button
                  onClick={() => {
                    setSearchQuery(search);
                    router.push(`/search/results?q=${encodeURIComponent(search)}`);
                  }}
                  className="flex items-center gap-3 flex-1 text-left hover:text-gray-900"
                >
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700">{search}</span>
                </button>
                <button className="text-gray-400 hover:text-gray-600">
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white">
        <ProtectedNavbar />
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-center mb-12">
            Find what you want...
          </h1>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
