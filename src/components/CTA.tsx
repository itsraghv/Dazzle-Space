"use client";

import React from "react";
import { Button } from "./ui/Button";
import { Section } from "./Section";
import { motion } from "framer-motion";

interface CTAProps {
  title: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export const CTA = ({ title, description, ctaPrimary, ctaSecondary }: CTAProps) => {
  const parts = title.split("what matters");

  return (
    <Section className="pb-32">
      <div className="relative rounded-[3rem] bg-gradient-to-br from-brand-primary/20 via-surface to-brand-secondary/20 p-12 md:p-24 overflow-hidden border border-white/10 text-center">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl -z-10" />

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {parts.length > 1 ? (
              <>
                {parts[0]} <span className="gradient-text">what matters</span>
                {parts[1]}
              </>
            ) : (
              title
            )}
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto mb-10">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary">{ctaPrimary}</Button>
            <Button size="lg" variant="outline">{ctaSecondary}</Button>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-primary/30 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-secondary/30 blur-[120px] translate-x-1/2 translate-y-1/2" />
      </div>
    </Section>
  );
};
