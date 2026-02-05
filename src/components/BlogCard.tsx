"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/basehub";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export const BlogCard = ({ post, index }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className="flex flex-col h-full rounded-3xl bg-surface border border-white/5 overflow-hidden transition-all duration-300 hover:border-brand-primary/30 hover:shadow-2xl hover:shadow-brand-primary/5">
          <div className="aspect-[16/9] relative overflow-hidden bg-white/5">
            {post.coverImage ? (
              <img
                src={post.coverImage}
                alt={post.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center">
                 <div className="text-white/20 font-bold text-4xl">Dayconn</div>
              </div>
            )}
            <div className="absolute top-4 left-4 flex gap-2">
              {post.categories.map((cat) => (
                <span
                  key={cat.slug}
                  className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs font-medium text-brand-primary border border-white/10"
                >
                  {cat.title}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 flex flex-col flex-1">
            <div className="flex items-center gap-4 text-white/40 text-sm mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-white/60 line-clamp-2 mb-6">
              {post.excerpt}
            </p>

            <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/10" />
                <span className="text-sm font-medium text-white/80">{post.author.name}</span>
              </div>
              <div className="text-brand-primary flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all">
                Read more <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
