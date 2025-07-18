"use client";

import React from "react";
import { RiNotification4Line } from "react-icons/ri";
import { IoCallSharp } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function header() {
  return (
    <div className="flex justify-between items-center px-4 py-2 border-b border-gray-300">
      {/* cotents or image */}
      <div>
        <Button
          size="default"
          className=" bg-[#634aff] cursor-pointer hover:bg-purple-300 duration-300"
        >
          Join a Room
        </Button>
      </div>
      <div className="flex gap-6">
        <div className="flex gap-6 items-center text-[#634aff] text-xl">
          <RiNotification4Line />
          <IoCallSharp />
          <FaVideo />
        </div>
        <p className="p-2 px-3 rounded-full bg-zinc-300">JD</p>
      </div>
    </div>
  );
}
