"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Section } from "./Section";

interface FeatureRowProps {
  title: string;
  description: string;
  ctaText: string;
  reverse?: boolean;
}

export const FeatureRow = ({ title, description, ctaText, reverse }: FeatureRowProps) => {
  return (
    <Section>
      <div className={cn("flex flex-col gap-12 items-center", reverse ? "md:flex-row-reverse" : "md:flex-row")}>
        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: reverse ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-lg mb-8">{description}</p>
            <button className="text-brand-secondary font-semibold flex items-center gap-2 group">
              {ctaText}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </motion.div>
        </div>

        <div className="flex-1 w-full">
           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-square md:aspect-video rounded-3xl bg-surface-muted border border-white/5 relative overflow-hidden flex items-center justify-center"
           >
              <div className="w-2/3 h-2/3 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 rotate-3 transition-transform hover:rotate-0 duration-500" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-primary/10 blur-[80px]" />
           </motion.div>
        </div>
      </div>
    </Section>
  );
};
