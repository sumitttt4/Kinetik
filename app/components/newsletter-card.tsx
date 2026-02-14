'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Check, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { kinetikSpring } from '@/lib/motion';

export function NewsletterCard() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      // Reset after showing success
      setTimeout(() => setStatus('idle'), 2000);
    }, 1500);
  };

  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="group relative w-full max-w-md rounded-[2.5rem] bg-gray-100 dark:bg-[#151c2f] p-8 shadow-[-10px_-10px_30px_#ffffff,10px_10px_30px_#d1d5db] dark:shadow-[-5px_-5px_20px_rgba(255,255,255,0.03),5px_5px_20px_rgba(0,0,0,0.4)] transition-colors duration-300">
        
        {/* Content */}
        <div className="relative flex flex-col gap-6">
          <p className="text-sm font-medium leading-relaxed text-slate-500 dark:text-slate-400">
            Subscribe to our newsletter to receive news and updates. We promise not to spam you. Max 1 email per month.
          </p>

          <form onSubmit={handleSubmit} className="relative flex items-center justify-between gap-3">
            {/* Input Wrapper - Neumorphic Inset */}
            <div className="relative flex-1 rounded-2xl bg-gray-100 dark:bg-[#151c2f] shadow-[inset_6px_6px_10px_#d1d5db,inset_-6px_-6px_10px_#ffffff] dark:shadow-[inset_4px_4px_10px_rgba(0,0,0,0.5),inset_-4px_-4px_10px_rgba(255,255,255,0.02)] transition-shadow duration-300">
              <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">
                <Mail className="h-5 w-5" />
              </div>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status !== 'idle'}
                className="h-14 w-full bg-transparent pl-12 pr-4 text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400 disabled:opacity-50 dark:text-slate-200"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status !== 'idle'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "relative flex h-14 items-center justify-center gap-2 overflow-hidden rounded-2xl px-6 font-semibold transition-all duration-300",
                status === 'success' 
                  ? "bg-green-500 text-white shadow-[6px_6px_15px_#86efac,-6px_-6px_15px_#ffffff] dark:shadow-[6px_6px_15px_rgba(34,197,94,0.3),-6px_-6px_15px_rgba(255,255,255,0.05)]"
                  : "bg-indigo-500 text-white shadow-[6px_6px_15px_#a5b4fc,-6px_-6px_15px_#ffffff] dark:shadow-[6px_6px_15px_rgba(99,102,241,0.3),-6px_-6px_15px_rgba(255,255,255,0.05)] hover:bg-indigo-600"
              )}
            >
              <AnimatePresence mode="wait" initial={false}>
                {status === 'loading' ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={kinetikSpring}
                  >
                    <Loader2 className="h-5 w-5 animate-spin" />
                  </motion.div>
                ) : status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={kinetikSpring}
                    className="flex items-center gap-2"
                  >
                    <Check className="h-5 w-5" />
                    <span>Joined</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={kinetikSpring}
                    className="flex items-center gap-2"
                  >
                    <Mail className="h-5 w-5" />
                    <span>Subscribe</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
}
