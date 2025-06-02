"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

import { PiChatTeardropTextFill } from "react-icons/pi";

// import pages using dynamic imports
const HomeBanner = dynamic(() => import("./home-banner"), {
  loading: () => <section style={{ height: 500 }}>Loading…</section>,
});

const AboutUs = dynamic(() => import("./about-product"), {
  loading: () => <section style={{ height: 500 }}>Loading...</section>,
});

const Services = dynamic(() => import("./services"), {
  loading: () => <section style={{ height: 500 }}>loading...</section>,
});

const FrequentlyAskedQuestions = dynamic(
  () => import("./frequentlyAskedQuestions"),
  {
    loading: () => <section style={{ height: 500 }}>loading...</section>,
  }
);

const FooterComponent = dynamic(() => import("./footer"), {
  loading: () => <section style={{ height: 500 }}>loading...</section>,
});

export default function MainPages() {
  return (
    <div>
      <section className=" min-h-screen">
        <nav className="flex justify-between gap-8 px-8 py-4 border-b border-b-gray-300">
          <div className="text-2xl flex flex-row items-center justify-center gap-2 text-[#634aff]">
            <PiChatTeardropTextFill />
            <h1 className="font-bold capitalize text-2xl">Wazzap</h1>
          </div>
          <div>
            <ul className="hidden sm:flex gap-8 items-center capitalize">
              <li>Services</li>
              <li>About us</li>
              <Link href={"/login"}>
                <li>login</li>
              </Link>
            </ul>
          </div>
        </nav>
        <HomeBanner />
      </section>
      <div className="bg-white py-12 max-w-[80%] mx-auto">
        <AboutUs />
      </div>
      <Services />
      <FrequentlyAskedQuestions />
      <FooterComponent />
    </div>
  );
}
