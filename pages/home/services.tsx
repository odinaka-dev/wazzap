import React from "react";

import Image from "next/image";
import { SERVICESHELPERS } from "@/helpers/services.helpers";
import { Button } from "@/components/ui/button";

export default function services() {
  return (
    <div className="mt-12 bg-[#3d2ea0] py-16">
      <div className="max-w-[80%] mx-auto text-white text-left">
        <h1 className="text-2xl capitalize font-semibold">Our Services</h1>
        <p className="text-zinc-50 text-left leading-8 mt-4 line-clamp-3">
          <b>Connecting Families & Friends, Anytime,</b> Anywhere Wazzap is a
          lightweight, user-friendly messaging app designed to keep your
          personal conversations seamless, private, and engaging—no matter the
          distance. Wazzap ensures quick, reliable, and effortless communication
          in real time.
        </p>
        <div className="services_info grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-start gap-6 my-8">
          {SERVICESHELPERS.map((services, index) => (
            <div key={index} className="bg-white p-3 rounded-xl">
              <div className="w-[100%]">
                <Image
                  src={services.serviceImg}
                  alt=""
                  priority
                  width={1200}
                  height={300}
                  className="w-full rounded-xl h-[300px] object-cover"
                />
              </div>
              <h1 className="mt-6 text-[16px] text-center text-black capitalize font-bold">
                {services.serviceLabel}
              </h1>
            </div>
          ))}
        </div>
        <div className="services_btn flex items-center justify-center pt-6">
          <Button
            size={"lg"}
            className="bg-white hover:bg-white text-black px-12 py-4 cursor-pointer"
          >
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
}
