"use client";

import React from "react";

type MainLayout = { children: React.ReactNode };

export default function MainLayout({ children }: MainLayout) {
  return <div className="">{children}</div>;
}
