import React from "react";

import { Metadata } from "next";
import { Signup } from "@/exports/exports";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "sign up and connect Wazzap",
};

export default function page() {
  return (
    <div>
      <Signup />
    </div>
  );
}
