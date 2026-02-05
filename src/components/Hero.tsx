"use client";

import React from "react";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export const Hero = ({ title, description, ctaPrimary, ctaSecondary }: HeroProps) => {
  // Parsing the title to add the gradient span if it matches the design
  const parts = title.split("confidence");

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 whitespace-pre-line">
            {parts.length > 1 ? (
              <>
                {parts[0]}
                <span className="gradient-text">confidence</span>
                {parts[1]}
              </>
            ) : (
              title
            )}
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary">{ctaPrimary}</Button>
            <Button size="lg" variant="outline">{ctaSecondary}</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="aspect-[16/9] rounded-2xl border border-white/10 bg-surface shadow-2xl overflow-hidden relative">
             {/* Mocking the UI screen with a gradient and some shapes */}
             <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
             <div className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-3 h-3 rounded-full bg-white/20" />
                   <div className="w-3 h-3 rounded-full bg-white/20" />
                   <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>
                <div className="flex-1 grid grid-cols-4 gap-4">
                   <div className="col-span-1 rounded-xl bg-white/5 animate-pulse" />
                   <div className="col-span-3 rounded-xl bg-white/5 animate-pulse" />
                </div>
             </div>
          </div>

          {/* Decorative glows */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-primary/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-secondary/20 rounded-full blur-[100px]" />
        </motion.div>
      </div>
    </section>
  );
};
