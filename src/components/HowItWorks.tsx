"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";

interface HowItWorksProps {
  title: string;
  subtitle: string;
  steps: Array<{ number: string; title: string; description: string }>;
}

export const HowItWorks = ({ title, subtitle, steps }: HowItWorksProps) => {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="flex-1">
          <div className="sticky top-32">
            <h4 className="text-brand-secondary font-bold uppercase tracking-widest text-sm mb-4">{subtitle}</h4>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              {title}
            </h2>
            <div className="space-y-12">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-white/60 leading-relaxed max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6">
           <div className="aspect-[4/5] rounded-3xl bg-surface-muted border border-white/5 relative overflow-hidden">
              <div className="absolute top-10 left-10 right-10 bottom-10 bg-white/5 rounded-2xl border border-white/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-secondary/10 blur-[100px]" />
           </div>
        </div>
      </div>
    </Section>
  );
};
