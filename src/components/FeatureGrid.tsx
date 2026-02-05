"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Zap, Bell, Smartphone, Users } from "lucide-react";

interface FeatureGridProps {
  title: string;
  description: string;
  items: Array<{ title: string; description: string }>;
}

export const FeatureGrid = ({ title, description, items }: FeatureGridProps) => {
  const icons = [
    <Zap key="zap" className="w-6 h-6 text-brand-primary" />,
    <Bell key="bell" className="w-6 h-6 text-brand-secondary" />,
    <Smartphone key="phone" className="w-6 h-6 text-brand-primary" />,
    <Users key="users" className="w-6 h-6 text-brand-secondary" />,
  ];

  return (
    <Section className="bg-surface/50">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((feature, idx) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 rounded-3xl bg-surface border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {icons[idx % icons.length]}
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
