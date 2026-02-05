"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Quote } from "lucide-react";

interface TestimonialsProps {
  title: string;
  description: string;
  items: Array<{ text: string; author: string; role: string }>;
}

export const Testimonials = ({ title, description, items }: TestimonialsProps) => {
  return (
    <Section className="bg-surface/30">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((t, idx) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-10 rounded-3xl bg-surface border border-white/5 flex flex-col gap-6"
          >
            <Quote className="w-10 h-10 text-brand-primary opacity-20" />
            <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-white/90">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/10" />
              <div>
                <p className="font-bold text-white">{t.author}</p>
                <p className="text-white/40 text-sm">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
