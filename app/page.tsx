"use client";

import React from "react";

import { Metadata } from "next";
import { Main } from "@/exports/exports";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// export const metadata: Metadata = {
//   title: "wazzap homepage",
//   description:
//     "explore our latest features and updates that connects you with the world",
// };

export default function MainPage() {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Main />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}
