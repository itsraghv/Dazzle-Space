"use client";

import React, { useState } from "react";
import { BlogPost, Category } from "@/lib/basehub";
import { FeaturedPost } from "@/components/FeaturedPost";
import { BlogCard } from "@/components/BlogCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { Section } from "@/components/Section";
import { motion, AnimatePresence } from "framer-motion";

interface BlogIndexClientProps {
  initialPosts: BlogPost[];
  categories: Category[];
}

export const BlogIndexClient = ({ initialPosts, categories }: BlogIndexClientProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = initialPosts.filter(post =>
    selectedCategory === "all" || post.categories.some(c => c.slug === selectedCategory)
  );

  const featuredPost = initialPosts.find(p => p.featured) || initialPosts[0];
  const gridPosts = filteredPosts.filter(p => p.slug !== featuredPost.slug);

  return (
    <>
      <Section className="py-0 mb-20">
        <div className="max-w-3xl mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Insights & <span className="text-brand-primary">updates</span>
          </motion.h1>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-xl text-white/60 leading-relaxed"
          >
            Deep dives into productivity, time management, and the future of scheduling.
          </motion.p>
        </div>

        {selectedCategory === "all" && featuredPost && (
          <div className="mb-24">
            <FeaturedPost post={featuredPost} />
          </div>
        )}

        <div className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-8">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
            <div className="text-white/40 text-sm font-medium">
              Showing {filteredPosts.length} articles
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {(selectedCategory === "all" ? gridPosts : filteredPosts).map((post, idx) => (
                <BlogCard key={post.slug} post={post} index={idx} />
              ))}
            </AnimatePresence>
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-white/40 text-xl">No articles found in this category.</p>
              <button
                onClick={() => setSelectedCategory("all")}
                className="mt-4 text-brand-primary font-bold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </Section>
    </>
  );
};
