import React from "react";

import Header from "@/components/containers/header";

// thenes icons
import { MdOutlineDarkMode } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";

// notifications
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { FaBell } from "react-icons/fa";

export default function PreferenceBody() {
  return (
    <div className="mt-4 ml-8">
      <Header />
      {/* different settings for each users */}
      <h1 className="text-2xl font-semibold capitalize my-4">Preference</h1>
      <div className="preference_contents">
        <div className="dark_theme mx-12 my-8 border rounded-md p-6">
          <h1 className="text-[18px] font-medium capitalize">Themes</h1>
          {/* the themes list */}
          <div className="notify_contents">
            <div className="flex gap-6 items-center my-8">
              <div className="text-[#634aff] bg-gray-100 p-4 text-xl rounded-md">
                <MdOutlineDarkMode />
              </div>
              <div>
                <h1 className="text-[16px] font-medium">Dark Mode</h1>
                <p className="text-sm">
                  Reduce eye strain in low-light conditions
                </p>
              </div>
            </div>
            <div className="sounds flex gap-6 items-center my-8">
              <div className="text-[#634aff] bg-gray-100 p-4 text-xl rounded-md">
                <LuLayoutDashboard />
              </div>
              <div>
                <h1 className="text-[16px] font-medium">Compact Layout</h1>
                <p className="text-sm">
                  Define the contents and layout of your dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="notifications mx-12 my-8 border rounded-md p-6">
          <h1 className="text-[18px] font-medium capitalize">Notifications</h1>
          <div className="notify_contents">
            <div className="flex gap-6 items-center my-8">
              <div className="text-[#634aff] bg-gray-100 p-4 text-xl rounded-md">
                <FaBell />
              </div>
              <div>
                <h1 className="text-[16px] font-medium">Message Alerts</h1>
                <p className="text-sm">
                  Get notified when someone sends you a message
                </p>
              </div>
            </div>
            <div className="sounds flex gap-6 items-center my-8">
              <div className="text-[#634aff] bg-gray-100 p-4 text-xl rounded-md">
                <HiMiniSpeakerWave />
              </div>
              <div>
                <h1 className="text-[16px] font-medium">Sound</h1>
                <p className="text-sm">Play sound when you receive a message</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
