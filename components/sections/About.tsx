"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Download, Sparkles } from "lucide-react";
import { personalInfo } from "@/lib/data";

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "40+", label: "Projects Shipped" },
  { value: "500k+", label: "Users Reached" },
  { value: "20+", label: "Open Source Contributions" },
];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-indigo-500 dark:text-indigo-400">
            <Sparkles className="w-5 h-5" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent ml-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Avatar + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-56 h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center">
                  <span className="text-7xl font-bold text-white/90 select-none">
                    {personalInfo.name.charAt(0)}
                  </span>
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-2xl border border-indigo-500/20 -z-10" />
              <div className="absolute -inset-4 rounded-2xl border border-indigo-500/10 -z-10" />
              {/* Location badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 shadow-lg text-xs font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">
                <MapPin className="w-3 h-3 text-indigo-500" />
                {personalInfo.location}
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 w-full mt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 text-center"
                >
                  <div className="text-2xl font-bold text-indigo-500 dark:text-indigo-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                {personalInfo.bio}
              </p>
              <p className="text-gray-500 dark:text-gray-500 leading-relaxed">
                {personalInfo.bio2}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {[
                "Passionate about developer experience and clean architecture",
                "Strong advocate for accessibility and web performance",
                "Regular speaker at local meetups and tech conferences",
                "Mentor for junior developers through ADPList",
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* Download CV */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-medium text-sm border border-indigo-500/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
