import Image from "next/image";

export default function NewsletterFooter() {
  return (
    <div className="relative bg-linear-to-b from-[#C52129] via-[#8B3A8F] to-[#4A5BAC] overflow-hidden">
      {/* Three Elliptical Rings */}
      <div
        className="absolute rounded-full"
        style={{
          width: "800px",
          height: "800px",
          top: "-200px",
          right: "-200px",
          border: "50px solid rgba(255, 255, 255, 0.1)",
          zIndex: 1,
        }}
      ></div>
      <div
        className="absolute rounded-full"
        style={{
          width: "600px",
          height: "600px",
          top: "-100px",
          right: "-100px",
          border: "40px solid rgba(255, 255, 255, 0.15)",
          zIndex: 1,
        }}
      ></div>
      <div
        className="absolute rounded-full"
        style={{
          width: "400px",
          height: "400px",
          top: "0px",
          right: "0px",
          border: "30px solid rgba(255, 255, 255, 0.2)",
          zIndex: 1,
        }}
      ></div>

      {/* Octopus Image */}
      <div
        className="absolute"
        style={{
          width: "600px",
          height: "600px",
          top: "-50px",
          right: "-100px",
          zIndex: 2,
        }}
      >
        <Image
          src="/octopus-bg-removed.png"
          alt="Octopus"
          fill
          className="object-contain"
        />
      </div>

      <div className="mx-auto px-6 py-16 relative z-10">
        <div className="max-w-md">
          {/* LB Logo and Bartar Text */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-20 h-20 flex items-center">
              <Image
                src="/lb-logo.png"
                alt="LB Logo"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <span className="text-white text-4xl font-semibold">Bartar</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-4">
            Stay connected
          </h2>
          <p className="text-white text-opacity-90 mb-8 leading-relaxed">
            Sign up for our newsletter to receive the latest news, updates, and
            insights on new products, flash sale, discount and moreg reat things
            from us
          </p>

          <div className="flex gap-3 mb-5">
            <input
              type="email"
              placeholder="Enter your mail"
              className="flex-1 px-6 py-3 rounded-full bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-[#C52129] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#A01C22] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white bg-opacity-95 relative z-20">
        <div className="mx-auto px-6 py-12">
          <div className="grid grid-cols-5 gap-8 mb-8">
            {/* Discover */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Discover</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    FAQ Section
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Order Tracking
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Delivery Details
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Customer Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Seafood Selection */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">
                Seafood Selection
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Product Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Weekly Specials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Seasonal Offers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Cooking Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Customer Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Sustainability */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">
                Sustainability
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Eco-friendly sourcing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Community support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Ocean conservation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Local fishing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Partnerships
                  </a>
                </li>
              </ul>
            </div>

            {/* Ordering Process */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">
                Ordering Process
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    How to Order
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Payment Options
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Shipping Information
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Order Confirmation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Fresh Deliveries */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">
                Fresh Deliveries
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Same-Day Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Subscription Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Quality Assurance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Seafood Recipes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Cooking Classes
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-200 pt-6 flex items-center justify-between text-sm text-gray-600">
            <p>© 2025 - Alright reserved by Bartar</p>
            <div className="flex items-center gap-6">
              <a
                href="mailto:bartar.official@gmail.com"
                className="flex items-center gap-2 hover:text-gray-900"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                bartar.official@gmail.com
              </a>
              <a
                href="tel:+2230-1233-123"
                className="flex items-center gap-2 hover:text-gray-900"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +2230 - 1233 - 123
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
