"use client";

import React from "react";
import Image from "next/image";
import { Images } from "@/constants/image";

export default function AboutProduct() {
  return (
    <div className="mt-12">
      <h1 className="capitalize text-[#3d2ea0] text-center text-2xl font-semibold mb-4">
        about us wazzap
      </h1>
      <span className="hidden sm:inline-block border-4 border-[#634aff] py-3"></span>
      <p className="text-zinc-600 text-center max-w-[100%] sm:max-w-[80%]  md:max-w-[70%] mx-auto leading-8">
        wazzap is a demo MVP based app that was created for the connection of
        family, friends, and whosoever around the world. it's like a personal
        chat app that allows you to continue your conversation with friends and
        family, no matter the distance. Call it your mini chat app. Get personal
        conversartions done quickly.
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
