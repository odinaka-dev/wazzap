import React from "react";

import { SignupForm } from "@/components/signup-form";
import { PiChatTeardropTextFill } from "react-icons/pi";
import { register as registerAPI } from "@/services/auth.service";
import { RegisterUsersSchema } from "@/lib/zod";

export default function signup() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="text-xl flex flex-row items-center justify-center gap-2 text-[#634aff]">
              <PiChatTeardropTextFill />
              <h1 className="font-bold capitalize">Wazzap</h1>
            </div>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <div className="relative z-10 flex flex-col h-full items-center justify-center bg-[#634aff] bg-opacity-50 text-white">
          <div className="text-7xl">
            <PiChatTeardropTextFill />
          </div>
          <h1 className="text-2xl font-bold">Welcome to WAZAPP</h1>
        </div>
      </div>
    </div>
  );
}
