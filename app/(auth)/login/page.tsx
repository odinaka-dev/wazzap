import React from "react";

import { Metadata } from "next";
import { Login } from "@/exports/exports";

export const metadata: Metadata = {
  title: "Login Wazzap chats",
  description: "Already have an account? login to your account on whatsapp",
};

export default function page() {
  return <Login />;
}
