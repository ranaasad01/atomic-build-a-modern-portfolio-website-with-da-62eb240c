"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects, personalInfo, socialLinks } from "@/lib/data";
import { Github, Eye, ExternalLink, Star, Mail, MapPin, Send, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

// ─── Projects Section ────────────────────────────────────────────────────────

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <Star className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent ml-4" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-500 dark:text-gray-500 mb-16 ml-8"
        >
          A selection of things I&apos;ve built recently
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="group h-full flex flex-col p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center">
                  <Eye className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                </div>
                {project.featured && (
                  <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                    Featured
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed flex-1 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="px-2 py-0.5 rounded-md text-xs font-medium text-gray-400 dark:text-gray-600">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-white/10">
                <Link href={"/projects/" + project.slug} className="flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" />
                  Details
                </Link>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="ml-auto flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                    <Eye className="w-3.5 h-3.5" />
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 rounded-xl bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 font-medium text-sm border border-gray-200 dark:border-white/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              Show All Projects ({projects.length})
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────

type FormState = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 10) e.message = "Message too short";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setFormState("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setFormState("success");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <Mail className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent ml-4" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-500 dark:text-gray-500 mb-16 ml-8"
        >
          Have a project in mind? Let&apos;s talk.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Let&apos;s build something great together
              </h3>
              <p className="text-gray-500 dark:text-gray-500 leading-relaxed">
                I&apos;m currently open to freelance projects, full-time roles, and interesting collaborations. Whether you have a question or just want to say hi, my inbox is always open.
              </p>
            </div>

            <div className="space-y-4">
              <a href={"mailto:" + socialLinks.email} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-indigo-500/30 transition-all duration-200 group">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 dark:text-gray-600 mb-0.5">Email</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                    {socialLinks.email}
                  </div>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 dark:text-gray-600 mb-0.5">Location</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              {[
                { href: socialLinks.github, icon: Github, label: "GitHub" },
                { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: socialLinks.twitter, icon: Twitter, label: "Twitter" },
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 border border-gray-200 dark:border-white/10 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-200">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {formState === "success" ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <Send className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Message Sent!</h3>
                <p className="text-gray-500 dark:text-gray-500 text-sm">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => setFormState("idle")} className="mt-2 px-4 py-2 rounded-lg text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/10 transition-colors">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Name</label>
                  <input
                    id="name" type="text" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className={["w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all", errors.name ? "border-red-400 dark:border-red-500/50" : "border-gray-200 dark:border-white/10 focus:border-indigo-500/50"].join(" ")}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
                  <input
                    id="email" type="email" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className={["w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all", errors.email ? "border-red-400 dark:border-red-500/50" : "border-gray-200 dark:border-white/10 focus:border-indigo-500/50"].join(" ")}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
                  <textarea
                    id="message" rows={5} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className={["w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all resize-none", errors.message ? "border-red-400 dark:border-red-500/50" : "border-gray-200 dark:border-white/10 focus:border-indigo-500/50"].join(" ")}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                >
                  {formState === "loading" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export function FooterSection() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-100 dark:border-white/10 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            alex<span className="text-indigo-500">.</span>dev
          </span>
          <span className="text-gray-300 dark:text-gray-700">·</span>
          <span className="text-xs text-gray-400 dark:text-gray-600">
            © {year} Alex Rivera. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-4">
          {[
            { href: socialLinks.github, icon: Github, label: "GitHub" },
            { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: socialLinks.twitter, icon: Twitter, label: "Twitter" },
            { href: "mailto:" + socialLinks.email, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="text-gray-400 dark:text-gray-600 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-600">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
