"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import qutLogo from "@/public/qut-Logo.png";
import Image from "next/image";

export default function Education() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="education"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>My Education</SectionHeading>

      <div className="mt-4 flex gap-6 bg-gray-100 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10">
        <div>
          <Image src={qutLogo} alt="QUT" width="150" />
        </div>

        <div>
          <p className="text-lg font-medium">2022</p>
          <p className="my-1">
            Queensland University of Technology - Bachelor of Information
            Technology
          </p>
          <p className="my-1">GPA 6.2/7</p>
          <ul className="list-disc pl-6">
            <li>Major in Computer Science</li>
            <li>Minor in Networks & Security</li>
            <li>Minor in Mobile Applications</li>
            <li>Science & Engineering Dean's List - 2019 & 2021</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
