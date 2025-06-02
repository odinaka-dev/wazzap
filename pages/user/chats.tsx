"use client";
import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
import Sidebar from "@/components/others/sidebar";
import ChatsBody from "@/components/containers/chats_body";

export default function ChatsPage() {
  return (
    <div className="min-h-screen max-w-full grid grid-cols-[20%_75%] gap-4">
      <div className="bg-[#634aff] text-white px-4 py-8 flex flex-col justify-between items-start">
        <div>
          <Sidebar />
        </div>
        <div className="flex gap-2 items-center">
          <BiLogOutCircle />
          <p>Logout</p>
        </div>
      </div>
      <div>
        <ChatsBody />
      </div>
    </div>
  );
}
