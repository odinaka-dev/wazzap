import React from "react";

import Image from "next/image";
import { SERVICESHELPERS } from "@/helpers/services.helpers";
import { Button } from "@/components/ui/button";

export default function services() {
  return (
    <div className="mt-12 bg-gray-800 py-16">
      <div className="max-w-[90%] sm:max-w-[80%] mx-auto text-white text-left">
        <h1 className="text-2xl sm:text-4xl capitalize font-bold">
          Our Services
        </h1>
        <p className="text-zinc-50 text-left leading-8 mt-4 line-clamp-3">
          <b>Connecting Families & Friends, Anytime,</b> Anywhere Wazzap is a
          lightweight, user-friendly messaging app designed to keep your
          personal conversations seamless, private, and engaging—no matter the
          distance. Wazzap ensures quick, reliable, and effortless communication
          in real time.
        </p>
        <div className="services_info grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-start gap-6 my-8">
          {SERVICESHELPERS.map((services, index) => (
            <div
              key={index}
              className="bg-white p-5 shadow-2xl border rounded-xl aspect-3/2"
            >
              <div className="text-3xl">
                <services.serviceImg
                  style={{ color: services.iconColor }}
                  size={36}
                />
              </div>
              <h1 className="mt-6 text-[16px] text-black capitalize font-bold">
                {services.serviceLabel}
              </h1>
              <p className="text-zinc-600 text-sm leading-6 sm:leading-7">
                {services.serviceDescriptionL}
              </p>
            </div>
          ))}
        </div>
        <div className="services_btn flex items-center justify-center pt-6">
          <Button className="ml-5 font-medium capitalize text-gray-800 bg-[#f7f7f7] py-6 px-16 rounded-md cursor-pointer duration-300">
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
}
