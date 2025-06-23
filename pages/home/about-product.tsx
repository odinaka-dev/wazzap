"use client";

import React from "react";
import Image from "next/image";
import { Images } from "@/constants/image";

export default function AboutProduct() {
  return (
    <div className="mt-12">
      <h1 className="capitalize text-[#3d2ea0] text-center text-2xl sm:text-3xl font-semibold mb-4">
        about us wazzap
      </h1>
      <p className="text-zinc-600 text-center max-w-[100%] sm:max-w-[80%] mx-auto leading-8">
        wazzap is a demo MVP based app that was created for the connection of
        family, friends, and whosoever around the world.
      </p>
      <div className="w-[100%] relative top-12 overflow-hidden sm:h-[400px]">
        <Image
          src={Images.aboutImage}
          alt=""
          priority
          width={1400}
          height={960}
          className="w-full rounded-xl object-contain"
        />
      </div>
    </div>
  );
}
