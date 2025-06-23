"use client";

import Image from "next/image";
import Link from "next/link";

import { Images } from "@/constants/image";
import { Button } from "@/components/ui/button";
import { TiWorld } from "react-icons/ti";
import { Badge } from "@/components/ui/badge";

export default function HomeBanner() {
  return (
    <div className="py-24 relative bg-white">
      <div className="text-center max-w-[90%] sm:max-w-[80%] mx-auto">
        <Badge className="text-[16px] sm:text-[18px] mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
          🚀 Now with AI-powered responses
        </Badge>

        <h1 className="text-4xl sm:text-5xl md:text-7xl  md:leading-[90px]  font-semibold capitalize pb-4">
          Connect, Chat, and <span className="text-[#3d2ea0]">Collaborate</span>
        </h1>
        <p className="text-zinc-600 pb-6 leading-8 sm:text-[18px]">
          Wazzap gives seamless communication with our next-generation chat{" "}
          <br className="hidden sm:block" />
          platform. Built for teams, designed for everyone.
        </p>
        <div className="">
          <Button className=" font-medium capitalize text-white bg-[#634aff] py-6 px-16 rounded-md cursor-pointer hover:bg-purple-500 duration-300">
            <Link href="/login">start chatting</Link>
          </Button>
          <Button className="ml-0 mt-3 sm:ml-5 font-medium capitalize text-[#634aff] bg-[#f7f7f7] py-6 px-16 rounded-md cursor-pointer hover:bg-[#634aff] hover:text-white duration-300">
            <Link href="/login">Watch demo</Link>
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
