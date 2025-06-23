"use client";

import React from "react";
import { FaSpinner } from "react-icons/fa6";

export default function Fallback() {
  return (
    <div>
      <p className="animate-spin bg-white h-[100vh]">
        <FaSpinner />
      </p>
    </div>
  );
}
