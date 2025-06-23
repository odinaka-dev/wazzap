"use client";

import React from "react";
import { CHATSHELPERS } from "@/helpers/chats.helpers";
import Header from "@/components/containers/header";
import { TableDemo } from "@/components/containers/table";

export default function chats_body() {
  return (
    <div className="max-w-[90%] mx-auto">
      <div className="headder mb-8">
        <Header />
      </div>
      {/* the grid dashboard for the wazzap */}
      <div className="grid grid-cols-2 items-center gap-6">
        {CHATSHELPERS.map((item, index) => (
          <div
            className="bg-[#d7d2f945] p-8 py-6 rounded-lg text-2xl"
            key={index}
          >
            <div>
              <div className="text-[#634aff] bg-gray-50 p-4 rounded-full inline-block">
                <item.icons />
              </div>
              <div className="multi-select"></div>
            </div>
            <h1 className="text-xl text-gray-800 capitalize font-semibold mt-2">
              {item.label}
            </h1>
            <p className="text-sm">{item.info}</p>
          </div>
        ))}
      </div>
      {/* chats listed out in tabular format */}
      <div className="my-8">
        <h1 className="text-2xl font-medium pb-4 border-b">
          Active Rooms and Groups
        </h1>
        {/* the table data */}
        <div>{/* <TableDemo /> */}</div>
      </div>
    </div>
  );
}
