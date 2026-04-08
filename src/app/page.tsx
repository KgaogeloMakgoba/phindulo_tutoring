import React from "react";
import Hero from "@/components/Home/Hero";
import Courses from "@/components/Home/Faculties";
import Mentor from "@/components/Home/Tutors";
import Newsletter from "@/components/Home/Newsletter";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Phindulo Tutoring",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Courses />
      <Mentor />
      <Newsletter />
    </main>
  );
}