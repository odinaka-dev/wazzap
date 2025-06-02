"use client";

import React from "react";

import { PiChatTeardropTextFill } from "react-icons/pi";
import Link from "next/link";
import { Facebook, FacebookIcon, InstagramIcon, X } from "lucide-react";

export default function footer() {
  return (
    <footer className="bg-[#634aff]">
      <div className="max-w-[80%] mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 py-12">
        <div className="text-2xl flex flex-row items-center justify-center gap-2 text-white">
          <PiChatTeardropTextFill />
          <h1 className="font-bold capitalize text-2xl">Wazzap</h1>
        </div>
        {/* footer links */}
        <div className="flex gap-8 items-center text-white">
          <ul className="flex gap-8 items-center capitalize">
            <li>Services</li>
            <li>About us</li>
            <Link href={"/login"}>
              <li>login</li>
            </Link>
            <li className="hidden sm:flex gap-2 cursor-pointer">
              <Facebook />
              <X />
              <InstagramIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
