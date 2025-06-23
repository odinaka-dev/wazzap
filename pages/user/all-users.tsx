"use client";

import Sidebar from "@/components/others/sidebar";
import { BiLogOutCircle } from "react-icons/bi";
import UsersBody from "@/components/containers/all-users-body";

export default function Allusers() {
  return (
    <div className="min-h-screen max-w-full grid grid-cols-[20%_75%] gap-8">
      <div className="bg-[#634aff] text-white px-4 py-8 flex flex-col justify-between items-start">
        <div>
          <Sidebar />
        </div>
        <div className="flex gap-2 items-center">
          <BiLogOutCircle />
          <p>Logout</p>
        </div>
      </div>
      <div className="">
        <UsersBody />
      </div>
    </div>
  );
}
