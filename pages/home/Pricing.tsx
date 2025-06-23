import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // prettier-ignore
import { PRICINGHELPERS } from "@/helpers/pricing.helpers"; // prettier-ignore
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <div className="bg-purple-50">
      <div className="max-w-[90%] sm:max-w-[80%] mx-auto py-16 flex flex-col items-center justify-center">
        <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-bold">
          Simple, transparent pricing
        </h1>
        <p className="pt-2 sm:text-[18px] text-center sm:text-left">
          Choose the plan that's right for you and your team
        </p>
        <div className="pricing_grid w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {PRICINGHELPERS.map((pricing, index) => (
            <Card className="p-6 flex flex-col justify-between" key={index}>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  {pricing.title}
                </CardTitle>
                <CardDescription className="sm:text-[18px]">
                  {pricing.decription}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-4xl font-bold">
                {pricing.price}
              </CardContent>
              <CardContent className="line-clamp-5">
                {pricing.features.map((features, index) => (
                  <div
                    className="flex items-center gap-2 mb-3 sm:mb-2"
                    key={index}
                  >
                    <p className="text-green-500">
                      <Check />
                    </p>
                    <p key={index} className="text-[16px] text-zinc-600">
                      {features}
                    </p>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="w-full flex items-center justify-center bg-gray-800 text-white rounded-sm cursor-pointer py-2">
                {pricing.button}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
