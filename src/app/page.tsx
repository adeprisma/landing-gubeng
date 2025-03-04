import React from "react";
import Hero from "@/components/Home/Hero";
import Activities from "@/components/Home/Activities";
import Chief from "@/components/Home/Chief";
import Expert from "@/components/Home/Expert";
import Gallery from "@/components/Home/Gallery";
import Newsletter from "@/components/Home/Newsletter";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "GKJW Jemaat Surabaya",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Activities />
      <Chief />
      <Expert />
      <Gallery />
      <Newsletter />
    </main>
  );
}
