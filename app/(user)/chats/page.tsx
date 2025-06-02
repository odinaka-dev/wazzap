import React from "react";
import { Metadata } from "next";

import { Chats } from "@/exports/exports";

export const metadata: Metadata = {
  title: "wazap chats",
  description: "...",
};

export default function ChatsPage() {
  return (
    <div>
      <Chats />
    </div>
  );
}
