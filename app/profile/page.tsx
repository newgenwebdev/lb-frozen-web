"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProfileSidebar from "@/components/layout/ProfileSidebar";

export default function ProfilePage() {
  return (
    <div className="mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <Link href="/landing" className="hover:text-gray-900">
          Home
        </Link>
        <span>›</span>
        <span className="text-gray-900 font-medium">Profile & settings</span>
      </div>

      {/* Main Layout */}
      <div className="flex gap-6">
        {/* Left Sidebar */}
        <ProfileSidebar activeMenu="My account" />

        {/* Main Content */}
        <div className="flex-1">
          {/* Header - spanning both columns */}
          <div className="border-t border-l border-r rounded-t-lg border-b border-gray-200 p-6 mb-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              My account
            </h2>
            <p className="text-sm text-gray-500">
              Edit or complete your account information, including your data
              security.
            </p>
          </div>

          {/* Content Row */}
          <div className="flex gap-0">
            {/* Form Section */}
            <div className="flex-1 bg-white border-l border-r border-b border-gray-200 rounded-bl-lg p-8">
              <div className="space-y-5">
                {/* Full name */}
                <div>
                  <Label
                    htmlFor="fullname"
                    className="text-sm font-medium text-gray-700 mb-1.5 block"
                  >
                    Full name
                  </Label>
                  <Input
                    id="fullname"
                    defaultValue="Hana Syafitri"
                    className="h-12"
                  />
                </div>

                {/* Phone number */}
                <div>
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700 mb-1.5 block"
                  >
                    Phone number
                  </Label>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-2 px-3 border border-gray-200 rounded-lg bg-white h-12">
                      <span className="text-lg">🇲🇾</span>
                      <span className="text-sm text-gray-700 font-medium">
                        +60
                      </span>
                    </div>
                    <Input
                      id="phone"
                      defaultValue="812 3456 7890"
                      className="flex-1 h-12"
                    />
                  </div>
                </div>

                {/* Gender */}
                <div>
                  <Label
                    htmlFor="gender"
                    className="text-sm font-medium text-gray-700 mb-1.5 block"
                  >
                    Gender
                  </Label>
                  <Select defaultValue="male">
                    <SelectTrigger className="w-full h-12">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Email */}
                <div>
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 mb-1.5 block"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="hanasyafitri@gmail.com"
                    className="h-12"
                  />
                </div>

                {/* Date of birth */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-1.5 block">
                    Date of birth
                  </Label>
                  <div className="grid grid-cols-3 gap-3">
                    <Input
                      defaultValue="18"
                      placeholder="Day"
                      className="h-12"
                    />
                    <Input
                      defaultValue="September"
                      placeholder="Month"
                      className="h-12"
                    />
                    <Input
                      defaultValue="2000"
                      placeholder="Year"
                      className="h-12"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-8">
                <Button
                  variant="outline"
                  className="px-8 h-12 text-gray-700 border-gray-300"
                >
                  Reset all
                </Button>
                <Button className="px-8 h-12 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Save change
                </Button>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-96 shrink-0 border-r border-b border-gray-200 rounded-br-lg overflow-hidden">
              {/* Profile Card */}
              <div 
                className="bg-white p-8"
                style={{
                  background: "linear-gradient(to bottom, #EBF0FEB2, #EBF0FE00)",
                }}
              >
                <div className="pb-8">
                  <div className="flex justify-end mb-6">
                    <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900">
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
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                      Change image
                    </button>
                  </div>

                  <div className="flex justify-start">
                    <div className="relative w-40 h-40">
                      <div className="w-full h-full rounded-full overflow-hidden border-4 border-dashed border-gray-300">
                        <img
                          src="/api/placeholder/160/160"
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Hana Syafitri
                  </h3>

                  <div className="flex items-start gap-2 text-sm text-gray-600 mb-2">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    hanasyafitri@gmail.com
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Since Sept, 2020
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 mb-6">
                  <div className="flex flex-row">
                    <div className="p-6">
                      <p className="text-xs text-gray-500 mb-2">
                        Product purchase
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        65 Products
                      </p>
                    </div>
                    <div className="border-r border-gray-200" />
                    <div className="p-6">
                      <p className="text-xs text-gray-500 mb-2">
                        Total Payment
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        RM5,230.00
                      </p>
                    </div>
                  </div>
                </div>

                {/* Forgot Password Card */}
                <div className="bg-white -mx-8 px-8 pt-6 border-t border-gray-200">
                  <div className="flex justify-center mb-6">
                    <div className="w-40 h-40">
                      <svg
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <ellipse
                          cx="70"
                          cy="140"
                          rx="35"
                          ry="20"
                          fill="#4F46E5"
                          opacity="0.2"
                        />
                        <circle cx="70" cy="85" r="35" fill="#4F46E5" />
                        <ellipse cx="75" cy="95" rx="8" ry="12" fill="white" />
                        <ellipse cx="85" cy="95" rx="8" ry="12" fill="white" />
                        <path
                          d="M 95 60 L 140 75 L 135 95 L 90 80 Z"
                          fill="#FCD34D"
                        />
                        <circle cx="135" cy="70" r="12" fill="#FCD34D" />
                        <rect
                          x="130"
                          y="68"
                          width="10"
                          height="4"
                          fill="#1E293B"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Forgot password?
                  </h3>

                  <p className="text-sm text-gray-500 mb-6">
                    Don&apos;t worry, you can create a new password for your
                    account.
                  </p>

                  <Button
                    variant="outline"
                    className="w-full h-12 bg-gray-100 border-0 text-gray-900 hover:bg-gray-200 font-medium"
                  >
                    Reset password
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
