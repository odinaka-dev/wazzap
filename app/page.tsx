import React from "react";

import { Metadata } from "next";
import { Main } from "@/exports/exports";

export const metadata: Metadata = {
  title: "wazzap homepage",
  description:
    "explore our latest features and updates that connects you with the world",
};

export default function MainPage() {
  return (
    <div>
      <Main />
    </div>
  );
}
