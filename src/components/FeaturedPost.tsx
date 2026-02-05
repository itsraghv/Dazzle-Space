"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/basehub";

interface FeaturedPostProps {
  post: BlogPost;
}

export const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative rounded-[2.5rem] bg-surface border border-white/5 overflow-hidden transition-all duration-500 hover:border-brand-primary/20">
          <div className="grid lg:grid-cols-2">
            <div className="aspect-video lg:aspect-auto relative overflow-hidden bg-white/5">
              {post.coverImage ? (
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center">
                  <div className="text-white/20 font-bold text-6xl">Featured</div>
                </div>
              )}
            </div>

            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider border border-brand-primary/20">
                  Featured Post
                </span>
                {post.categories.map((cat) => (
                  <span
                    key={cat.slug}
                    className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs font-medium border border-white/5"
                  >
                    {cat.title}
                  </span>
                ))}
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 group-hover:text-brand-primary transition-colors leading-tight">
                {post.title}
              </h2>
              <p className="text-white/60 text-lg mb-8 line-clamp-3 max-w-xl">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-6 text-white/40 text-sm mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/10" />
                  <div>
                    <p className="font-bold text-white/90">{post.author.name}</p>
                    <p className="text-xs">{post.author.role}</p>
                  </div>
                </div>
                <div className="h-8 w-[1px] bg-white/10" />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-brand-primary font-bold text-lg group-hover:gap-4 transition-all">
                Read full article <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
