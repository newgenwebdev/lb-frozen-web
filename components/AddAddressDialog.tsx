"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export function AddAddressDialog() {
  const [isDefaultAddress, setIsDefaultAddress] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    buildingType: "",
    buildingNumber: "",
    phoneNumber: "",
    zipCode: "",
    fullAddress: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1">
          <span className="text-xl">+</span> New address
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-225 w-[90vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Add new delivery address
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium">
                First name
              </Label>
              <Input
                id="firstName"
                placeholder="Ahmad"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="h-12 px-3 py-2"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-medium">
                Last name
              </Label>
              <Input
                id="lastName"
                placeholder="Fauzi"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="h-12 px-3 py-2"
              />
            </div>
          </div>

          {/* City and State */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city" className="text-sm font-medium">
                City
              </Label>
              <Select
                value={formData.city}
                onValueChange={(value) => handleInputChange("city", value)}
              >
                <SelectTrigger className="h-12! w-full px-3! py-2!">
                  <SelectValue placeholder="Kuala Lumpur" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kuala-lumpur">Kuala Lumpur</SelectItem>
                  <SelectItem value="penang">Penang</SelectItem>
                  <SelectItem value="johor-bahru">Johor Bahru</SelectItem>
                  <SelectItem value="ipoh">Ipoh</SelectItem>
                  <SelectItem value="shah-alam">Shah Alam</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="state" className="text-sm font-medium">
                State
              </Label>
              <Select
                value={formData.state}
                onValueChange={(value) => handleInputChange("state", value)}
              >
                <SelectTrigger className="h-12! w-full px-3! py-2!">
                  <SelectValue placeholder="Kuala Lumpur" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kuala-lumpur">Kuala Lumpur</SelectItem>
                  <SelectItem value="selangor">Selangor</SelectItem>
                  <SelectItem value="penang">Penang</SelectItem>
                  <SelectItem value="johor">Johor</SelectItem>
                  <SelectItem value="perak">Perak</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Building Type and Building Number */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="buildingType" className="text-sm font-medium">
                Building type
              </Label>
              <Select
                value={formData.buildingType}
                onValueChange={(value) =>
                  handleInputChange("buildingType", value)
                }
              >
                <SelectTrigger className="h-12! w-full px-3! py-2!">
                  <SelectValue placeholder="Apartment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="office">Office</SelectItem>
                  <SelectItem value="condo">Condominium</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="buildingNumber" className="text-sm font-medium">
                Building number
              </Label>
              <Input
                id="buildingNumber"
                placeholder="12A"
                value={formData.buildingNumber}
                onChange={(e) =>
                  handleInputChange("buildingNumber", e.target.value)
                }
                className="h-12 px-3 py-2"
              />
            </div>
          </div>

          {/* Phone Number and Zip Code */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-sm font-medium">
                Phone number
              </Label>
              <div className="flex gap-2">
                <div className="flex items-center gap-2 px-3 border rounded-lg bg-gray-50 h-12">
                  <span className="text-lg">🇲🇾</span>
                  <span className="text-sm font-medium">+60</span>
                </div>
                <Input
                  id="phoneNumber"
                  placeholder="12-3456 7890"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    handleInputChange("phoneNumber", e.target.value)
                  }
                  className="h-12 px-3 py-2 flex-1"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="zipCode" className="text-sm font-medium">
                Zip Code
              </Label>
              <Input
                id="zipCode"
                placeholder="50050"
                value={formData.zipCode}
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
                className="h-12 px-3 py-2"
              />
            </div>
          </div>

          {/* Full Address */}
          <div className="space-y-2">
            <Label htmlFor="fullAddress" className="text-sm font-medium">
              Full address
            </Label>
            <Textarea
              id="fullAddress"
              placeholder="No 10, Jalan Bukit, Taman Impian, 50050 Kuala Lumpur, Malaysia"
              value={formData.fullAddress}
              onChange={(e) => handleInputChange("fullAddress", e.target.value)}
              className="min-h-30 resize-none"
            />
          </div>

          {/* Set as default address and Confirm Button */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-3">
              <Switch
                id="default-address"
                checked={isDefaultAddress}
                onCheckedChange={setIsDefaultAddress}
              />
              <Label htmlFor="default-address" className="text-base font-medium cursor-pointer">
                Set as default address
              </Label>
            </div>
            <Button
              className="px-8 py-6 text-white font-semibold rounded-full"
              style={{
                background: "linear-gradient(to bottom, #23429B, #C52129)",
              }}
            >
              Confirm and save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
