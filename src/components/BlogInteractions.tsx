"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlogInteractionsProps {
  postSlug: string;
  initialClaps?: number;
}

export const BlogInteractions = ({ postSlug, initialClaps = 0 }: BlogInteractionsProps) => {
  const [claps, setClaps] = useState(initialClaps);
  const [sessionClaps, setSessionClaps] = useState(0);
  const [showBubble, setShowBubble] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleClap = () => {
    if (sessionClaps < 50) {
      setClaps(prev => prev + 1);
      setSessionClaps(prev => prev + 1);
      setShowBubble(true);

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setShowBubble(false);
        console.log(`Clapped ${sessionClaps} times for ${postSlug}`);
        // Persist claps to API here
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-40">
      <div className="glass px-6 py-4 rounded-full flex items-center gap-6 shadow-2xl">
        <div className="relative">
          <AnimatePresence>
            {showBubble && (
              <motion.div
                initial={{ opacity: 0, y: 0, scale: 0.5 }}
                animate={{ opacity: 1, y: -60, scale: 1 }}
                exit={{ opacity: 0, scale: 1.5 }}
                className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-black font-bold w-12 h-12 rounded-full flex items-center justify-center text-sm shadow-xl"
              >
                +{sessionClaps}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={handleClap}
            className={cn(
              "flex items-center gap-2 group transition-all duration-300",
              sessionClaps > 0 ? "text-brand-primary" : "text-white/60 hover:text-white"
            )}
          >
            <div className="relative">
              <span className="text-2xl group-active:scale-125 transition-transform inline-block">👏</span>
            </div>
            <span className="font-bold text-lg">{claps}</span>
          </button>
        </div>

        <div className="h-6 w-[1px] bg-white/10" />

        <div className="flex items-center gap-4">
           <button className="text-white/60 hover:text-white transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
           </button>
           <button className="text-white/60 hover:text-white transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
           </button>
        </div>
      </div>
    </div>
  );
};
