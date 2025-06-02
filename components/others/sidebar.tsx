import React from "react";
import { DASHBOARDHELPERS } from "@/helpers/dashboard";
import { PiChatTeardropTextFill } from "react-icons/pi";
import Link from "next/link";

export default function sidebar() {
  return (
    <div>
      {/* logo starts here */}
      <div className="text-5xl flex flex-row items-center justify-start gap-2 text-white">
        <PiChatTeardropTextFill />
        <h1 className="font-bold capitalize text-2xl">Wazzap</h1>
      </div>
      {/* details */}
      <div className="logo_details mt-8">
        <ul className="flex flex-col gap-8 items-start capitalize w-[250px]">
          {DASHBOARDHELPERS.map((item, index) => (
            <li
              className="hover:text-[#634aff] hover:bg-white py-2 px-4 w-full rounded-md"
              key={index}
            >
              <Link href={`/${item.url}`} className="flex gap-2 items-center ">
                <item.Icon />
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
