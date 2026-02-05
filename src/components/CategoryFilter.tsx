"use client";

import React from "react";
import { Category } from "@/lib/basehub";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onSelect: (slug: string) => void;
}

export const CategoryFilter = ({ categories, selectedCategory, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
      {categories.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => onSelect(cat.slug)}
          className={cn(
            "px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all border",
            selectedCategory === cat.slug
              ? "bg-brand-primary text-black border-brand-primary shadow-lg shadow-brand-primary/20"
              : "bg-surface border-white/5 text-white/60 hover:text-white hover:border-white/10"
          )}
        >
          {cat.title}
        </button>
      ))}
    </div>
  );
};
