"use client";

import React from "react";
import Header from "@/components/containers/header";
import { Button } from "@/components/ui/button";
import { IoMdPersonAdd } from "react-icons/io";
import { MdFileUpload } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";

// helpers imports
import { CONTACTHELPERS } from "@/helpers/contact.helpers";

export default function ContactBody() {
  return (
    <div>
      <Header />
      <h1 className="text-3xl font-medium text-gray-800 mt-8">Contact Us</h1>
      <div className="grid grid-cols-2 items-start gap-8 mt-6">
        <div className="bg-[#d1cafd34] p-6 py-8 rounded-lg flex flex-col justify-start items-start">
          <div className="text-[#634aff] bg-gray-50 p-4 rounded-full mb-4">
            <IoMdPersonAdd />
          </div>
          <h1 className="text-xl font-semibold">Add contacts</h1>
          <p className="text-sm mb-4 mt-1">connect with someone new</p>
          <Button className="bg-[#634aff] py-2 px-6 rounded-md">connect</Button>
        </div>
        {/* the second grid */}
        <div className="bg-[#d1cafd34] p-6 py-8 rounded-lg flex flex-col justify-start items-start">
          <div className="text-[#634aff] bg-gray-50 p-4 rounded-full mb-4">
            <MdFileUpload />
          </div>
          <h1 className="text-xl font-semibold">Import Contacts</h1>
          <p className="text-sm mb-4 mt-1">
            Get/sync contacts from your phonebook
          </p>
          <Button className="bg-[#634aff] py-2 px-6 rounded-md">Import</Button>
        </div>
      </div>
      <div className="allcontents mt-4">
        <h1 className="text-xl font-semibold py-6 capitalize">Your contacts</h1>
        <div>
          {CONTACTHELPERS.map((item, index) => (
            <div
              className="flex justify-between items-center border-b mb-4"
              key={index}
            >
              {/*info of contacts */}
              <div className="">
                <div className="text-2xl flex gap-2 items-center">
                  <FaRegUserCircle />
                  <h1 className="text-[14px] font-semibold">{item.name}</h1>
                </div>
                <p className="text-sm mb-4 mt-1 pl-8">{item.status}</p>
              </div>
              {/* icons */}
              <div className="flex gap-2 items-center">
                <MdOutlineMessage />
                <HiDotsVertical />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
