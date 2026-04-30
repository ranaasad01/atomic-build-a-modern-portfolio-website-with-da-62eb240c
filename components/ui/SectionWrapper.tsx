"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";
import { Layout, Terminal, Settings } from "lucide-react";

// ─── SectionWrapper ───────────────────────────────────────────────────────────

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id={id} ref={ref} className={["py-24 px-4 sm:px-6 lg:px-8", className].join(" ")}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}

// ─── Skills Section ───────────────────────────────────────────────────────────

const categoryConfig = {
  Frontend: {
    icon: Layout,
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20",
  },
  Backend: {
    icon: Terminal,
    color: "text-emerald-500 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
  },
  "Tools & DevOps": {
    icon: Settings,
    color: "text-orange-500 dark:text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    badge: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20",
  },
} as const;

const categories = ["Frontend", "Backend", "Tools & DevOps"] as const;

export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <Terminal className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Tech Stack
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent ml-4" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-500 dark:text-gray-500 mb-16 ml-8"
        >
          Technologies I work with on a daily basis
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, catIdx) => {
            const config = categoryConfig[category];
            const Icon = config.icon;
            const categorySkills = skills.filter((s) => s.category === category);

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + catIdx * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-indigo-500/20 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={["w-9 h-9 rounded-lg flex items-center justify-center border", config.bg, config.border].join(" ")}>
                    <Icon className={["w-4 h-4", config.color].join(" ")} />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + catIdx * 0.1 + skillIdx * 0.04 }}
                      className={["inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 cursor-default", config.badge].join(" ")}
                    >
                      {skill.name}
                      <span className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={["w-1 h-1 rounded-full", i < skill.level ? "bg-current opacity-80" : "bg-current opacity-20"].join(" ")}
                          />
                        ))}
                      </span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
