"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle, Mail, MapPin } from "lucide-react";
import { fadeUpVariant, staggerContainer } from "@/lib/motion";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgorgwlv";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <motion.h2
            variants={fadeUpVariant}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
            style={{
              background: "linear-gradient(150deg, #f4f4f5 30%, #71717a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            GET IN TOUCH
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-muted leading-relaxed mb-12 max-w-md">
            Open to work and collaborations.
            <br />
            Contact me if you need a frontend developer.
          </motion.p>

          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="flex flex-col items-center gap-4 w-full max-w-lg py-12"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle size={22} className="text-accent" />
                </div>
                <p className="text-text font-medium">Message sent!</p>
                <p className="text-sm text-muted max-w-xs">
                  Thank you. I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-xs text-muted/60 hover:text-muted transition-colors duration-200 underline underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 w-full max-w-lg"
              >
                <div className="grid sm:grid-cols-2 gap-3">
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-muted/40 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all duration-200"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-muted/40 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all duration-200"
                  />
                </div>
                <textarea
                  required
                  rows={5}
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-muted/40 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all duration-200 resize-none"
                />
                {error && (
                  <p className="text-xs text-red-400 text-center -mb-1">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 bg-accent/10 text-accent border border-accent/20 text-sm font-medium rounded-xl hover:bg-white/5 hover:border-white/10 hover:text-text active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <ArrowUpRight size={14} />}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          <motion.div
            variants={fadeUpVariant}
            className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-muted"
          >
            <a
              href="mailto:kobzan.dev@gmail.com"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-white/5 hover:text-text transition-all duration-200"
            >
              <Mail size={14} className="text-accent" />
              kobzan.dev@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-accent" />
              Lviv, Ukraine
            </span>
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            className="flex items-center justify-center gap-3 mt-6"
          >
            <a
              href="https://github.com/nemesic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full text-muted hover:text-text hover:bg-white/5 transition-all duration-200"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com/in/oleksiikobzan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full text-muted hover:text-text hover:bg-white/5 transition-all duration-200"
            >
              <LinkedinIcon size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}