"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { FaFilePdf } from "react-icons/fa";
import { Icon } from '@iconify/react';

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Mes Expériences Professionnelles</SectionHeading>
      <VerticalTimeline lineColor="">

        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "#1d2432",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
                {item.technos && item.technos.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-4">
                        {item.technos.map((tech, idx) => (
                            <div key={idx} className="flex items-center gap-1">
                                <Icon icon={tech.icon} width={24} height={24} />
                                <span className="text-sm">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                )}

                {item.reportUrl && (
                    <div className="mt-4 flex justify-center">
                        <a
                            href={item.reportUrl}
                            className="group bg-gray-950 text-white px-5 py-2 inline-flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border border-white/40"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="opacity-70 whitespace-nowrap">Mon Rapport de stage</span>
                            <FaFilePdf className="opacity-70" />
                        </a>
                    </div>
                )}


            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
