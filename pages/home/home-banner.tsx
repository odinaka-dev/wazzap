"use client";

import Image from "next/image";
import Link from "next/link";

import { Images } from "@/constants/image";
import { Button } from "@/components/ui/button";
import { TiWorld } from "react-icons/ti";

export default function HomeBanner() {
  return (
    <div className="py-24 relative bg-white">
      <div className="text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl text-[#3d2ea0] md:leading-[90px]  font-semibold capitalize pb-4">
          Stay Connected, No Matter <br className="hidden sm:block" /> the
          Distance
        </h1>
        <p className="text-zinc-600 pb-6">
          Wazzap brings you closer to friends, family, and loved ones—anytime,
          anywhere in the world.
        </p>
        <div>
          <Button className=" font-medium capitalize text-white bg-[#634aff] py-6 px-16 rounded-md cursor-pointer hover:bg-purple-500 duration-300">
            <Link href="/login">Get started</Link>
          </Button>
        </div>
        <div className="img_flexxed flex items-center gap-4 mt-4 max-w-[1200px] mx-auto">
          <div className="w-[100%] relative top-12">
            <Image
              src={Images.homeBanner1}
              alt=""
              priority
              width={1200}
              height={300}
              className="w-full rounded-xl h-[300px] object-cover"
            />
          </div>
          <div className="w-[100%] relative top-24">
            <Image
              src={Images.homeBanner2}
              alt=""
              priority
              width={1200}
              height={300}
              className="w-full rounded-xl h-[300px] object-cover"
            />
          </div>
          <div className="w-[100%]">
            <Image
              src={Images.homeBanner3}
              alt=""
              priority
              width={1200}
              height={300}
              className="w-full rounded-xl h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-12 sm:top-24 text-[#634aff] text-5xl left-56 animate-bounce">
        <TiWorld />
      </div>
    </div>
  );
}
