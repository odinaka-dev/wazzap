"use client";

import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function subFooter() {
  return (
    <div className="bg-[#634aff] text-white py-12">
      <div className="max-w-[90%] sm:max-w-[80%] mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold sm:leading-[50px] md:leading-[60px]">
          Ready to transform connect you through communication?
        </h1>
        <p className="py-4">
          Join thousands of teams already using ChatFlow to stay connected and
          productive.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <Button className=" font-medium capitalize text-[#634aff] bg-white py-6 px-16 rounded-md cursor-pointer hover:bg-purple-500 duration-300">
            <Link href="/login">start chatting</Link>
          </Button>
          <Button className="ml-0 sm:ml-5 font-medium capitalize text-[#634aff] bg-[#f7f7f7] py-6 px-16 rounded-md cursor-pointer hover:bg-[#634aff] hover:text-white duration-300 w-full mt-3 sm:mt-0">
            <Link href="/login">
              <Link2 />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
