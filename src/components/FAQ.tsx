"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { Plus, Minus } from "lucide-react";

interface FAQProps {
  title: string;
  items: Array<{ question: string; answer: string }>;
}

export const FAQ = ({ title, items }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center">
          {title}
        </h2>
        <div className="space-y-4">
          {items.map((faq, idx) => (
            <div
              key={idx}
              className="border border-white/5 rounded-2xl bg-surface/50 overflow-hidden"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-lg font-bold">{faq.question}</span>
                {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-white/60 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-white/40">
           Can’t find the answers you’re looking for? <span className="text-brand-secondary cursor-pointer hover:underline">Send us an email</span>
        </p>
      </div>
    </Section>
  );
};
